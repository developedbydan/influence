import { MagnifyingGlass } from "@phosphor-icons/react";

const Serach = () => {
  return (
    <main className="bg-background h-screen text-white pt-10 px-4 lg:px-20 font-inter  overflow-y-scroll no-scrollbar ">
      <div className="bg-search rounded-xl p-3 flex justify-between items-center">
        <input
          type="search"
          name="search"
          className="bg-transparent outline-none"
        />
        <button type="button" className="bg-primary p-1 rounded-lg">
          <MagnifyingGlass size={20} color="#000000" weight="bold" />
        </button>
      </div>
    </main>
  );
};

export default Serach;
