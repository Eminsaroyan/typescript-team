import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Sakagner from './Sakagner';

// ✅ Տվյալների տեսակը
interface TariffData {
    id: number;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
}

const data: TariffData[] = [
    {
        id: 1,
        text1: "PRO",
        text2: "3700",
        text3: "40 ԳԲ",
        text4: "1,500 րոպե",
        text5: "60 ալիք",
        text6: "1,500 SMS",
    },
    {
        id: 2,
        text1: "PRO",
        text2: "5200",
        text3: "Անսահմ․ ԳԲ",
        text4: "3,500 րոպե",
        text5: "110 ալիք",
        text6: "3,500 SMS",
    },
    {
        id: 3,
        text1: "PRO",
        text2: "8200",
        text3: "Անսահմ․ ԳԲ",
        text4: "6,000 րոպե",
        text5: "110 ալիք",
        text6: "6,000 SMS",
    },
    {
        id: 4,
        text1: "PRO",
        text2: "1900",
        text3: "9 ԳԲ",
        text4: "500 րոպե",
        text5: "40 ալիք",
        text6: "500 SMS",
    },
    {
        id: 5,
        text1: "Բիզնես",
        text2: "3000",
        text3: "6 ԳԲ",
        text4: "5,000 րոպե",
        text5: "250 րոպե",
        text6: "250 SMS",
    },
    {
        id: 6,
        text1: "Բիզնես",
        text2: "5000",
        text3: "10 ԳԲ",
        text4: "10,000 րոպե",
        text5: "350 րոպե",
        text6: "350 SMS",
    },
    {
        id: 7,
        text1: "Բիզնես",
        text2: "7000",
        text3: "20 ԳԲ",
        text4: "10,000 րոպե",
        text5: "500 րոպե",
        text6: "500 SMS",
    },
];

export default function SmartBusinessSlider() {
    return (
        <div className="flex">
            <div
                className="w-[290px] h-[400px] bg-[#4b5d6d] flex flex-col items-center justify-around"
                style={{ backgroundImage: 'url("https://www.telecomarmenia.am/img/settings.png")' }}
            >
                <span className="h-64 flex flex-col items-center">
                    <h2 className="text-[#ffffff]">SMART</h2>
                    <h2 className="text-[#ffffff]">BUSINESS</h2>
                </span>
                <p className="w-[240px] text-[#ffffff] text-center text-[25px]">Կարգավորեք Ձեր փաթեթը</p>
                <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] font-bold border-none rounded-[12px] bg-[#FF0000] text-[#ffffff]">
                    Միանալ
                </button>
            </div>
            <div className='w-[1000px]'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    navigation
                    loop={true}
                    speed={600}
                    className="w-full"
                >
                    {data.map((el) => (
                        <SwiperSlide key={el.id}>
                            <Sakagner {...el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
