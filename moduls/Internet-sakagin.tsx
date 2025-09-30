import { NavLink, useLocation } from "react-router-dom";

interface Sakagin {
    to: string;
    label: string;
}

export default function Internetsakagin() {
    const location = useLocation();

    const equipmentList: Sakagin[] = [
        {
            to: "/internetkanxavcharyin",
            label: "Կանխավճարային",
        },
        {
            to: "/internethetvcharyin",
            label: "Հետվճարային",
        },
    ];

    return (
        <div className="w-full border-b-[1px] mt-[35px] mb-[12px] mx-auto">
            <ul className="flex justify-start  list-none w-full">
                {equipmentList.map(({ to, label }, index) => {
                    
                    const isDefaultActive =
                        location.pathname === "/mobile" && to === "/hetvcharyin";

                    return (
                        <li key={index} className="w-[12%] ml-[100px]">
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
