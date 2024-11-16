import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-500">
      <nav className="flex items-center justify-between py-4">
        <div className="rounded-full bg-yellow-500 py-2 px-1">Logo</div>
        <div className="flex justify-end pr-3 gap-10">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/account">Account</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
