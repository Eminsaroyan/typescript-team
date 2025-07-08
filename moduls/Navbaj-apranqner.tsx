import { useCartStore } from './store';

export default function Navbaj({ id, anun, nkar, gin, text, aparik, image }) {
    const toggleProduct = useCartStore(state => state.toggleProduct);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-x-8 gap-y-10 m-[20px]">
            <div className="w-full h-[480px] mb-12 pt-[26px] px-[15px] pb-[10px] rounded-[10px] border border bg-white shadow transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] flex flex-col justify-between group">

                <p className="text-gray-800 font-semibold text-lg mb-[10px] text-center group-hover:text-[#f04d4d] transition-colors duration-300">
                    {anun}
                </p>

                <img
                    src={nkar}
                    alt={anun}
                    className="w-full h-[250px] object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />

                <div>
                    <p className="text-red-600 font-bold text-[20px] mb-[2rem]">{gin}</p>
                    <p className="text-gray-600 mb-[1rem]">{text}</p>
                    <p className="text-gray-600 mb-6">{aparik}</p>
                </div>

                <button
                    className="w-full py-[10px] bg-[#ffffff] rounded-full bg-white border-2 border-[#f04d4d] text-[#f04d4d] font-semibold hover:bg-[#f04d4d] hover:text-[#ffffff] transition-colors duration-300"
                    onClick={() => toggleProduct({ id, anun, image, gin })}
                >
                    Ավելացնել զամբյուղ
                </button>
            </div>
        </div>

    );
}
