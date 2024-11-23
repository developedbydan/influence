import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className=" bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter overflow-y-scroll no-scrollbar ">
      <section className="h-full">
        <div className="flex flex-col items-center justify-center gap-10  px-6 py-8 mx-auto h-full lg:py-0">
          <Link
            className="text-2xl lg:text-3xl font-bold  text-center "
            to={"/"}
          >
            Influence.
          </Link>
          <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12  rounded-xl bg-gray-800">
            <div className="px-5 py-8 xl:px-10 ">
              <h1 className="text-xl pb-8 text-center font-bold md:text-2xl ">
                Sign up
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className=" text-gray-900 rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" text-gray-900 rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="pb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" text-gray-900 rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-white hover:bg-gray-200  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign up
                </button>
                <div className="pt-5 flex gap-2 justify-center items-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                  </p>
                  <Link className=" text-sm hover:underline" to={"/login"}>
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
