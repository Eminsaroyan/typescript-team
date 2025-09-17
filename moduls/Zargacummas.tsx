import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// 🔹 Տիպերի սահմանում Firebase-ի տվյալների համար
interface LinkItem {
  name: string;
  url: string;
}

interface ContentItem {
  label?: string;
  text?: string;
  links?: LinkItem[];
}

interface TabItem {
  id: string;
  title: string;
  content: ContentItem[];
}

export default function Zargacummas() {
  const [data, setData] = useState<TabItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "zargacumTabs", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const items = (docSnap.data().items || []) as TabItem[];
          setData(items);
          setActiveTab(items[0]?.id || null);
        } else {
          console.error("📛 Փաստաթուղթը չի գտնվել Firebase-ում");
        }
      } catch (err) {
        console.error("📛 Սխալ տվյալները ստանալու ժամանակ:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return <div className="text-center py-10 text-xl">Բեռնվում է...</div>;
  }

  const activeTabObj = data.find((tab) => tab.id === activeTab);

  return (
    <div className="max-w-[1230px] m-auto flex flex-col gap-6 pt-[40px] px-4">
      <h1 className="text-[45px] font-[600] font-team mb-[40px]">Կայուն զարգացում</h1>

      <div className="flex mb-[50px]">
        {/* Ձախ կողմի կոճակներ */}
        <div className="w-[300px] pr-[4rem]">
          {data.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndexes({});
              }}
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
          <div className="flex flex-col gap-6">
            {activeTabObj?.content.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleIndex(index)}
                  className={`text-[30px] font-[600] mb-[20px] w-full text-left border-none border-b-2 transition-colors duration-300 ${
                    openIndexes[index]
                      ? "text-[#01415f] border-[#01415f]"
                      : "text-gray-700 border-transparent hover:text-[#01415f] hover:border-[#01415f] hover:underline underline-offset-[6px] hover:decoration-[#01415f]"
                  }`}
                >
                  {item.label || "Բովանդակություն"}
                </button>

                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    openIndexes[index]
                      ? "max-h-[1000px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-[18px] text-[#01415f] mb-[20px] leading-[1.6] space-y-2">
                    {item.text && <p>{item.text}</p>}
                    {item.links?.map((link, i) => (
                      <p key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-700 hover:no-underline transition"
                        >
                          {link.name}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
