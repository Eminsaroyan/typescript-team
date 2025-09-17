interface AshxatanqtextProps {
  mouth: string;
  vernagir: string;
  text: string;
}

export default function Ashxatanqtext({ mouth, vernagir, text }: AshxatanqtextProps) {
  return (
    <div className="flex flex-col w-[400px] bg-[#f5f6f7] mt-[30px] mb-[40px] rounded-[12px] shadow-sm hover:shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <p>{mouth}</p>
      <p className="text-[20px] text-[#000000] font-[900]">{vernagir}</p>
      <span className="text-[#2c3843] leading-[1.4]">{text}</span>
    </div>
  );
}
