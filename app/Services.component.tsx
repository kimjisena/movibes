import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";

export default function Services () {
  return (
    <div className={`w-full text-white pt-4 px-8 md:px-0`}>

      <div className={`flex flex-row justify-between items-center mb-8`}>
        <h1 className={`font-bold text-md20 md:text-md18`}>
          Services
        </h1>

        <h2 className={`font-bold text-sm12 md:text-[10px] text-lightgray`}>
          Uncheck all
        </h2>
      </div>

      <div className={`w-full bg-darkgray rounded-xl`}>
        <ul className={`p-4 font-bold text-sm15`}>
          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Netflix
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Prime Video
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Disney +
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between itmes-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            HBO Max
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Hulu
            <BsCheckSquareFill className={`text-primary`} />
          </li>

          <li className={`flex flex-row justify-between items-center border-b-lightgray border-b-2 pb-1 mb-1`}>
            Starz
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

