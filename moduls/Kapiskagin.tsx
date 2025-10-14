import Kapisakaginmas from "./Kapisakaginmas";

export default function Kapiskagin() {
    return (
        <div className="pt-[60px]">
            <div className="mx-auto max-w-[1260px] px-[20px]">
                <h1 className="mb-[53px] text-start text-[36px]"
                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                >Բջջային կապի սակագներ</h1>
                <div className="h-[550px] border-b-[1px]">
                    <Kapisakaginmas />
                </div>
            </div>
        </div>
    );
}
