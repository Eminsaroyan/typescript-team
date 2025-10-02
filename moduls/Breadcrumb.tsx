import { Link, useLocation } from "react-router-dom";

const breadcrumbMap: Record<
    string,
    string | { to?: string; label: string }[]
> = {
    "/": "Գլխավոր",
    "/mermasin": "Ընկերության մասին > Մեր մասին",
    "/museum": "Ընկերության մասին > Կապի թանգարան",
    "/equipment": "Սարքավորումներ",
    "/smartphones": "Սմարթֆոններ",
    "/norutyunner": "Ընկերության մասին > Նորություններ",
    "/offers": "Ակցիաներ",
    "/bazhneter": "Ընկերության մասին > Բաժնետերերին",
    "/ethics": "Ընկերության մասին > Գործարար Էթիկա և Կոմպլայենս",
    "/ashxatanq": "Ընկերության մասին > Աշխատանք Տելեկոմ Արմենիայում",
    "/zargacum": "Ընկերության մասին > Կայուն զարգացում",
    "/paymaner": "Տեղեկատվություն > Ընդհանուր դրույթներ և պայմաններ",
    "/anvtangutyun": "Տեղեկատվություն > Անվտանգություն",
    "/eshoppaymaner": "Տեղեկատվություն > E-shop պայմաններ",
    "/arakum": "Տեղեկատվություն > Առաքման պայմաններ",
    "/vacharqi-kentronner": "Տեղեկատվություն > Վաճառքի և սպասարկման կենտրոններ",
    "/tackuyt": "Տեղեկատվություն > Ծածկույթ",
    "/internet-tsakuyt": "Տեղեկատվություն > Team ինտերնետի հասանելիության ծածկույթ",
    "/ogtagorci-pastatuxte": "Տեղեկատվություն > Օգտակար փաստաթղթեր",
    "/gorcnqer-matakararner": "Գնումներ",
    "/bjjnayin-tsakuyt": "Տեղեկատվություն > Բջջային ցանցի ծածկույթ",
    "/aparik": "Տեղեկատվություն > Ապառիկ վաճառքի պայմաններ",
    "/gordznker": "Գործընկերներ",
    "/vacharner": "Վաճառքներ",
    "/gaxtniutyun": "Տեղեկատվություն > Գաղտնիության քաղաքականություն",
    "/marzeri-koder": "Տեղեկատվություն > ՀՀ մարզերի կոդեր",
    "/equipment/audio": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: "Աուդիո" },
    ],
    "/smart-home": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: "Խելացի տուն" },
    ],
    "/laptops-tablets": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: "Նոթբուքեր և Պլանշետներ" },
    ],
    "/routers": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: " Ռոուտերներ" },
    ],
    "/gamepads": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: "GamePad" },
    ],
    "/e-transport": [
        { to: "/", label: "Գլխավոր" },
        { to: "/equipment", label: "Սարքավորումներ" },
        { label: "Էլ․ տրանսպորտ" },
    ],
    "/accessories": "Աքսեսուարներ",
    "/smart-watches": [
        { to: "/", label: "Գլխավոր" },
        { to: "/accessories", label: "Աքսեսուարներ" },
        { label: "Սմարթ ժամացույցներ" },
    ],
    "/audio": [
        { to: "/", label: "Գլխավոր" },
        { to: "/accessories", label: "Աքսեսուարներ" },
        { label: "Աուդիո" },
    ],
    "/storage": [
        { to: "/", label: "Գլխավոր" },
        { to: "/accessories", label: "Աքսեսուարներ" },
        { label: "Կրիչներ" },
    ],
    "/connectivity": [
        { to: "/", label: "Գլխավոր" },
        { to: "/accessories", label: "Աքսեսուարներ" },
        { label: "Միացումներ" },
    ],
    "/other": [
        { to: "/", label: "Գլխավոր" },
        { to: "/accessories", label: "Աքսեսուարներ" },
        { label: "Այլ" },
    ],
    "/mobile": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/mobile", label: "Սակագներ" },
        { label: "Բջջային կապ" },
    ],
    "/hetvcharyin": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/mobile", label: "Սակագներ" },
        { label: "Բջջային կապ" },
    ],
    "/smartfonihamr": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/smartfonihamr", label: "Ինտերնետ" },
        { label: "Սմարթֆոնի համար" },
    ],
    "/internethetvcharyin": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/internethetvcharyin", label: "Ինտերնետ" },
        { label: "Սմարթֆոնի համար" },
    ],
    "/Internetkanxavcharyin": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/Internetkanxavcharyin", label: "Ինտերնետ" },
        { label: "Սմարթֆոնի համար" },
    ],
    "/faq": [
        { to: "/", label: "Գլխավոր" },
        { to: "/", label: "Անհատներին" },
        { to: "/faq", label: "Օգնություն" },
        { label: "Հաճախ տրվող հարցեր" },
    ],
    "/businessfaq": [
        { to: "/", label: "Գլխավոր" },
        { to: "/business", label: "Բիզնես" },
        { to: "/businessfaq", label: "Օգնություն" },
        { label: "Հաճախ տրվող հարցեր" },
    ],
    "/bizneshetvcharyin": [
        { to: "/", label: "Գլխավոր" },
        { to: "/business", label: "Բիզնես" },
        { to: "/bizneshetvcharyin", label: "Սակագներ" },
        { label: "Բջջային կապ" },
    ],
    "/smartbizneshetvcharayin": [
        { to: "/", label: "Գլխավոր" },
        { to: "/business", label: "Բիզնես" },
        { to: "/smartbizneshetvcharayin", label: "Ինտերնետ" },
        { label: "Սմարթֆոնի համար" },
    ],
};

export default function Breadcrumb() {
    const { pathname } = useLocation();

    const cleanedPath = pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

    const exactMatch = breadcrumbMap[cleanedPath];

    if (exactMatch) {
        return (
            <div className="text-[14px] max-w-[1230px] m-auto mt-[20px] mb-6">
                {Array.isArray(exactMatch) ? (
                    exactMatch.map((crumb, idx) => (
                        <span key={idx} className="text-black">
                            {idx > 0 && " > "}
                            {crumb.to ? (
                                <Link to={crumb.to} className="text-[#000000] hover:underline">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                        </span>
                    ))
                ) : (
                    <>
                        <Link to="/" className="text-[#000000] hover:underline">
                            Գլխավոր
                        </Link>
                        <span className="text-black">{" > "}{exactMatch}</span>
                    </>
                )}
            </div>
        );
    }

    const pathSegments = cleanedPath.split("/").filter(Boolean);

    let matchedPath = "";
    let bestMatch = null;

    for (let i = 1; i <= pathSegments.length; i++) {
        const segmentPath = "/" + pathSegments.slice(0, i).join("/");
        if (breadcrumbMap[segmentPath]) {
            matchedPath = segmentPath;
            bestMatch = breadcrumbMap[segmentPath];
        }
    }

    if (!bestMatch) return null;

    return (
        <div className="text-[14px] max-w-[1230px] m-auto mt-[20px] mb-6">
            {Array.isArray(bestMatch) ? (
                bestMatch.map((crumb, idx) => (
                    <span key={idx} className="text-black">
                        {idx > 0 && " > "}
                        {crumb.to ? (
                            <Link to={crumb.to} className="text-[#000000] hover:underline">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span>{crumb.label}</span>
                        )}
                    </span>
                ))
            ) : (
                <>
                    <Link to="/" className="text-[#000000] hover:underline">
                        Գլխավոր
                    </Link>
                    <span className="text-black">{" > "}{bestMatch}</span>
                </>
            )}
        </div>
    );
}
