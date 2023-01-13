import Categories from "./Categories.component";
import Services from "./Services.component";
import Featured from "./Featured.component";
import SectionDivider from "../components/SectionDivider.component";
import Section from "../components/Section.component";

export default function Page() {
  return (
    <div className={`w-full font-sans flex flex-col-reverse md:flex-row`}>
      <div className="md:w-[70%] lg:w-3/4 pt-4 pr-4 pb-6">
        <Featured />

        <div className={`w-full`}>
          <Section name="Now Playing" path="now_playing" />
          <Section name="Top Rated" path="top_rated" />
          <Section name="Popular" path="popular" />
          <Section name="Upcoming" path="upcoming" />
        </div>
      </div>

      <aside className="md:w-[30%] lg:w-1/4">
        <Categories />
        <Services />
      </aside>
    </div>
  );
}
