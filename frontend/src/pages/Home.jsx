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
    <main className="bg-background h-screen text-white pt-10 text-center font-inter  overflow-y-scroll no-scrollbar ">
      <section className=" px-4 lg:px-20">
        <h1 className="flex flex-col gap-4 text-6xl font-bold ">
          <span className="flex items-center justify-center">
            Find
            <span className="border-2 border-secondary px-10 py-3 rounded-full ml-5">
              <MagnifyingGlass color="#E6FF72" size={32} />
            </span>
          </span>
          <span>Influencers</span>
          <span className="flex items-center justify-center">
            <img src={heroImage} className="w-56" />
            <span className="ml-5">To</span>
          </span>
          <span>Collaborate</span>
          <span>With</span>
        </h1>
        <div className="py-14  relative ">
          <h2 className="absolute left-10 bottom-20 font-bold text-black text-4xl">
            See how <br /> it&apos;s done
          </h2>
          <div className="bg-black rounded-full p-4 absolute left-10 top-20 ">
            <VideoCamera weight="fill" size={20} />
          </div>
          <div className="absolute top-20 right-10">
            <ArrowUpRight size={56} color="black" weight="bold" />
          </div>
          <img src={ctaImage} className="object-cover w-full rounded-2xl" />
        </div>
      </section>
      <section>
        <Popular />
      </section>
    </main>
  );
};

export default Home;
