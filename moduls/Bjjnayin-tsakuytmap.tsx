export function Bjjmap() {
    return (
        <div>
            <h1 className="max-w-[1230px] m-auto mt-[30px]">Բջջային ցանցի ծածկույթ</h1>
             <div className="w-full h-[500px] mt-[40px]  overflow-hidden">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234567890abcdef1234567890abcdef&source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Team Telecom Location"
                ></iframe>
            </div>
        </div>
    )
}