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
    "/offers": "Ակցիաներ",
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

    let matchedPath  = "";
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
