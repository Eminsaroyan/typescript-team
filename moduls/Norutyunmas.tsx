interface NorProps {
  image: string;
  mouth: string;
  name: string;
}

export default function Nor({ image, mouth, name }: NorProps) {
  return (
    <div className="w-[450px] h-[360px] mb-[25px] border border-[#9E9E9E] rounded-[12px] ">
      <img
        src={image}
        alt={name}
        className="w-[100%] mb-[5px] h-[250px] rounded-[12px]"
      />
      <p className="mt-[6px] mb-[10px] text-[#9E9E9E] text-[12px]">{mouth}</p>
      <p className="text-[18px] leading-[24px] mb-[10px]">{name}</p>
    </div>
  );
}
