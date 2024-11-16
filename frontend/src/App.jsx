import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Serach from "./pages/Serach";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Serach />} />
      </Routes>
    </>
  );
};

export default App;
