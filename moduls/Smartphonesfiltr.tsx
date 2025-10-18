import { useState, useEffect } from "react";
import Navbaj from "./Navbaj-apranqner";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

interface Smartphone {
  id: number;
  anun: string;
  nkar: string;
  gin: string;
  text: string;
  aparik?: string;
}

export default function Smartphonesmas() {
  const [data, setData] = useState<Smartphone[]>([]);
  const [filtered, setFiltered] = useState<Smartphone[]>([]);
  const [loading, setLoading] = useState(true);

  // ⬇️ բազմակի ֆիլտրերի վիճակներ
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedStorages, setSelectedStorages] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "eshopheraxos", "data");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const items = docSnap.data().items as Smartphone[];
          setData(items);
          setFiltered(items);
        }
      } catch (e) {
        console.error("Տվյալների բեռնման սխալ:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Գնի տիրույթներ
  const priceRanges: Record<string, [number, number]> = {
    "1,000 ֏ - 50,000 ֏": [1000, 50000],
    "50,000 ֏ - 100,000 ֏": [50000, 100000],
    "100,000 ֏ - 150,000 ֏": [100000, 150000],
    "150,000 ֏ - 200,000 ֏": [150000, 200000],
    "200,000 ֏ - 300,000 ֏": [200000, 300000],
    "300,000 ֏ - 500,000 ֏": [300000, 500000],
  };

  const parsePrice = (price: string): number =>
    Number(price.replace(/[^\d]/g, "")) || 0;

  // ✅ Ֆիլտրի ֆունկցիա
  const applyFilters = () => {
    let filteredData = [...data];

    // Գնի ֆիլտր
    if (selectedPrices.length > 0) {
      filteredData = filteredData.filter((item) => {
        const priceNum = parsePrice(item.gin);
        return selectedPrices.some((range) => {
          const [min, max] = priceRanges[range];
          return priceNum >= min && priceNum <= max;
        });
      });
    }

    // Ներքին հիշողության ֆիլտր
    if (selectedStorages.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedStorages.some((storage) => item.anun.includes(storage))
      );
    }

    // Բրենդի ֆիլտր
    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedBrands.some((brand) =>
          item.anun.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    setFiltered(filteredData);
  };

  const clearFilters = () => {
    setSelectedPrices([]);
    setSelectedStorages([]);
    setSelectedBrands([]);
    setFiltered(data);
  };

  // ✅ Checkbox toggle helper
  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="mb-[80px]">
      <div className="mx-auto max-w-[1260px] px-[20px] flex gap-[40px]">
        {/* Ֆիլտրեր */}
        <div className="bg-[#f5f6f7] border border-[#f5f6f7] rounded-b-[5px] pt-[20px] w-[288px]">
          <h2
            className="border-b border-[#ebedef] tracking-[1px] mb-[10px] px-[20px] pb-[18px]"
            style={{
              fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'",
            }}
          >
            Ֆիլտրեր
          </h2>

          {/* Գնի ֆիլտր */}
          <div className="px-[20px] py-[10px] border-b border-[#ebedef]">
            <p className="text-[18px] font-semibold mb-[10px]">Գին</p>
            {Object.keys(priceRanges).map((range, idx) => (
              <label
                key={idx}
                className="block mb-[12px] text-[17px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range)}
                  onChange={() =>
                    toggleSelection(range, selectedPrices, setSelectedPrices)
                  }
                  className="mr-[8px] accent-blue-500"
                />
                {range}
              </label>
            ))}
          </div>

          {/* Ներքին հիշողություն */}
          <div className="px-[20px] py-[10px] border-b border-[#ebedef]">
            <p className="text-[18px] font-semibold mb-[10px]">
              Ներքին հիշողություն
            </p>
            {["32 GB", "64 GB", "128 GB", "256 GB", "512 GB"].map(
              (opt, idx) => (
                <label
                  key={idx}
                  className="block mb-[12px] text-[17px] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedStorages.includes(opt)}
                    onChange={() =>
                      toggleSelection(opt, selectedStorages, setSelectedStorages)
                    }
                    className="mr-[8px] accent-blue-500"
                  />
                  {opt}
                </label>
              )
            )}
          </div>

          {/* Բրենդի ֆիլտր */}
          <div className="px-[20px] py-[10px] border-b border-[#ebedef]">
            <p className="text-[18px] font-semibold mb-[10px]">Բրենդ</p>
            {["Samsung", "Apple", "Xiaomi", "Honor", "Huawei", "Realme"].map(
              (brand, idx) => (
                <label
                  key={idx}
                  className="block mb-[12px] text-[17px] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      toggleSelection(brand, selectedBrands, setSelectedBrands)
                    }
                    className="mr-[8px] accent-blue-500"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Կոճակներ */}
          <div className="bg-[#f5f6f7] pt-[30px] px-[20px] pb-[20px]">
            <button
              onClick={applyFilters}
              className="w-full h-[44px] px-[18px] font-[800] border-none text-[#ffffff] text-[18px] bg-[#f04d4d] rounded-[30px] hover:bg-[#e03a3a] transition-all duration-200 text-center whitespace-nowrap mb-[10px]"
            >
              Ֆիլտրել
            </button>
            <button
              onClick={clearFilters}
              className="w-full text-[#2c3843] underline border-none bg-[#f5f6f7]"
            >
              Մաքրեք ֆիլտրերը
            </button>
          </div>
        </div>

        {/* Ապրանքներ */}
        <div className="flex-1">
          {loading ? (
            <p>Բեռնվում է...</p>
          ) : filtered.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-[20px] mb-[100px]">
              {filtered.map((el) => (
                <Navbaj
                  key={el.id}
                  id={el.id}
                  anun={el.anun}
                  nkar={el.nkar}
                  gin={el.gin}
                  text={el.text}
                  aparik={el.aparik}
                  image={el.nkar}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-[20px] text-gray-500 mt-[60px]">
              Արդյունքներ չեն գտնվել 😔
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
