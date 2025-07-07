import { useCartStore } from './store';

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

export default function Cart() {
  const cart = useCartStore((state) => state.cart) as CartItem[];
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const toggleProduct = useCartStore((state) => state.toggleProduct);

  if (cart.length === 0) {
    return <div className="p-4 text-center">Զամբյուղը դատարկ է։</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Զամբյուղ</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-[80px] h-[80px] rounded" />
            <div>
              <p className="text-lg">{item.name}</p>
              <p className="text-sm text-gray-500">Քանակ: {item.quantity}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => decreaseQuantity(item)}
            >
              -
            </button>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded"
              onClick={() => toggleProduct(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
