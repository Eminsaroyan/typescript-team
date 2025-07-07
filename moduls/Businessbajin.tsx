import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Bajin from "./Businessbajinmas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Տվյալների ինտերֆեյսը
interface SlideData {
    id: string;
    vernagir: string;
    text1: string;
    text2: string;
    text3: string;
    image: string;
    bg: string;
    but: string;
}

export default function BiznesBajSlider() {
    const [slides, setSlides] = useState<SlideData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "biznesbaj", "data");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setSlides(docSnap.data().items || []);
                } else {
                    console.error("❌ Փաստաթուղթը չի գտնվել");
                }
            } catch (error) {
                console.error("❌ Սխալ տվյալները բեռնելիս:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                loop={slides.length > 1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Bajin
                            vernagir={el.vernagir}
                            text1={el.text1}
                            text2={el.text2}
                            text3={el.text3}
                            image={el.image}
                            bg={el.bg}
                            but={el.but}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
