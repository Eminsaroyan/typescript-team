import { Link } from "react-router-dom";

export default function Fut() {
  return (
    <div>
      <div className="bg-[#01415f] flex text-[#ffffff] items-start justify-evenly pt-[30px] pb-[100px] flex-wrap">
        <img
          src="https://www.telecomarmenia.am/img/logo-light.svg?v=1"
          alt="Logo"
        />
        <div className="leading-[32px] cursor-pointer flex flex-col min-w-[180px]">
          <h2 className="mb-[12px]">Ընկերության մասին</h2>
          <Link to="/mermasin" className="text-[14px] text-[#c4c0c0] no-underline hover:underline text-black">
            <p className="text-[14px] text-[#c4c0c0]">Մեր մասին</p>
          </Link>
          <Link to="/museum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Կապի թանգարան
          </Link>
          <Link to="/norutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Նորություններ
          </Link>
          <Link to="/ashxatanq" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Աշխատանք Տելեկոմ Արմենիայում
          </Link>
          <Link to="/hashvetvutyunner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Արդյունքներ և հաշվետվություններ
          </Link>
          <Link to="/ethics" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Գործարար Էթիկա և Կոմպլայենս
          </Link>
          <Link to="/zargacum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Կայուն զարգացում
          </Link>
          <Link to="/bazhneter" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Բաժնետերերին
          </Link>
        </div>
        <div className="flex flex-col leading-[30px] cursor-pointer min-w-[180px]">
          <h2 className="mb-[12px]">Տեղեկատվություն</h2>
          <Link to="/paymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Ընդհանուր դրույթներ և պայմաններ
          </Link>
          <Link to="/anvtangutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Անվտանգություն
          </Link>
          <Link to="/eshoppaymaner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            E-shop պայմաններ
          </Link>
          <Link to="/aparik" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Ապառիկ վաճառքի պայմաններ
          </Link>
          <Link to="/arakum" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Առաքման պայմաններ
          </Link>
          <Link to="/vacharqi-kentronner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Վաճառքի և սպասարկման կենտրոններ
          </Link>
          <Link to="/tackuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Ծածկույթ
          </Link>
          <Link to="/bjjnayin-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Բջջային ցանցի ծածկույթ
          </Link>
          <Link to="/internet-tsakuyt" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Team ինտերնետի հասանելիության ծածկույթ
          </Link>
          <Link to="/ogtagorci-pastatuxte" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Օգտակար փաստաթղթեր
          </Link>
          <Link to="/gorcnqer-matakararner" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Գործընկերներին և մատակարարներին
          </Link>
          <Link to="/gaxtniutyun" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            Գաղտնիության քաղաքականություն
          </Link>
          <Link to="/marzeri-koder" className="text-[14px] text-[#c4c0c0] no-underline hover:underline">
            ՀՀ մարզերի կոդեր
          </Link>
        </div>
        <div className="flex flex-col leading-[30px] cursor-pointer min-w-[180px]">
          <Link to="/teamhavelvacner" className="no-underline hover:underline text-black">
            <h2 className="text-[#ffffff] hover:underline transition-all duration-200">Team հավելվածներ</h2>
          </Link>
          <Link to="/teamtv" className="text-[14px] no-underline text-[#c4c0c0] hover:underline transition-all duration-200">
            TeamTV
          </Link>
          <Link to="/myteam" className="text-[14px] no-underline text-[#c4c0c0] hover:underline transition-all duration-200">
            My Team
          </Link>
          <Link to="/teampay" className="text-[14px] no-underline text-[#c4c0c0] hover:underline transition-all duration-200">
            Team Pay
          </Link>
          <Link to="/teamenergy" className="text-[14px] no-underline text-[#c4c0c0] hover:underline transition-all duration-200">
            Team Energy
          </Link>
        </div>
      </div>
      <div className="flex justify-center bg-[#022739] text-[#ffffff] pt-[20px] pb-[20px]">
        <p>Team © 2025</p>
      </div>
    </div>
  );
}
