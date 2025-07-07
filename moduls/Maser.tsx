interface MaserProps {
  name: string;
  image: string;
}

export default function Maser({ name, image }: MaserProps) {
  return (
    <div className="group flex justify-between items-start w-[600px] md:max-w-2xl pl-[30px] bg-[#01415f] rounded-[12px] mb-[10px] cursor-pointer">
      <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif group-hover:text-[#FF0000] transition-colors duration-300">
        {name}
      </p>
      <img src={image} alt={name} className="rounded-[12px] object-cover" />
    </div>
  );
}
