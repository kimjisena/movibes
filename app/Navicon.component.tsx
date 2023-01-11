import { type IconType } from "react-icons";


type NaviconProps = {
  Icon: IconType,
  size: number,
  active: string,
  id: string,
  name: string,
}

export default function Navicon ({Icon, size, active, id, name}: NaviconProps) {
  return (
    <li id={id} className="">
      <div className={`flex flex-row items-center py-4 pl-6 lg:pl-8 ${active === id ? 'border-r-primary border-opacity-75 border-r-[6px] text-primary bg-primary bg-opacity-40': 'text-lightgray'}`}>
        <Icon className="justify-self-start" size={size} />
        <p className={`font-bold text-md18 lg:text-md20 ml-3 lg:ml-6`}>{name}</p>
      </div>
  </li>
  );
}
