import { useEffect, useState, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // 🔗 փոխիր ըստ քո նախագծի

// 🔹 Տիպերը
interface ContentItem {
  label: string;
  link: string;
}

interface Tab {
  id: string;
  title: string;
  content: ContentItem[];
}

export default function Paymanermas() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showArchiveList, setShowArchiveList] = useState<boolean>(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const archiveRef = useRef<HTMLUListElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  // 🔽 Բեռնում է Firestore-ից
  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const docRef = doc(db, "termsTabs", "tabs");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedTabs = docSnap.data().tabs as Tab[];
          setTabs(fetchedTabs);
          setActiveTab(fetchedTabs[0]?.id || null); // ընտրում ենք առաջին tab-ը
        } else {
          console.error("Document 'tabs' not found in termsTabs");
        }
      } catch (error) {
        console.error("❌ Error fetching termsTabs:", error);
      }
    };

    fetchTabs();
  }, []);

  // 🔽 Արխիվի բացման transition
  useEffect(() => {
    if (showArchiveList) {
      setMaxHeight(archiveRef.current?.scrollHeight + "px" || "0px");
    } else {
      setMaxHeight("0px");
    }
  }, [showArchiveList]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setShowArchiveList(false);
    setOpenIndexes([]);
  };

  const activeTabObj =
    tabs.find((tab) => tab.id === activeTab) || { content: [] as ContentItem[] };

  return (
    <div className="max-w-[1230px] m-auto flex flex-col gap-6 pt-[40px] px-4">
      <h1 className="text-[45px] font-[600] font-team mb-[40px]">
        Ընդհանուր դրույթներ և պայմաններ
      </h1>

      <div className="flex mb-[50px]">
        {/* Ձախ կողմի Tab-երը */}
        <div className="w-[300px] pr-[4rem]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-full text-left pl-[10px] pr-[20px] border-none py-[2rem] rounded transition ${
                activeTab === tab.id
                  ? "bg-[#3fd0cf]/20 text-black font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Աջ կողմի բովանդակություն */}
        <div className="flex-1 text-[18px] text-[#333] leading-relaxed">
          {activeTab === "general" ? (
            <div className="flex flex-col gap-6">
              {activeTabObj.content.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleIndex(index)}
                    className={`text-[30px] font-[600] mb-[10px] w-full text-left border-none border-b-2 pr-[60px] transition-colors duration-300 ${
                      openIndexes.includes(index)
                        ? "text-[#01415f] border-[#01415f]"
                        : "text-gray-700 border-transparent hover:text-[#01415f] hover:border-[#01415f] hover:underline underline-offset-[6px] hover:decoration-[#01415f]"
                    }`}
                  >
                    {item.label}
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                      openIndexes.includes(index)
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mt-[3px] mb-[10px] text-[18px] text-[#01415f] leading-[1.6]">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                      >
                        {item.label}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setShowArchiveList(!showArchiveList)}
                className="text-[#01415f] bg-white text-[30px] font-[600] pr-[60px] border-none border-b-2 border-[#01415f] hover:underline underline-offset-[6px] mb-[20px] hover:decoration-[#01415f] transition"
              >
                Արխիվային ընդհանուր դրույթներ և պայմաններ
              </button>

              <ul
                ref={archiveRef}
                style={{
                  maxHeight: maxHeight,
                  overflow: "hidden",
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                  opacity: showArchiveList ? 1 : 0,
                }}
                className="mt-[6px] leading-[2] list-none pl-[20px] space-y-3"
              >
                {activeTabObj.content.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
