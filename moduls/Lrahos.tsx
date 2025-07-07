import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import Mas from "./Lrahosmaser";

// Տիպը յուրաքանչյուր նորության համար
interface NewsItem {
    id: string;
    image: string;
    mouth: string;
    name: string;
}

export default function Lrahos() {
    const [data, setData] = useState<NewsItem[]>([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const querySnapshot = await getDocs(collection(db, "news"));
                const items: NewsItem[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...(doc.data() as Omit<NewsItem, 'id'>),
                }));
                setData(items);
            } catch (error) {
                console.error("Error loading news:", error);
            }
        }
        fetchNews();
    }, []);

    const slidesPerViewDefault = 3;
    const slidesPerGroupDefault = 3;
    const enableLoop = data.length >= slidesPerViewDefault && data.length >= slidesPerGroupDefault;

    return (
        <div className="mt-[40px] pl-[120px] pr-[120px] mx-auto px-[20px]">
            <h1 className="text-[32px] font-bold mb-[20px] text-center">Լրահոս</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={slidesPerViewDefault}
                slidesPerGroup={slidesPerGroupDefault}
                navigation
                loop={enableLoop}
                speed={800}
                breakpoints={{
                    500: { slidesPerView: 1, slidesPerGroup: 1 },
                    640: { slidesPerView: 2, slidesPerGroup: 2 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3 },
                }}
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <Mas image={item.image} mouth={item.mouth} name={item.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
