import { TiArrowSortedDown } from "react-icons/ti";

function NavBarBtn() {
  return (
    <button className="flex gap-2 items-center bg-azulBg p-4 px-6 rounded-md">
      <p className="text-xl font-bold text-white">Cliente</p>
      <TiArrowSortedDown className="text-white text-2xl" />
    </button>
  );
}

export default NavBarBtn;
