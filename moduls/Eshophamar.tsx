import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

import Eshopapranq from "./Eshopapranq";
import Hamar from "./Eshophamarmas";

import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

// 🔹 Տիպավորում տվյալների էլեմենտների համար
interface HamarItem {
  id: string;
  vernagir: string;
  hamar: string;
  gin: string;
}

export default function EshopHamarSlider() {
  const [eshophamarner, setEshopHamarner] = useState<HamarItem[]>([]);

  useEffect(() => {
    async function fetchEshopHamarner() {
      try {
        const docRef = doc(db, "eshophamarner", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setEshopHamarner(data.items || []);
        } else {
          console.error("❌ Փաստաթուղթը չի գտնվել");
        }
      } catch (error) {
        console.error("❌ Սխալ տվյալների ստացման ժամանակ:", error);
      }
    }

    fetchEshopHamarner();
  }, []);

  const slidesPerView = 4;
  const enableLoop = eshophamarner.length > slidesPerView;

  return (
    <div>
      <Eshopapranq />
      <div className="mb-[25px]">
        <div className="mx-auto max-w-[1260px] px-[20px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            loop={enableLoop}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {eshophamarner.map((el) => (
              <SwiperSlide key={el.id}>
                <Hamar vernagir={el.vernagir} hamar={el.hamar} gin={el.gin} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
