import { HiOutlineTicket } from 'react-icons/hi';

export default function Ticket () {
  return (
    <div className={`relative bg-black mx-4 mt-7 rounded-[18px]`}>

      <div className='absolute w-full -top-5 left-0 flex flex-row justify-center'>
        <div className={`flex flex-row justify-center items-center bg-primary bg-opacity-40 rounded-full text-primary w-12 h-12`}>
          <HiOutlineTicket size={38} />
        </div>
      </div>

      <div className='px-6 pt-8 pb-4'>
        <h3 className='text-white font-bold text-sm15'>
          Play movie quizes and earn free tickets
        </h3>
        <h4 className='text-lightgray text-sm12'>50k people are playing now</h4>

        <div className='w-full flex flex-row justify-center mt-4'>
          <button className={`text-primary text-sm12 bg-primary bg-opacity-40 rounded-2xl p-2 font-bold`}>
            Start playing
          </button>
        </div>
      </div>
    </div>
  );
}
