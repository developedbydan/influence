import { CaretRight, SignOut } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchUserData, logout } from "../api/auth";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Account = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    };

    getUserData();
  }, []);

  return (
    <Layout>
      <div className="bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter overflow-y-scroll no-scrollbar xl:flex xl:flex-col xl:items-center">
        {loading ? (
          <div className="flex justify-center items-center h-screen animate-pulse">
            <ClipLoader color="#6A71F2" size={40} />
          </div>
        ) : (
          <>
            <section className="flex flex-col items-center pt-12">
              <div className="bg-primary rounded-full w-32 h-32 flex flex-col items-center justify-center">
                <h2 className="text-black text-5xl font-semibold">
                  {user.username.charAt(0).toUpperCase()}
                </h2>
              </div>
              <h2 className="font-bold text-xl pt-5">{user.username}</h2>
            </section>

            <section className="pt-12 xl:w-7/12">
              <h2 className="text-gray-500 font-bold pb-5">General</h2>
              <div className="flex flex-col gap-5">
                <button className="bg-grayBackground w-full p-3 rounded-xl  hover:bg-search  transition duration-200">
                  <Link
                    className="flex items-center justify-between"
                    to={"/account-settings"}
                  >
                    <div className="flex flex-col gap-1 items-start">
                      <h3>Account settings</h3>
                      <p className="text-sm text-gray-400">
                        Update and modify your account
                      </p>
                    </div>
                    <CaretRight size={24} weight="bold" color="#9ca3af" />
                  </Link>
                </button>
                <button className="bg-grayBackground w-full p-3 rounded-xl  hover:bg-search  transition duration-200">
                  <Link
                    className="flex items-center justify-between"
                    to={"/bookings"}
                  >
                    <div className="flex flex-col gap-1 items-start">
                      <h3>Bookings</h3>
                      <p className="text-sm text-gray-400">
                        See all your bookings
                      </p>
                    </div>
                    <CaretRight size={24} weight="bold" color="#9ca3af" />
                  </Link>
                </button>
              </div>
            </section>

            <section className="flex justify-center pt-40 xl:pt-16 xl:w-7/12 ">
              <button
                type="button"
                className="sm:text-xs lg:text-sm xl:w-5/12  font-medium bg-red-800 rounded-xl py-4 px-8 sm:px-3 flex items-center justify-center gap-4"
                onClick={handleSignOut}
              >
                Sign Out
                <SignOut size={20} weight="bold" />
              </button>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Account;
