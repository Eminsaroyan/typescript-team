import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Biznesmas from './Biznesbajinermas';

interface BiznesItem {
    id: string;
    name: string;
    text1: string;
    image: string;
}

export default function BiznesFromFirebase() {
    const [biznes, setBiznes] = useState<BiznesItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBiznes() {
            try {
                const docRef = doc(db, "biznes", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setBiznes(data.items || []);
                } else {
                    setBiznes([]);
                    console.warn("No such document!");
                }
            } catch (err: any) {
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }
        fetchBiznes();
    }, []);

    if (loading) return <p>Բեռնվում է տվյալները...</p>;
    if (error) return <p>Սխալ՝ {error}</p>;

    return (
        <div className="pt-[39px] pb-[81px]">
            <div className="mx-auto max-w-[1260px] px-[20px] flex flex-wrap gap-[20px]">
                {biznes.map(el => (
                    <Biznesmas key={el.id} name={el.name} text1={el.text1} image={el.image} />
                ))}
            </div>
        </div>
    );
}
