import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
    id: string | number;
    quantity: number;
    // Եթե ունես ուրիշ դաշտեր, տուր էլ դրանք էլ
    [key: string]: any;
}

interface CartState {
    cart: Product[];
    toggleProduct: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
    isInCart: (id: string | number) => boolean;
    getCartCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            toggleProduct: (product) => {
                const currentCart = get().cart;
                const existing = currentCart.find((item) => item.id === product.id);

                if (existing) {
                    const updated = currentCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    set({ cart: updated });
                } else {
                    set({ cart: [...currentCart, { ...product, quantity: 1 }] });
                }
            },
            decreaseQuantity: (product) => {
                const currentCart = get().cart;
                const existing = currentCart.find((item) => item.id === product.id);

                if (existing && existing.quantity > 1) {
                    const updated = currentCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                    set({ cart: updated });
                } else {
                    const filtered = currentCart.filter((item) => item.id !== product.id);
                    set({ cart: filtered });
                }
            },
            isInCart: (id) => get().cart.some((item) => item.id === id),
            getCartCount: () =>
                get().cart.reduce((total, item) => total + item.quantity, 0),
        }),
        {
            name: 'cart-storage',
        }
    )
);
