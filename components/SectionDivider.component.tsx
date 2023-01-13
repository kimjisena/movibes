'use client';
type SectionDividerPropTypes = {
    name: string,
}
export default function SectionDivider ({ name }: SectionDividerPropTypes) {
    return (
        <div className={`w-full flex flex-row justify-between my-4`}>
            <h1 className={`text-white font-bold text-md20 md:text-md18`}>
                {name}
            </h1>

            <h2 className={`font-bold text-sm13 text-lightgray`}>
                See all
            </h2>
        </div>
    )
}