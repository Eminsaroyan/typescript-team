import { useCartStore } from './store';

interface HamarProps {
    id: number;
    vernagir: string;
    hamar: string;
    gin: string;
    image: string;
}

export default function Hamar({ id, vernagir, hamar, gin, image }: HamarProps) {
    const toggleProduct = useCartStore((state) => state.toggleProduct);

    const handleAddToCart = () => {
        toggleProduct({
            id,
            vernagir: vernagir,
            image,
            gin,
        });
    };

    return (
        <div className="flex justify-center">
            <div className="w-[300px] h-[190px] mb-[50px] pb-[200px] border border-[#818182] flex flex-col justify-around rounded-[10px] transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
                <div className="justify-center items-center mb-[30px] flex bg-[#00425F] pt-[40px] pb-[40px] rounded-t-[10px] text-[#ffffff]">
                    <p className="text-[#ffffff] font-[25px]">{vernagir}</p>
                </div>
                <p className="text-center pb-[12px] mb-[70px] border-b border-b-[#000000] text-[30px]">{hamar}</p>
                <p className="text-[25px] ml-[12px] mb-[45px]">{gin}</p>

                <button
                    className="w-[220px] ml-[35px] pt-[10px] pb-[10px] text-center rounded-[25px] bg-[#ffffff] border border-[#f04d4d] text-[#f04d4d] hover:bg-[#f04d4d] hover:text-[#ffffff] transition-all duration-300"
                    onClick={handleAddToCart}
                >
                    Ավելացնել զամբյուղ
                </button>
            </div>
        </div>
    );
}
