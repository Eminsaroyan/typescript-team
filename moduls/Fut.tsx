import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Fut() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 766);
  const [isMedium, setIsMedium] = useState(
    window.innerWidth > 766 && window.innerWidth <= 780
  );
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 766);
      setIsMedium(window.innerWidth > 766 && window.innerWidth <= 780);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div>
      <div
        className={`bg-[#01415f] text-[#ffffff] pt-[30px] pb-[100px] 
        ${isMobile
            ? "flex flex-col justify-center "
            : isMedium
              ? "flex flex-col gap-[10px] px-[40px]"
              : " grid grid-cols-4 gap-[40px] px-[80px]"
              
          }`}
      >
        <img
          src="https://www.telecomarmenia.am/img/logo-light.svg?v=1"
          alt="Logo"
          className="w-[50%] mb-[20px]"
        />
        <div className="leading-[32px] flex flex-col min-w-[180px]">
          {isMobile ? (
            <>
              <button
                onClick={() => toggleSection("company")}
                className="w-full mb-[2px] text-start text-[16px] text-[#ffffff] border-none bg-[#70798233] font-bold flex justify-between items-center pt-[13px] pr-[45px] pb-[13px] pl-[20px]"
              >
                Ընկերության մասին
                <span>{openSection === "company" ? "▲" : "▼"}</span>
              </button>
              {openSection === "company" && (
                <div className="flex flex-col ml-[12px] gap-[1px]">
                  <Link to="/mermasin" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Մեր մասին</Link>
                  <Link to="/museum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Կապի թանգարան</Link>
                  <Link to="/norutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Նորություններ</Link>
                  <Link to="/ashxatanq" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Աշխատանք Տելեկոմ Արմենիայում</Link>
                  <Link to="/hashvetvutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Արդյունքներ և հաշվետվություններ</Link>
                  <Link to="/ethics" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գործարար Էթիկա և Կոմպլայենս</Link>
                  <Link to="/zargacum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Կայուն զարգացում</Link>
                  <Link to="/bazhneter" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Բաժնետերերին</Link>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="mb-[12px] font-bold">Ընկերության մասին</h2>
              <Link to="/mermasin" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Մեր մասին</Link>
              <Link to="/museum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Կապի թանգարան</Link>
              <Link to="/norutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Նորություններ</Link>
              <Link to="/ashxatanq" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Աշխատանք Տելեկոմ Արմենիայում</Link>
              <Link to="/hashvetvutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Արդյունքներ և հաշվետվություններ</Link>
              <Link to="/ethics" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գործարար Էթիկա և Կոմպլայենս</Link>
              <Link to="/zargacum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Կայուն զարգացում</Link>
              <Link to="/bazhneter" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Բաժնետերերին</Link>
            </>
          )}
        </div>

        <div className="leading-[32px] flex flex-col min-w-[180px]">
          {isMobile ? (
            <>
              <button
                onClick={() => toggleSection("info")}
                className="w-full mb-[2px] text-left text-[16px] text-[#ffffff] border-none bg-[#70798233] font-bold flex justify-between items-center pt-[13px] pr-[45px] pb-[13px] pl-[20px]"
              >
                Տեղեկատվություն
                <span>{openSection === "info" ? "▲" : "▼"}</span>
              </button>
              {openSection === "info" && (
                <div className="flex flex-col ml-[12px] gap-[1px]">
                  <Link to="/paymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ընդհանուր դրույթներ և պայմաններ</Link>
                  <Link to="/anvtangutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Անվտանգություն</Link>
                  <Link to="/eshoppaymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">E-shop պայմաններ</Link>
                  <Link to="/aparik" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ապառիկ վաճառքի պայմաններ</Link>
                  <Link to="/arakum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Առաքման պայմաններ</Link>
                  <Link to="/vacharqi-kentronner" className="text-[14px] text-[#c4c0c0] hover:">Վաճառքի և սպասարկման կենտրոններ</Link>
                  <Link to="/tackuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ծածկույթ</Link>
                  <Link to="/bjjnayin-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Բջջային ցանցի ծածկույթ</Link>
                  <Link to="/internet-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team ինտերնետի հասանելիության ծածկույթ</Link>
                  <Link to="/ogtagorci-pastatuxte" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Օգտակար փաստաթղթեր</Link>
                  <Link to="/gorcnqer-matakararner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գործընկերներին և մատակարարներին</Link>
                  <Link to="/gaxtniutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գաղտնիության քաղաքականություն</Link>
                  <Link to="/marzeri-koder" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">ՀՀ մարզերի կոդեր</Link>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="mb-[12px] font-bold">Տեղեկատվություն</h2>
              <Link to="/paymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ընդհանուր դրույթներ և պայմաններ</Link>
              <Link to="/anvtangutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Անվտանգություն</Link>
              <Link to="/eshoppaymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">E-shop պայմաններ</Link>
              <Link to="/aparik" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ապառիկ վաճառքի պայմաններ</Link>
              <Link to="/arakum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Առաքման պայմաններ</Link>
              <Link to="/vacharqi-kentronner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Վաճառքի և սպասարկման կենտրոններ</Link>
              <Link to="/tackuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Ծածկույթ</Link>
              <Link to="/bjjnayin-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Բջջային ցանցի ծածկույթ</Link>
              <Link to="/internet-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team ինտերնետի հասանելիության ծածկույթ</Link>
              <Link to="/ogtagorci-pastatuxte" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Օգտակար փաստաթղթեր</Link>
              <Link to="/gorcnqer-matakararner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գործընկերներին և մատակարարներին</Link>
              <Link to="/gaxtniutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Գաղտնիության քաղաքականություն</Link>
              <Link to="/marzeri-koder" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">ՀՀ մարզերի կոդեր</Link>
            </>
          )}
        </div>


        <div className="leading-[32px] flex flex-col min-w-[180px]">
          {isMobile ? (
            <>
              <button
                onClick={() => toggleSection("apps")}
                className="w-full mb-[2px] text-left  text-[16px] text-[#ffffff] border-none bg-[#70798233] font-bold flex justify-between items-center pt-[13px] pr-[45px] pb-[13px] pl-[20px]"
              >
                Team հավելվածներ
                <span>{openSection === "apps" ? "▲" : "▼"}</span>
              </button>
              {openSection === "apps" && (
                <div className="flex flex-col ml-[12px]">
                  <Link to="/teamtv" className="text-[14px]  text-[#c4c0c0] no-underline hover:underline">TeamTV</Link>
                  <Link to="/myteam" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">My Team</Link>
                  <Link to="/teampay" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team Pay</Link>
                  <Link to="/teamenergy" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team Energy</Link>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/teamhavelvacner" className="text-[#ffffff] text-[24px] font-bold mb-3 no-underline hover:underline">Team հավելվածներ</Link>
              <Link to="/teamtv" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">TeamTV</Link>
              <Link to="/myteam" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">My Team</Link>
              <Link to="/teampay" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team Pay</Link>
              <Link to="/teamenergy" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">Team Energy</Link>
            </>
          )}
        </div>
      </div>


      <div className="flex justify-center bg-[#022739] text-[#ffffff] pt-[20px] pb-[20px]">
        <p>Team © 2025</p>
      </div>
    </div>
  );
}
