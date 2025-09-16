import { Link } from "react-router-dom";

export default function Urishhavelvacnertv(){
  return (
    <div className="flex flex-col max-w-[1230px] m-auto mb-[50px]">
      <h1>Այլ հավելվածներ</h1>
      <div className="flex">
        <Link to="/teampay" className="block no-underline text-[#000000]">
          <div className="flex h-[250px] mr-[100px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer">
            <img
              src="https://www.telecomarmenia.am/images/team_apps/1/16590919068437.png"
              alt="Team Pay"
              className="w-[50%] mr-[25px] rounded-[10px]"
            />
            <div className="flex flex-col">
              <h2 className="mb-[25px] text-[20px] font-semibold no-underline">
                Team Pay
              </h2>

              <p className="no-underline w-[230px] text-[16px] mb-[20px] space-y-[8px]">
                Էլեկտրոնային դրամապանակ ավելի քան 50 տեսակի վճարումների համար
                Հատուկ առաջարկներ և ակցիաներ
              </p>

              <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                Միանալ
              </button>
            </div>
          </div>
        </Link>

        <Link to="/teamenergy" className="block no-underline text-[#000000]">
          <div className="flex h-[250px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer">
            <img
              src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png"
              alt="Team Energy"
              className="w-[50%] mr-[25px] rounded-[10px]"
            />
            <div className="flex flex-col">
              <h2 className="mb-[25px] text-[20px] font-semibold">
                Team Energy
              </h2>

              <p className="w-[250px] mb-[20px]">
                Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական
                լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ
                լիցքավորել…
              </p>

              <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                Միանալ
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
