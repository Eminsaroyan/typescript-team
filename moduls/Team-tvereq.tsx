export default function Teamtvereq() {
    return (
        <div className="flex  md:flex-row items-center md:items-start py-[60px] bg-[#01425e]">

            <div className="w-full md:w-[55%] flex justify-center md:justify-start mb-8 md:mb-0">
                <img
                    src="https://www.telecomarmenia.am/file_manager/teamtv/Team%20tv%20landing.jpg"
                    alt="TeamTV Landing"
                    className="w-[90%] md:ml-[50px] max-w-full border-0 align-middle rounded-xl shadow-lg"
                />
            </div>

            <div className="w-full md:w-[45%] flex justify-center md:justify-end">
                <div className="max-w-[500px] px-[20px] md:pl-[35px] md:pr-[30px] transition-[right] duration-[1000ms] ease-in-out delay-[300ms]">
                    <div className="text-[#fff]">
                        <h2
                            className="text-[3rem] md:text-[2rem] font-light mb-[25px] leading-[60px]"
                            style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                        >
                            TeamTV-ն հասանելի է բոլորին
                        </h2>
                        <ul className="list-none  leading-[35px]">
                            <li className="font-[200] text-[1.1rem]">- Ներբեռնիր և գրանցվիր TeamTV հավելվածում</li>
                            <li className="font-[200] text-[1.1rem] w-full md:w-[80%]">- Բաժանորդագրվիր հետևյալ սակագնային փաթեթներից որևէ մեկին՝ teamTV Ստարտ, teamTV Հանրային, teamTV Մաքս</li>
                            <li className="font-[200] text-[1.1rem]">- Վայելիր բազմաթիվ ալիքներ TeamTV-ով</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
