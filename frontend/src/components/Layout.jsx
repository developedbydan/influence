import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-10">{children}</main>
    </>
  );
};

export default Layout;
