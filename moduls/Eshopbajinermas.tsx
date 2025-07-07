import { useState } from 'react';

// ✅ Տիպավորում props-երի համար
interface EshopbajinProps {
  name: string;
  text1: string;
  text2: string;
  image: string;
  bg: string;
  color: string;
}

export default function Eshopbajin({ name, text1, text2, image, bg, color }: EshopbajinProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex justify-between items-start w-[600px] md:max-w-2xl pl-[30px] rounded-[12px] mb-[10px] cursor-pointer"
      style={{ backgroundColor: bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col justify-evenly h-[300px]">
        <p className="mt-[12px] text-[30px] font-[900] font-serif" style={{ color }}>
          {name}
        </p>
        <p className="text-[19px]" style={{ color }}>
          {text1}
        </p>
        <p
          className="transition-colors duration-300"
          style={{ color: hovered ? '#FF0000' : color }}
        >
          {text2}
        </p>
      </div>
      <img src={image} alt={name} className="rounded-[12px] object-cover" />
    </div>
  );
}
