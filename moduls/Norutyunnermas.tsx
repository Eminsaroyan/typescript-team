import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Nor from "./Norutyunmas";

interface NewsItem {
    id: string;
    image: string;
    mouth: string;
    name: string;
}

export default function Lur() {
    const [data, setData] = useState<NewsItem[]>([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const querySnapshot = await getDocs(collection(db, "news"));
                const items: NewsItem[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<NewsItem, "id">),
                }));
                setData(items);
            } catch (error) {
                console.error("Error loading news:", error);
            }
        }
        fetchNews();
    }, []);

    const groupedData: NewsItem[][] = [];
    for (let i = 0; i < data.length; i += 2) {
        groupedData.push(data.slice(i, i + 2));
    }

    return (
        <div className="p-[40px] max-w-[1230px] mx-auto">
            <h1 className="text-[32px] font-bold mb-[20px]">Նորություններ</h1>
            <div className="grid grid-cols-2">
                {groupedData.map((group, idx) => (
                    <div key={idx}>
                        {group.map((item) => (
                            <Nor
                                key={item.id}
                                image={item.image}
                                mouth={item.mouth}
                                name={item.name}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
