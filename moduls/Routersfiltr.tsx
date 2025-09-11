import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import Navbaj from "./Navbaj-apranqner";

// 📌 Տիպ ռոութերի համար
interface RouterItem {
  id: string;
  anun: string;
  nkar: string;
  gin: number;
  text: string;
  aparik?: string;
}

export default function Routersfiltr() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState<boolean>(false);
  const [routers, setRouters] = useState<RouterItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRouters = async () => {
      try {
        const docRef = doc(db, "equipment", "routers");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as { items?: RouterItem[] };
          setRouters(data.items || []);
        } else {
          console.log("📭 Փաստաթուղթը չի գտնվել");
        }
      } catch (error) {
        console.error("❌ Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRouters();
  }, []);

  return (
    <div>
      <h1 className="w-[100] mt-[20px] border-t border-t-[#ebedef]"></h1>
      <div className="mt-[20px] max-w-[1230px] mx-auto flex bg-white py-6">
        {/* 🟢 Ֆիլտրերի բլոկ */}
        <div className="mr-[10px]">
          <div className="w-[288px] border-none">
            <div className="mb-[20px] pt-[18px] bg-[#f8f9f9] border-[#ebedef]">
              <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] mb-[20px]">
                <h2 className="pt-0 px-[20px] pb-[18px] mb-[10px] tracking-[1px] text-[18px] border-b border-b-[#ebedef]">
                  Ֆիլտրեր
                </h2>

                {/* Գին */}
                <div className="w-full max-w-[320px] bg-white border-b border-b-[#ebedef]">
                  <div className="w-full py-[10px] pr-[30px] pl-0">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                    >
                      Գին
                    </button>
                  </div>
                  {isOpen && (
                    <div className="px-[20px] py-[20px]">
                      <div className="space-y-[12px]">
                        {["1,000 ֏ - 50,000 ֏", "150,000 ֏ - 200,000 ֏"].map((range, idx) => (
                          <label
                            key={idx}
                            className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                          >
                            <input type="checkbox" name="price" className="mr-[8px] accent-blue-500" />
                            {range}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Զեղչված */}
                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                  <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                    <input type="checkbox" name="discount" className="mr-[8px] accent-blue-500" />
                    Զեղչված
                  </label>
                </div>

                {/* Պրոմո */}
                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                  <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                    <input type="checkbox" name="promo" className="mr-[8px] accent-blue-500" />
                    Պրոմո
                  </label>
                </div>

                {/* Բրենդ */}
                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                  <button
                    onClick={() => setIsBeautifulNumbersOpen(!isBeautifulNumbersOpen)}
                    className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                    aria-expanded={isBeautifulNumbersOpen}
                    aria-controls="brandContent"
                  >
                    Բրենդ
                  </button>
                  {isBeautifulNumbersOpen && (
                    <div
                      id="brandContent"
                      className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                    >
                      {["Nokia"].map((opt, idx) => (
                        <label
                          key={idx}
                          className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                        >
                          <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ֆիլտրել / Մաքրել */}
                <div className="bg-[#f5f6f7] pt-[30px] px-[20px] pb-[20px]">
                  <button className="w-full h-[44px] px-[18px] font-[800] border-none text-[#ffffff] text-[18px] bg-[#f04d4d] rounded-[30px] hover:bg-[#e03a3a] transition-all duration-200 text-center whitespace-nowrap mb-[10px]">
                    Ֆիլտրել
                  </button>
                  <button className="w-full text-[#2c3843] underline border-none bg-[#f5f6f7]">
                    Մաքրեք ֆիլտրերը
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🟢 Ապրանքների ցուցակ */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mb-[20px] p-[40px] gap-[20px]">
            <div className="w-[50%]">
              <input
                type="search"
                placeholder="Որոնել"
                className="w-full h-[44px] bg-white border border-[#ebedef] rounded-[22px] px-[20px] pl-[34px] py-[11px] box-border"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[#2c3843] text-[16px]">Դասավորել ըստ`</p>
              <select className="h-[44px] border border-[#ebedef] rounded-[22px] cursor-pointer block box-border px-[12px] text-[16px] text-[#2c3843]">
                <option value="">ընտրել</option>
                <option value="low-high">Գին՝ ցածրից բարձր</option>
                <option value="high-low">Գին՝ բարձրից ցածր</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 justify-center mb-[200px] gap-[20px]">
            {loading ? (
              <p className="text-center col-span-3">Բեռնվում է...</p>
            ) : routers.length === 0 ? (
              <div className="col-span-3 text-center">
                <h2 className="text-center">Արդյունքներ չեն գտնվել</h2>
                <img
                  src="https://www.telecomarmenia.am/eshop/img/empty-page.png"
                  alt=""
                  className="w-[30%] mx-auto"
                />
              </div>
            ) : (
              routers.map((item) => (
                <Navbaj
                  key={item.id}
                  id={item.id}
                  anun={item.anun}
                  nkar={item.nkar}
                  gin={item.gin}
                  text={item.text}
                  aparik={item.aparik}
                  image={item.nkar}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
