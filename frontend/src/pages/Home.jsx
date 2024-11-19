import { MagnifyingGlass } from "@phosphor-icons/react";
import heroImage from "../assets/hero_image.png";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <main className="bg-background h-screen text-white pt-10  font-inter ">
      <section className=" px-4 lg:px-20">
        <h1 className="flex flex-col gap-4 text-6xl font-bold ">
          <span className="flex items-center">
            Find
            <span className="border-2 border-secondary px-10 py-3 rounded-full ml-5">
              <MagnifyingGlass color="#E6FF72" size={32} />
            </span>
          </span>
          <span>Influencers</span>
          <span className="flex items-center">
            <img src={heroImage} className="w-56" />
            <span className="ml-5">to</span>
          </span>
          <span>collaborate</span>
          <span>with</span>
        </h1>
      </section>
      <section>
        <Popular />
      </section>
    </main>
  );
};

export default Home;
