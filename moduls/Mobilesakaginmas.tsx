import { NavLink, useLocation } from "react-router-dom";

interface Sakagin {
    to: string;
    label: string;
}

export default function Mobilesakagin() {
    const location = useLocation();

    const equipmentList: Sakagin[] = [
        {
            to: "/kanxavcharyin",
            label: "Կանխավճարային",
        },
        {
            to: "/hetvcharyin",
            label: "Հետվճարային",
        },
    ];

    return (
        <div className="w-full border-b-[1px] mt-[10px] mb-[12px] mx-auto">
            <ul className="flex justify-center list-none w-full">
                {equipmentList.map(({ to, label }, index) => {
                    
                    const isDefaultActive =
                        location.pathname === "/mobile" && to === "/hetvcharyin";

                    return (
                        <li key={index} className="w-[12%]">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `w-full flex text-[#000000] items-center no-underline justify-center border-b-[3px] transition-all duration-300 ${
                                        isActive || isDefaultActive
                                            ? "border-[#f04d4d] border-b-[3px]" 
                                            : "border-transparent"
                                    }`
                                }
                            >
                                <p className="text-[20px] mb-[12px] font-medium">
                                    {label}
                                </p>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
