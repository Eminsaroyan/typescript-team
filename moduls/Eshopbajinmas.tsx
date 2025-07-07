interface BujProps {
  vernagir?: string;
  bovandakutyun?: string;
  but?: string;
  image: string;
  color?: string;
}

export default function Buj({
  vernagir,
  bovandakutyun,
  but,
  image,
  color,
}: BujProps) {
  return (
    <div
      className="flex justify-evenly items-center p-4 rounded-md shadow-md max-w-md mx-auto"
      style={{ backgroundColor: color }}
    >
      <div className="w-[30%]">
        {vernagir && (
          <h1 className="text-[60px] mb-[30px] font-[700]">{vernagir}</h1>
        )}

        {bovandakutyun && (
          <p className="text-[20px] mb-[30px]">{bovandakutyun}</p>
        )}

        {but && (
          <button className="pt-[15px] pb-[15px] pl-[80px] pr-[80px] border-none rounded-[12px] bg-[#FF0000] text-[#ffffff]">
            {but}
          </button>
        )}
      </div>

      <div>
        <img src={image} alt={vernagir || "Image"} />
      </div>
    </div>
  );
}
