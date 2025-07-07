import { useState, FormEvent } from "react";

export default function Biznesfootregistor() {
  // Ֆորմայի դաշտերի state-եր՝ տիպավորված որպես string
  const [transferNumber, setTransferNumber] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");

  // Սիմպլ submit handler՝ դեֆոլտ գործողությունը արգելելու համար
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Կարելի այստեղ ուղարկել տվյալները API կամ firebase
    console.log({ transferNumber, name, organization, phone });
    alert("Դիմումը ուղարկվել է");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#143046] pt-[60px] text-[#ffffff]">
      <h1 className="w-[700px] mb-[10px] text-center text-[60px]">Տեղափոխվե՛ք Team Ձեր համարով</h1>
      <p className="w-[650px] text-center text-[16px] mb-[80px]">
        Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից` պահելով Ձեր բջջային հեռախոսի համարը:
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-[900px]">
        <div className="grid items-center grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="transferNumber" className="mb-[12px] text-[13px]">
              Տեղափոխվող համար <span className="text-red-500">*</span> (0XXYYYYYY ֆորմատով)
            </label>
            <input
              type="tel"
              id="transferNumber"
              name="transferNumber"
              placeholder="0"
              pattern="0[0-9]{8}"
              required
              value={transferNumber}
              onChange={(e) => setTransferNumber(e.target.value)}
              className="pl-[10px] w-[400px] pt-[15px] pb-[15px] border-none mb-[40px] mr-[50px] rounded-[20px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-[12px] text-[13px]">
              Անուն Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Անուն Ազգանուն"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-[10px] w-[400px] pt-[15px] pb-[15px] border-none mb-[40px] rounded-[20px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="organization" className="mb-[12px] text-[13px]">
              Կազմակերպություն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="pl-[10px] w-[400px] pt-[15px] pb-[15px] border-none mb-[40px] rounded-[20px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-[12px] text-[13px]">
              Հեռախոսահամար <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="0XXYYYYYY"
              pattern="0[0-9]{8}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-[10px] w-[400px] pt-[15px] pb-[15px] border-none mb-[40px] rounded-[20px]"
            />
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-[250px] pt-[14px] pl-[20px] pr-[20px] pb-[14px] rounded-[20px] bg-[#ff0000] border-none text-[#ffffff] text-[20px]"
            >
              Միանալ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
