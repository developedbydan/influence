import { useEffect, useState } from "react";
import { getInfluencers } from "../api/influencers";
import {
  InstagramLogo,
  PaperPlaneRight,
  SealCheck,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Influencers = () => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await getInfluencers();
        setInfluencers(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching influencers:", error);
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, []);

  return (
    <div className=" bg-background">
      {loading ? (
        <div className="flex justify-center items-center h-screen animate-pulse">
          <ClipLoader color="#6A71F2" size={40} />
        </div>
      ) : (
        <>
          {influencers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-10 px-5 py-12 overflow-y-scroll  no-scrollbar  snap-y snap-mandatory">
              {influencers.map((influencer) => (
                <div
                  key={influencer._id}
                  className="bg-white p-5 text-black rounded-2xl  flex-shrink-0 flex flex-col items-center "
                >
                  <img
                    src={influencer.imageUrl}
                    alt="Influencer image"
                    className="rounded-xl w-full h-56 object-cover object-center"
                  />

                  <div className="flex sm:flex-col lg:flex-row items-center gap-2 justify-between w-full pt-2 border-b-2 border-gray-200 pb-4 ">
                    <div className="flex flex-col justify-between items-start sm:items-center lg:items-start  ">
                      <h2 className="flex  items-center gap-1 font-semibold text-xl sm:text-base">
                        {influencer.name}
                        <span>
                          <SealCheck weight="fill" />
                        </span>
                      </h2>
                      <p className=" text-gray-500  font-medium text-base sm:text-xs">
                        {influencer.location}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-center  ">
                      <h2 className="font-semibold text-xl sm:text-base">
                        {influencer.followers}k
                      </h2>
                      <p className=" text-gray-500 text-base sm:text-sm font-medium">
                        Followers
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4  w-full ">
                    <div className="sm:hidden lg:flex flex-row items-center gap-2  ">
                      <button
                        type="button"
                        className="border-2 border-gray-200 p-1 rounded-lg"
                      >
                        <InstagramLogo weight="fill" size={24} />
                      </button>
                      <button
                        type="button"
                        className="border-2 border-gray-200 p-1 rounded-lg"
                      >
                        <YoutubeLogo weight="fill" size={24} />
                      </button>
                      <button
                        type="button"
                        className="border-2 border-gray-200 p-1 rounded-lg"
                      >
                        <TiktokLogo weight="fill" size={24} />
                      </button>
                    </div>
                    <div className="sm:hidden lg:block bg-buttonBlend py-2 px-3 rounded-full">
                      <p className=" text-buttonSecondary sm:text-xs font-semibold">
                        {influencer.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 sm:pt-0 lg:pt-4 pb-6 w-full">
                    <p className="sm:hidden lg:block text-gray-500  font-medium">
                      Advertising Price
                    </p>
                    <h2 className="font-bold text-xl  ">${influencer.price}</h2>
                  </div>
                  <button
                    type="button"
                    className=" bg-buttonPrimary rounded-xl py-4 px-6"
                  >
                    <Link
                      className="text-sm font-semibold flex items-center justify-center gap-2"
                      to={`/booking/${influencer._id}`}
                    >
                      Book a meeting
                      <PaperPlaneRight size={16} weight="fill" />
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
};

export default Influencers;
