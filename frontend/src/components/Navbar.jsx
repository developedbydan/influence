import { useState } from "react";
import { Link } from "react-router-dom";
import { List, User, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed w-full z-20 flex justify-between items-center px-4 lg:px-20 py-4 bg-background text-white">
        <button type="button" className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
        <Link
          className="text-2xl lg:text-3xl font-bold w-full md:w-1/2  text-center md:text-left"
          to={"/"}
        >
          Influence.
        </Link>
        <div className=" flex justify-end items-center gap-10 ">
          <div className="hidden md:flex gap-10 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/all"}>Show All</Link>
          </div>
          <button className="bg-primary rounded-full p-1.5 ">
            <Link to={"/account"}>
              <User weight="bold" color="black" />
            </Link>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-primary fixed mt-16 w-full z-10 flex flex-col items-left gap-5 py-5 px-5 font-semibold text-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link to={"/"} onClick={toggleNavbar}>
              Home
            </Link>
            <Link to={"/all"} onClick={toggleNavbar}>
              Show All
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
