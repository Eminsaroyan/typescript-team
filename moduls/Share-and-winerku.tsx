export default function Shareerku() {
  return (
    <div className="py-[60px] px-4 bg-[#01425f]">
      {/* Տիտղոս */}
      <h2
        className="mb-[60px] text-center text-[#fff] text-[64px] sm:text-[72px] md:text-[74px] font-[400] leading-[1.1] break-words"
        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
      >
        Ծառայության <span className="block">առավելությունները</span>
      </h2>

      {/* Grid 4 հատ */}
      <div className="grid grid-cols-4  gap-8 text-center text-[#fff]">
        {[
          {
            img: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16498478378277.png",
            title: "Պատրաստի լուծում",
            desc: "Ձեր հարթակի պարզ և արագ ինտեգրում` առանց որևէ ծախսի Team համակարգերի հետ ավտոմատ ծանուցումներ ուղարկելու համար։",
          },
          {
            img: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16498479885084.png",
            title: "Հավատարմության բարձրացում",
            desc: "Ուղարկեք անոնսներ նորությունների, իրադարձությունների և ընկերության կարևոր միջոցառումների մասին։",
          },
          {
            img: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16498479885364.png",
            title: "Վաճառքների խթանում",
            desc: "Ապահովեք մինչև 20% վաճառքների աճ:",
          },
          {
            img: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16498479885611.png",
            title: "SMS-թիրախավորում",
            desc: "Ընտրեք համապատասխան լսարանը 5 հատկանիշների հիման վրա։",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  rounded-[16px] p-6"
          >
            <img src={item.img} alt={item.title} className="w-20 h-20 mb-[20px]" />
            <h3 className="text-[25px] font-semibold mb-[20px] font-[600]">{item.title}</h3>
            <p className="w-[250px] leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
