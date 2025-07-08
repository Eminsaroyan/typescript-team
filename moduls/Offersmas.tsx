import { useEffect, useState } from "react";
import Offerstext from "./Offersdiv";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

// 🔹 Տիպավորում Offer-ի համար
interface Offer {
  mouth: string;
  vernagir: string;
  text: string;
}

export default function Offersmas() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const docRef = doc(db, "eshopoffers", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setOffers(data.items || []);
        } else {
          console.error("❌ eshopoffers/data փաստաթուղթը չի գտնվել");
        }
      } catch (error) {
        console.error("❌ Սխալ Firebase-ից տվյալ բեռնելիս:", error);
      }
    }

    fetchOffers();
  }, []);

  return (
    <div className="max-w-[1230px] m-auto mt-[30px] mb-[30px] px-[20px]">
      <h1 className="font-[800] font-team text-[28px] mb-[20px]">Ակցիաներ</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-[20px]">
        {offers.map((item, index) => (
          <Offerstext
            key={index}
            mouth={item.mouth}
            vernagir={item.vernagir}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
