import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Masmas from "./Info-mas";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Տվյալների TypeScript ինտերֆեյս
interface SlideData {
    id: string;
    vernagir: string;
    bovandakutyun: string;
    but: string;
    image: string;
    color: string;
    guyn: string;
    width: string;
}

export default function Info() {
    const [slides, setSlides] = useState<SlideData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "glxavorbaj", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data?.items) {
                        setSlides(data.items as SlideData[]);
                    } else {
                        console.warn("Չկան items դաշտում");
                    }
                } else {
                    console.error("Փաստաթուղթը գոյություն չունի");
                }
            } catch (error) {
                console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="mx-auto py-8">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={slides.length > 1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Masmas
                            vernagir={slide.vernagir}
                            bovandakutyun={slide.bovandakutyun}
                            but={slide.but}
                            image={slide.image}
                            color={slide.color}
                            guyn={slide.guyn}
                            width={slide.width}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
