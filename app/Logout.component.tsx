import { TbLogout } from 'react-icons/tb';

export default function Logout () {
  return (
    <div className={`text-lightgray flex flex-row items-center justify-center py-4 mt-2`}>
      <TbLogout size={28} />
      <p className={`font-bold text-md18 lg:text-md20 ml-2 lg:ml-4`}>Log out</p>
    </div>
  );
}

