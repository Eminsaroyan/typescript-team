export default function Teamtvhing() {
    return (
        <div className="flex  md:flex-row items-center md:items-start py-[60px] bg-[#01425e]">

            <div className="w-full md:w-[50%] flex justify-center md:justify-start mb-8 md:mb-0">
                <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/ZqXUbLS1dRw"
                    title="TeamTV Landing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl ml-[100px]"
                ></iframe>
            </div>

            <div className="w-full md:w-[45%] flex justify-center md:justify-end">
                <div className="max-w-[500px] px-[20px] md:pl-[35px] md:pr-[30px] transition-[right] duration-[1000ms] ease-in-out delay-[300ms]">
                    <div className="text-[#fff]">
                        <h2
                            className="text-[3rem] md:text-[2rem] font-light mb-[25px] leading-[60px]"
                            style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                        >
                            Նոր TeamTV ուղեցույց
                        </h2>
                        <ul className="list-none  leading-[35px]">
                            <li className="font-[200] text-[1.1rem]">- Թարմացված դիզայն</li>
                            <li className="font-[200] text-[1.1rem] w-full md:w-[80%]">- Ալիքների ցանկ ըստ ժանրերի և միաժամանկ 2 ալիք դիտելու հնարավորություն</li>
                            <li className="font-[200] text-[1.1rem]">- Նախընտրած ֆիլմերի ցանկ ստեղծելու հնարավորություն</li>
                            <li className="font-[200] text-[1.1rem]">- Ծրագրեր փնտրելու հնարավորություն</li>
                            <li className="font-[200] text-[1.1rem]">- Սարքերի կառավարում</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}