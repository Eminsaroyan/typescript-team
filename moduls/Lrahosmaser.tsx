interface MasProps {
  image: string;
  mouth: string;
  name: string;
}

export default function Mas({ image, mouth, name }: MasProps) {
  return (
    <div className=" relative min-h-[1px] float-left w-[396.667px] mr-[35px] items-start border border-[#9E9E9E] rounded-[12px]">
      <div className="relative w-[400px]  box-border opacity-100 rounded-[5px]">
        <div className="rounded-[12px] w-[398px] h-[392px]">
          <div className="p-0 h-[248px] rounded-t-[12px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="float-left w-full h-full object-cover"
            />
          </div>
          <div className="px-[17px] py-[16px]">
            <p className="block mb-[10px] text-[#666e75] text-[0.75rem] text-[#9E9E9E] ">{mouth}</p>
            <p className="text-[16px] leading-[24px] overflow-hidden">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
