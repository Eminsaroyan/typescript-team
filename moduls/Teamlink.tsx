import { Link } from "react-router-dom";

export default function Teamlink() {
  return (
    <div className="max-w-[1230px] m-auto mb-[50px]">
      <Link
        to="/"
        className="text-[#000000] text-[14px] mr-[12px] hover:no-underline"
      >
        Գլխավոր
      </Link>
      <span className="text-[14px] mr-[12px]">&gt;</span>
      <Link
        to="/teamhavelvacner"
        className="text-[#000000] text-[14px] mr-[12px] hover:no-underline"
      >
        Team հավելվածներ
      </Link>
    </div>
  );
}
