import { useCartStore } from './store';
import { Heart } from 'lucide-react';

export default function Apranqmas({ id, image, name, gin, aparic }) {
    const toggleProduct = useCartStore((state) => state.toggleProduct);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const isInCart = useCartStore((state) => state.isInCart(id));

    const handleHeartClick = () => {
        if (isInCart) {
            decreaseQuantity({ id, name, image, gin, aparic });
        } else {
            toggleProduct({ id, name, image, gin, aparic });
        }
    };

    return (
        <div className="h-full pt-[26px] pr-[20px] pb-[20px] pl-[20px] relative flex flex-col items-center border border-[#9E9E9E]  h-[600px] rounded-[12px] p-[10px] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:scale-[1] transition-all duration-300">
            <button onClick={handleHeartClick} className="absolute top-2 right-[25px] bg-[#fff] border-none">
                <Heart color={isInCart ? 'red' : 'gray'} fill={isInCart ? 'red' : 'none'} />
            </button>
            <p className="w-[300px] text-[18px] mb-[10px]">{name}</p>
            <p className="text-[18px] mb-[10px]">{gin}</p>
            <img src={image} alt={name} className="w-full mb-[5px] h-auto rounded-[12px]" />
            <p className="text-[18px] mb-[10px]">{aparic}</p>
        </div>
    );
}
