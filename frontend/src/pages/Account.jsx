import { CaretRight, SignOut } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchUserData, logout } from "../api/auth";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData();
      setUser(userData);
    };

    getUserData();
  }, []);

  return (
    <Layout>
      <div className="bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter overflow-y-scroll no-scrollbar">
        {user ? (
          <>
            <section className="flex flex-col items-center pt-12">
              <div className="bg-primary rounded-full w-32 h-32 flex flex-col items-center justify-center">
                <h2 className="text-black text-5xl font-semibold">
                  {user.username.charAt(0).toUpperCase()}
                </h2>
              </div>
              <h2 className="font-bold text-xl pt-5">{user.username}</h2>
            </section>

            <section className="pt-12">
              <h2 className="text-gray-500 font-bold pb-5">General</h2>
              <div className="bg-grayBackground p-3 rounded-xl flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3>Account settings</h3>
                  <p className="text-sm text-gray-400">
                    Update and modify your account
                  </p>
                </div>
                <CaretRight size={24} weight="bold" color="#9ca3af" />
              </div>
            </section>

            <section className="flex justify-center pt-40">
              <button
                type="button"
                className="sm:text-xs lg:text-sm font-medium bg-red-800 rounded-xl py-4 px-8 sm:px-3 flex items-center justify-center gap-4"
                onClick={handleSignOut}
              >
                Sign Out
                <SignOut size={20} weight="bold" />
              </button>
            </section>
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </Layout>
  );
};

export default Account;
