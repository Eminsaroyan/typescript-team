import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; 
import Eshopbajin from './Eshopbajinermas';

interface EshopItem {
  id: string | number;
  name: string;
  text1: string;
  text2: string;
  image: string;
  bg: string;
  color: string;
}

export default function EshopList() {
    const [eshop, setEshop] = useState<EshopItem[]>([]);

    useEffect(() => {
        async function fetchEshopData() {
            try {
                const docRef = doc(db, "eshop", "data");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setEshop(data.items || []);
                } else {
                    setEshop([]);
                }
            } catch (e) {
                setEshop([]);
            }
        }

        fetchEshopData();
    }, []);

    return (
        <div className="grid grid-cols-2 justify-items-center gap-4 mt-[50px] m-[90px] lg:grid-cols-2">
            {eshop.map((el) => (
                <Eshopbajin
                    key={el.id}
                    name={el.name}
                    text1={el.text1}
                    text2={el.text2}
                    image={el.image}
                    bg={el.bg}
                    color={el.color}
                />
            ))}
        </div>
    );
}
