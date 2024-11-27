import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import All from "./pages/All";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/all" element={<All />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
