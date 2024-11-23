import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import All from "./pages/All";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/all" element={<All />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
