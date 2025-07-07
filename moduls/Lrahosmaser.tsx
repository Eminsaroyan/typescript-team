interface MasProps {
  image: string;
  mouth: string;
  name: string;
}

export default function Mas({ image, mouth, name }: MasProps) {
  return (
    <div className="flex flex-col h-[360px] items-start border border-[#9E9E9E] rounded-[12px]">
      <img src={image} alt={name} className="w-[100%] mb-[5px] h-[250px] rounded-[12px]" />
      <p className="mt-[6px] mb-[10px] text-[#9E9E9E] text-[12px]">{mouth}</p>
      <p className="text-[18px] text-[20px] leading-[24px] mb-[10px]">
        {name}
      </p>
    </div>
  );
}
