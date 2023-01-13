'use client';

export default function SectionDivider () {
    return (
        <div className={`w-full flex flex-row justify-between my-4`}>
            <h1 className={`text-white font-bold text-md20 md:text-md18`}>
                Trending
            </h1>

            <h2 className={`font-bold text-sm14 md:text-[10px] text-lightgray`}>
                See all
            </h2>
        </div>
    )
}