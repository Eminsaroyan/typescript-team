import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

import "swiper/css";
import "swiper/css/navigation";
import Buj from "./Eshopbajinmas";

// Տիպավորում slide տարրերի համար
interface Slide {
  id: string;
  vernagir?: string;
  bovandakutyun?: string;
  but?: string;
  image: string;
  color?: string;
}

export default function EshopBajSlider() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "eshopbaj", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSlides(docSnap.data().items || []);
        } else {
          console.error("❌ Փաստաթուղթը չի գտնվել");
        }
      } catch (error) {
        console.error("❌ Սխալ տվյալների ստացման ժամանակ:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mx-auto z-[-666] p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        loop={slides.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((el) => (
          <SwiperSlide key={el.id}>
            {el.vernagir ? (
              <Buj
                vernagir={el.vernagir}
                bovandakutyun={el.bovandakutyun}
                but={el.but}
                image={el.image}
                color={el.color}
              />
            ) : (
              <img
                src={el.image}
                alt={el.vernagir || "Slide image"}
                className="ml-[450px] mt-[10px] rounded-lg"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
