import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";


interface ContentItem {
    label?: string;
    text?: string;
    [key: string]: string | undefined;
}


interface Tab {
    id: string;
    title: string;
    content: ContentItem[];
}


interface SecureTabsDoc {
    bajin: Tab[];
}

export default function Anvtangutyunmas() {
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

    useEffect(() => {
        async function fetchTabs() {
            try {
                const docRef = doc(db, "secureTabs", "tabsData");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data() as SecureTabsDoc;
                    console.log("📁 Document data:", data);

                    const fetchedTabs = data.bajin;
                    if (!fetchedTabs || fetchedTabs.length === 0) {
                        console.error("⚠️ 'bajin' դաշտը դատարկ է կամ սխալ է:");
                        setTabs([]);
                        setActiveTab(null);
                        return;
                    }
                    setTabs(fetchedTabs);
                    setActiveTab(fetchedTabs[0]?.id || null);
                } else {
                    console.error("📄 Փաստաթուղթը գոյություն չունի։");
                }
            } catch (err) {
                console.error("🚫 Սխալ Firebase-ից տվյալները ստանալու ժամանակ:", err);
            }
        }

        fetchTabs();
    }, []);

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const activeTabObj = tabs.find((tab) => tab.id === activeTab);

    return (
        <div className="max-w-[1230px] m-auto flex flex-col gap-6 pt-[40px] px-4">
            <h1 className="text-[45px] font-[600] font-team mb-[40px]">Անվտանգություն</h1>

            <div className="flex mb-[50px]">

                <div className="w-[300px] pr-[4rem]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setOpenIndexes({});
                            }}
                            className={`w-full text-left pl-[10px] pr-[20px] border-none py-[2rem] rounded transition ${activeTab === tab.id
                                ? "bg-[#3fd0cf]/20 text-black font-semibold"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="flex-1 text-[18px] text-[#333] leading-relaxed">
                    <div className="flex flex-col gap-6">
                        {activeTabObj?.content?.map((item, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => toggleIndex(index)}
                                    className={`text-[30px] font-[600] mb-[15px] w-full text-left border-none border-b-2 pr-[60px] transition-colors duration-300 ${openIndexes[index]
                                        ? "text-[#01415f] border-[#01415f]"
                                        : "text-gray-700 border-transparent hover:text-[#01415f] hover:border-[#01415f] hover:underline underline-offset-[6px] hover:decoration-[#01415f]"
                                        }`}
                                >
                                    {item.label || "Խորհուրդ"}
                                </button>

                                {openIndexes[index] && (
                                    <div className="mt-[3px] mb-6 text-[18px] text-[#01415f] leading-[1.6]">
                                        {item.text && <p className="mb-2">{item.text}</p>}


                                        {Object.entries(item).some(([key]) => key.startsWith("li")) ? (
                                            <ul className="list-decimal list-inside ml-4 space-y-1">
                                                {Object.entries(item)
                                                    .filter(([key]) => key.startsWith("li"))
                                                    .sort((a, b) => {
                                                        const numA = parseInt(a[0].replace("li", ""), 10);
                                                        const numB = parseInt(b[0].replace("li", ""), 10);
                                                        return numA - numB;
                                                    })
                                                    .map(([key, val]) => (
                                                        <li key={key}>{val}</li>
                                                    ))}
                                            </ul>
                                        ) : (
                                            Object.entries(item)
                                                .filter(
                                                    ([key, val]) =>
                                                        val &&
                                                        typeof val === "string" &&
                                                        !key.startsWith("li") &&
                                                        key !== "label" &&
                                                        key !== "text"
                                                )
                                                .map(([key, val]) => (
                                                    <p key={key} className="mb-2">
                                                        {val}
                                                    </p>
                                                ))
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
