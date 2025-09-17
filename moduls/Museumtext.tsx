export default function Muzeytext() {
    return (
        <div className="flex flex-col items-center max-w-[1230px] mx-auto mt-[90px] font-[400] px-4 leading-[26px] text-[#2c3843] font-team">
            <h1 className="mb-[50px] text-[56px] font-[200] font-team">Կապի թանգարան</h1>

            <p className="text-[16px] mb-[60px] pb-[20px] text-justify">
                <span className="block mb-[25px]">
                    Team Telecom Armenia-ն հանդիսանում է Հայաստանում առաջին տելեկոմ ցանցի ժառանգորդը։ Ունենալով ոլորտում ծառայությունների մատուցման ավելի քան 100 տարվա պատմություն և ստանձնելով կապի զարգացման պատմության պահպանումն ու նոր սերունդներին փոխանցելու պատասխանատվությունը՝ ընկերությունը հետաքրքրվող բոլոր անձանց առաջարկում է այցելել Հայաստանում միակ Կապի թանգարան։
                </span>

                <span className="block mb-[25px]">
                    Թանգարանը հիմնադրվել է 2012 թվականին։ Այստեղ ներկայացված են Հայաստանում կապի զարգացման պատմությանը վերաբերող նյութեր։ Թանգարանի այցելուները կարող են ծանոթանալ Հայաստանում հեռահաղորդակցության էվոլյուցիային, տեսնել կապի սարքեր՝ 19-րդ դարից սկսած մինչև ֆիքսված, բջջային և ինտերնետ կապի թվային ժամանակակից միջոցներ։
                </span>

                <img
                    src="https://www.telecomarmenia.am/file_manager/museum/Museum.JPG"
                    alt="Կապի թանգարան"
                    className="w-[40%] h-[350px] mb-[25px]  shadow-md"
                />
                <span className="block mb-[]25px">
                    Կապի թանգարան կարելի է այցելել ուրբաթ օրերին՝ կատարելով նախնական գրանցում։ Գրանցման համար անհրաժեշտ է զանգահարել <strong>010 410 410</strong> հեռախոսահամարին կամ գրել <strong>museum@telecomarmenia.am</strong> էլ․ հասցեին։ Թանգարանը գտնվում է <strong>Երևանի Ազատության պողոտա 24/1</strong> հասցեում։
                </span>

                <span className="block">
                    Եթե ցանկանում եք ծանոթանալ թանգարանի ցուցանմուշներին, բայց չեք կարող ֆիզիկապես այցելել, առաջարկում ենք կատարել վիրտուալ շրջայց։
                </span>
            </p>
            <div className="max-w-[1230px] m-auto mb-[150px] mt-[50px]">
                <iframe src="https://my.matterport.com/show/?m=kmuxkdByHwz"  className="w-[900px] h-[500px] rounded-[25px]"></iframe>
            </div>
        </div>
    );
}
