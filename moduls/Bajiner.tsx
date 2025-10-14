import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import Maser from "./Maser";

// Տիպ տվյալների համար
interface GlxavorItem {
  id: string;
  name: string;
  image: string;
}

export default function GlxavorList() {
  const [glxavor, setGlxavor] = useState<GlxavorItem[]>([]);

  useEffect(() => {
    async function fetchGlxavor() {
      try {
        const docRef = doc(db, "glxavor", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setGlxavor(data.items || []);
        } else {
          setGlxavor([]);
        }
      } catch (err) {
        setGlxavor([]);
      }
    }

    fetchGlxavor();
  }, []);

  return (
    <div className="pt-[39px] pb-[81px]">
      <div className="mx-auto max-w-[1260px] px-[20px] flex flex-wrap gap-[20px]">
        {glxavor.map(({ id, name, image }) => (
          <Maser key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
}
