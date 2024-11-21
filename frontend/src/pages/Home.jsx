import {
  ArrowUpRight,
  MagnifyingGlass,
  VideoCamera,
} from "@phosphor-icons/react";
import heroImage from "../assets/hero_image.png";
import ctaImage from "../assets/cta_bg.png";

import Popular from "../components/Popular";

const Home = () => {
  return (
    <main className="bg-background h-screen text-white pt-10 text-center lg:text-left font-inter  overflow-y-scroll no-scrollbar ">
      <section className=" px-4 lg:px-20 flex flex-col 2xl:flex-row 2xl:justify-between sm:items-center xl:items-start 2xl:items-center">
        <h1 className="flex flex-col  gap-5 text-6xl lg:text-7xl font-bold  ">
          <span className="flex flex-col md:flex-row items-center justify-center xl:justify-start gap-5">
            <span className="flex items-center gap-5 ">
              Find
              <span className="border-2 border-secondary px-10 py-3 rounded-full">
                <MagnifyingGlass color="#E6FF72" size={32} />
              </span>
            </span>
            <span>Influencers</span>
          </span>

          <span className="flex flex-col xl:flex-row items-center justify-center lg:justify-start gap-5">
            <span className="flex items-center gap-5 ">
              <img src={heroImage} className="w-56" />
              <span>To</span>
            </span>
            <span className="flex flex-col md:flex-row gap-5">
              <span>Collaborate</span>
              <span>With</span>
            </span>
          </span>
        </h1>

        {/* cta  */}
        <div className="py-14 relative sm:w-8/12 md:w-1/2 xl:w-full 2xl:w-3/12 ">
          <h2 className="absolute left-10 bottom-20 font-bold text-black text-4xl xl:text-6xl 2xl:text-4xl">
            See how <br /> it&apos;s done
          </h2>
          <div className="bg-black rounded-full p-4 absolute left-10 top-20 ">
            <VideoCamera weight="fill" size={20} />
          </div>
          <div className="absolute top-20 right-10">
            <ArrowUpRight size={56} color="black" weight="bold" />
          </div>
          <img
            src={ctaImage}
            className="object-cover w-full rounded-2xl xl:max-h-80 2xl:max-h-72"
          />
        </div>
      </section>
      <section>
        <Popular />
      </section>
    </main>
  );
};

export default Home;
