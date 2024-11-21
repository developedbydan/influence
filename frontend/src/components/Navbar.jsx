import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

const Links = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>Search</Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center px-4 lg:px-20 py-4 bg-background text-white">
        <button type="button" className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
        <Link className="text-2xl lg:text-3xl font-bold" to={"/"}>
          Influence.
        </Link>
        <div className=" flex justify-end items-center gap-10 ">
          <div className="hidden md:flex gap-10 ">
            <Links />
          </div>
          <button className="bg-yellow-500 rounded-full px-3 py-1">
            <Link to={"/account"}>A</Link>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden  bg-primary  flex flex-col items-left gap-5 py-5 px-5 font-semibold text-lg">
          <Links />
        </div>
      )}
    </header>
  );
};

export default Navbar;
