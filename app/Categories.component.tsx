import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";

export default function Categories () {
  return (
    <div className={`w-full text-white pt-4 px-8 md:px-0`}>

      <div className={`flex flex-row justify-between items-center mb-8`}>
        <h1 className={`font-bold text-md20 md:text-md18`}>
          Categories
        </h1>

        <h2 className={`font-bold text-sm12 md:text-[10px] text-lightgray`}>
          Uncheck all
        </h2>
      </div>

      <div className={`w-full bg-darkgray rounded-xl`}>
        <ul className={`p-4 font-bold text-sm15`}>
          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Action
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Adventure
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Animated
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between itmes-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Comedy
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Crime
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Fantasy
            <BsCheckSquareFill className={`text-primary`} />
          </li>
        </ul>

        <p className={`font-bold text-sm13 text-lightgray text-center pb-4`}>
          See more
        </p>
      </div>
    </div>
  );
}

