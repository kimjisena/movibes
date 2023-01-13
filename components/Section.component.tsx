'use client';

import SectionDivider from "./SectionDivider.component";
import PosterCard from "./PosterCard.component";

type SectionPropTypes = {
    name: string,
}

export default function Section ({ name }: SectionPropTypes) {
    return (
        <section>
            <SectionDivider name={name} />
            <div className={`flex flex-row justify-between`}>
                <PosterCard />
                <PosterCard />
                <PosterCard />
                <PosterCard />
            </div>
        </section>
    );
}