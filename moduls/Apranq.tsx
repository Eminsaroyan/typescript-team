import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

import Apranqmas from "./Apranqmas";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

// ✅ Տիպավորում ապրանքների համար
interface Product {
    id: string;
    image: string;
    gin: string;
    name: string;
    aparic: string;
}

export default function Apranq(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchApranqmas() {
            try {
                const docRef = doc(db, "apranqmas", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProducts(data.items || []);
                } else {
                    console.error("❌ Տվյալը չի գտնվել Firebase-ում");
                }
            } catch (error) {
                console.error("❌ Սխալ տվյալները բեռնելիս:", error);
            }
        }

        fetchApranqmas();
    }, []);

    return (
        <div className="mt-[40px] m-[20px] mb-[20px]">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                slidesPerGroup={products.length >= 3 ? 3 : 1}
                pagination={{ clickable: true }}
                loop={products.length > 3}
                speed={800}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="max-w-[1400px] mx-auto"
            >
                {products.map((el) => (
                    <SwiperSlide key={el.id}>
                        <Apranqmas
                            id={el.id}
                            image={el.image}
                            gin={el.gin}
                            name={el.name}
                            aparic={el.aparic}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
