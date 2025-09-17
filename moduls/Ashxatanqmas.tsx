import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Ashxatanqtext from "./Ashxatanqtext";

interface Job {
  id: string;
  mouth: string;
  vernagir: string;
  text: string;
}

export default function Ashxatanqmas() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const querySnapshot = await getDocs(collection(db, "Asxatanq"));
        const data: Job[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Job, "id">),
        }));
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="max-w-[1230px] m-auto mt-[30px] mb-[30px] px-[20px]">
      <h1 className="font-[800] font-team text-[28px] mb-[20px]">
        Աշխատանք Տելեկոմ Արմենիայում
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-[20px]">
        {jobs.map((item) => (
          <Ashxatanqtext
            key={item.id}
            mouth={item.mouth}
            vernagir={item.vernagir}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
