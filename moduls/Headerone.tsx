import React, { useState, useEffect } from 'react';
import { useCartStore } from './store';
import { ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LANGUAGES = ['Հայ', 'Рус', 'Eng'] as const;
type Language = typeof LANGUAGES[number];

const Headerone: React.FC = () => {
    const location = useLocation();
    const pathname: string = location.pathname;

    const cartCount: number = useCartStore((state) =>
        state.cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0)
    );

    // Language state with type
    const getInitialLanguage = (): Language => {
        const saved = localStorage.getItem('language');
        if (saved && LANGUAGES.includes(saved as Language)) {
            return saved as Language;
        }
        return 'Հայ';
    };

    const [language, setLanguage] = useState<Language>(getInitialLanguage());

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <div className="h-[45px] flex justify-around items-center bg-[#01415f] text-[#ffffff]">
            <div className="flex items-center">
                <Link
                    to="/anhatner"
                    className={`p-[12px] transition-colors no-underline text-[#ffffff] duration-1000 ${pathname === '/anhatner' ? 'bg-[#0A6C9F]' : 'hover:bg-[#0A6C9F]'
                        }`}
                >
                    Անհատներին
                </Link>
                <Link
                    to="/business"
                    className={`text-[#ffffff] no-underline p-[12px] transition-colors duration-1000 ${pathname === '/business' ? 'bg-[#0A6C9F]' : 'hover:bg-[#0A6C9F]'
                        }`}
                >
                    Բիզնես
                </Link>
                <Link
                    to="/eshop"
                    className={`text-[#ffffff] p-[12px] no-underline flex items-center transition-colors duration-1000 ${pathname === '/eshop' ? 'bg-[#0A6C9F]' : 'hover:bg-[#0A6C9F]'
                        }`}
                >
                    <img src="/eshop-icon.svg" alt="eshop icon" className="mr-[12px]" />
                    E-shop
                </Link>
            </div>

            <div className="flex items-center">
                {LANGUAGES.map((lang) => (
                    <p
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`m-[10px] border-r pr-[20px] last:border-r-0 border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000 ${language === lang ? 'text-[#FF0000]' : ''
                            }`}
                    >
                        {lang}
                    </p>
                ))}
                <Link
                    to="/login"
                    target="_blank"
                    className={`text-[#ffffff] p-[12px] no-underline flex items-center transition-colors duration-1000 ${pathname === '/login' ? 'bg-[#0A6C9F]' : 'hover:bg-[#0A6C9F]'
                        }`}
                >
                    Անձնական գրասենյակ
                </Link>

                <Link to="/Cart" className="relative ml-[4] text-[#ffffff]">
                    <ShoppingCart />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Headerone;
