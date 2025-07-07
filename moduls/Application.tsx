
export default function Application() {
  return (
    <div className='mt-[60px] flex items-center justify-around'>
      <div className='flex flex-col items-start'>
        <h1 className='text-[60px] mb-[20px]'>Հավելված My Team</h1>
        <p className='text-[20px] mb-[20px] '>Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
        <p className='text-[20px] mb-[20px] w-[580px]'>Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
        <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className='mb-[20px]' />
        <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" />
      </div>
      <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" alt="Application Image" className='w-[30%]' />
    </div>
  );
}
