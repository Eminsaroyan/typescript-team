interface BiznesmasProps {
    name: string;
    text1: string;
    image: string;
}

export default function Biznesmas({ name, text1, image }: BiznesmasProps) {
    return (
        <div className="group flex justify-between items-start w-[600px] md:max-w-2xl pl-[30px] bg-[#01415f] rounded-[12px] mb-[10px] cursor-pointer">
            <div className="flex flex-col justify-evenly h-[300px]">
                <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif">{name}</p>
                <p className="text-[#ffffff]">{text1}</p>
                <p className="text-[#ffffff] group-hover:text-[#FF0000] transition-colors duration-300">Մանրամասն</p>
            </div>
            <img src={image} alt={name} className="rounded-[12px] object-cover" />
        </div>
    );
}
