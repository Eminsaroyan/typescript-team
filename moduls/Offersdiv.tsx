interface OfferstextProps {
    mouth: string;
    vernagir: string;
    text: string;
}

export default function Offerstext({ mouth, vernagir, text }: OfferstextProps) {
    return (
        <div className="flex flex-col w-[400px] bg-[#f5f6f7] mt-[30px] mb-[40px] rounded-[12px] shadow-sm hover:shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <p className="mb-[10px]">{mouth}</p>
            <p className="text-[20px] mb-[6px] text-[#000000] font-[900]">{vernagir}</p>
            <span className="text-[#2c3843] leading-[1.4]">{text}</span>
        </div>
    );
}
