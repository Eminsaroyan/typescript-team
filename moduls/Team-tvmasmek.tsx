interface Feature {
  img: string;
  title: string;
  desc: string;
}

export default function Tvmek(){
  const features: Feature[] = [
    {
      img: "https://www.telecomarmenia.am/img/bee-tv-top-icon-1.png",
      title: "Catch-Up մինչև 7 օր",
      desc: "Ընտրեք հաղորդումը և դիտեք այն ձեզ հարմար ժամանակ"
    },
    {
      img: "https://www.telecomarmenia.am/img/bee-tv-top-icon-2.png",
      title: "Հարուստ տեսադարան",
      desc: "Ֆիլմերի, մուլտֆիլմերի և հեռուստասերիալների մեծ ընտրություն"
    },
    {
      img: "https://www.telecomarmenia.am/img/bee-tv-top-icon-3.png",
      title: "YouTube հեռուստացույցով",
      desc: "Դիտեք հոլովակներ ձեր հեռուստաէկրանին"
    }
  ];

  return (
    <div className="bg-[#062635] pb-[200px]">
      <div className="relative mx-auto max-w-[1260px] px-[20px] pb-[200px]">
        <h1
          className="text-[325px] m-auto font-[400] leading-none text-center"
          style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
        >
          <span className="text-[#ee4a51]">Team</span>
          <span className="text-[#88d2d9]">TV</span>
        </h1>

        <div className="absolute left-[480px] right-[20px] top-[304px]">
          <img
            src="https://www.telecomarmenia.am/file_manager/teamtv/tv_image_banner.png"
            alt="Team TV Banner"
            className="border-none max-w-full align-middle"
          />
        </div>
      </div>

      <ul className="max-w-[430px] ml-[100px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#ffffff] mb-[30px] rounded-2xl">
            <div className="w-[30%] mr-[20px]">
              <img
                src={feature.img}
                alt={`Item ${index + 1}`}
                className="w-[100%] align-middle"
              />
            </div>
            <div style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}>
              <h3 className="text-[1.875rem] font-[100] mb-[10px]">{feature.title}</h3>
              <p className="leading-[22px]">{feature.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
