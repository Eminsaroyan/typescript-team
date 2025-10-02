import { useState } from "react";

const faqSections = [
  {
    id: 1,
    label: "Բջջային կապ",
    questions: [
      { id: 11, question: "Ինչպես ակտիվացնել SIM քարտը", answer: "SIM քարտը ակտիվացնելու համար անհրաժեշտ է..." },
      { id: 12, question: "Ինչպես փոխել փաթեթը", answer: "Փաթեթը փոխելու համար այցելեք ձեր անձնական գրասենյակ..." },
    ],
  },
  {
    id: 2,
    label: "Team Բոնուս",
    questions: [
      { id: 21, question: "Բոնուսային կետերի կանոններ", answer: "Բոնուսային կետերը начисляются при..." },
      { id: 22, question: "Ինչպես ստուգել բալանսը", answer: "Բալանսը ստուգելու համար կարող եք ..." },
    ],
  },
  {
    id: 3,
    label: "Ինտերնետ",
    questions: [
      { id: 31, question: "Ինչպես միանալ ինտերնետին", answer: "Ինտերնետին միանալու համար հարկավոր է ակտիվ սակագին..." },
      { id: 32, question: "Ինչպես ստուգել ինտերնետի մնացորդը", answer: "Մնացորդը կարելի է ստուգել *123# հրամանով կամ անձնական գրասենյակում։" },
    ],
  },
  {
    id: 4,
    label: "Ֆիքսված հեռախոսակապ և Տան համար",
    questions: [
      { id: 41, question: "Ինչպես միացնել ֆիքսված հեռախոսակապը", answer: "Դիմեք մեր գրասենյակ կամ զանգահարեք 100՝ ծառայությունը միացնելու համար։" },
      { id: 42, question: "Արդյոք հնարավոր է պահպանել հին համարը", answer: "Այո, հնարավոր է պահել ձեր գործող համարը՝ տեղափոխվելով մեր ցանց։" },
    ],
  },
  {
    id: 5,
    label: "Վճարումներ",
    questions: [
      { id: 51, question: "Ինչպես կատարել օնլայն վճարում", answer: "Մուտք գործեք անձնական գրասենյակ և ընտրեք վճարման եղանակը։" },
      { id: 52, question: "Ինչպես միացնել ավտոմատ վճարում", answer: "Կարող եք կապել բանկային քարտը և ակտիվացնել auto-pay ծառայությունը։" },
    ],
  },
  {
    id: 6,
    label: "Անձնական գրասենյակ",
    questions: [
      { id: 61, question: "Ինչպես մուտք գործել անձնական գրասենյակ", answer: "Մուտք գործեք login.telecom.am էջ՝ մուտքանուն և գաղտնաբառ մուտքագրելով։" },
      { id: 62, question: "Ինչպես վերականգնել գաղտնաբառը", answer: "Կարող եք օգտագործել «Մոռացե՞լ եք գաղտնաբառը» ֆունկցիան։" },
    ],
  },
];

export default function FAQAccordion() {
  const [activeSection, setActiveSection] = useState<number | null>(faqSections[0].id);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const activeSectionObj = faqSections.find((s) => s.id === activeSection);

  return (
    <div className="max-w-[1230px] mb-[100px] m-auto gap-[20px]">

      <h2 className="mt-[25px] mb-[40px] text-[2.25rem] text-[#2c3843] font-[600]"
        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
      >Հաճախ տրվող հարցեր</h2>
      <div className="max-w-[1230px] m-auto flex gap-8">
        <div className="w-[300px] flex flex-col mr-[20px]">
          {faqSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setOpenQuestion(null);
              }}
              className={`w-full text-left px-[20px] py-[15px] font-semibold transition shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] 
      ${activeSection === section.id
                  ? "bg-[#86d2da]/20 font-[600]  text-[#2c3843]"
                  : "hover:bg-gray-100 text-gray-700"}
      border-none border-b-[1px] border-gray-300
      ${index === 0 ? "rounded-t-[10px]" : ""}
      ${index === faqSections.length - 1 ? "rounded-b-[10px] border-b-0" : ""} 
    `}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Աջ կողմ՝ հարցեր և պատասխաններ */}
        <div className="flex-1">
          {activeSectionObj && (
            <ul>
              {activeSectionObj.questions.map((q) => (
                <li key={q.id} className=" list-none ">
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="w-full text-left border-none px-[10px]  py-[20px] font-[600] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] flex justify-between items-center text-[18px] font-medium text-[#616161]"
                  >
                    {q.question}
                    <span
                      className={`transition-transform duration-300 text-[#FF0000] ${openQuestion === q.id ? "rotate-180" : "rotate-0"}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openQuestion === q.id && (
                    <div className="mt-[12px] text-[#01415f] text-[16px] leading-relaxed">
                      {q.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
