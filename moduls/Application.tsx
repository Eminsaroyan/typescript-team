export default function Application() {
  return (
    <div className="mt-[60px] flex items-center justify-around overflow-hidden relative">
      {/* Դեկորատիվ պտտված դիվը */}
      <div
        className="absolute bottom-[0] right-[0] w-[74%] pb-[84.42136%] bg-[#86d2da] -z-10 origin-bottom-left"
        style={{ transform: 'rotate(71deg)' }}
      ></div>

      <div className="flex flex-col items-start">
        <h1 className="text-[60px] mb-[20px]" style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}>Հավելված My Team</h1>
        <p className="text-[20px] font-300 mb-[20px]" style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}>
          Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար
        </p>
        <p className="text-[20px] font-[300] mb-[20px] w-[580px]" style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}>
          Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից
        </p>
        <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className="mb-[20px]" />
        <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" />
      </div>

      <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" alt="Application Image" className="w-[30%]" />
    </div>

  );
}
