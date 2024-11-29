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

const Popular = () => {
  const [influencers, setInfluencers] = useState([]);

  const fetchInfluencers = async () => {
    const response = await getInfluencers();
    setInfluencers(response);
  };

  useEffect(() => {
    fetchInfluencers();
  }, []);

  return (
    <div className=" bg-background pb-14">
      {influencers.length > 0 ? (
        <>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
              className="w-full h-20 xl:h-24"
            >
              <path
                fill="#f2f4f0"
                fillOpacity="1"
                d="M0,64L40,90.7C80,117,160,171,240,170.7C320,171,400,117,480,96C560,75,640,85,720,96C800,107,880,117,960,101.3C1040,85,1120,43,1200,37.3C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center gap-8 bg-secondaryBackground px-5 py-6  overflow-x-scroll  no-scrollbar  snap-x snap-mandatory">
            {influencers.map((influencer) => (
              <div
                key={influencer._id}
                className="bg-white p-5 text-black rounded-2xl  flex-shrink-0 shadow-md flex flex-col  "
              >
                <img
                  src={influencer.imageUrl}
                  alt="Influencer image"
                  className="rounded-xl w-56 h-56 object-cover object-center"
                />

                <div className="flex justify-between pt-2 border-b-2 border-gray-200 pb-4 ">
                  <div className="flex flex-col justify-between items-start  ">
                    <h2 className="flex  items-center gap-1 font-semibold">
                      {influencer.name}{" "}
                      <span>
                        <SealCheck weight="fill" />
                      </span>
                    </h2>
                    <p className=" text-gray-500 text-xs font-medium">
                      {influencer.location}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-center ">
                    <h2 className="font-semibold">{influencer.followers}k</h2>
                    <p className=" text-gray-500 text-xs font-medium">
                      Followers
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4   ">
                  <div className="flex flex-row items-center gap-2  ">
                    <button
                      type="button"
                      className="border-2 border-gray-200 p-1 rounded-lg"
                    >
                      <InstagramLogo weight="fill" size={20} />
                    </button>
                    <button
                      type="button"
                      className="border-2 border-gray-200 p-1 rounded-lg"
                    >
                      <YoutubeLogo weight="fill" size={20} />
                    </button>
                    <button
                      type="button"
                      className="border-2 border-gray-200 p-1 rounded-lg"
                    >
                      <TiktokLogo weight="fill" size={20} />
                    </button>
                  </div>
                  <div className="bg-buttonBlend py-2 px-3 rounded-full">
                    <p className=" text-buttonSecondary text-xs font-semibold">
                      {influencer.category}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 pb-6 ">
                  <p className="text-gray-500 text-sm font-medium">
                    Advertising Price
                  </p>
                  <h2 className="font-bold text-xl  ">${influencer.price}</h2>
                </div>
                <button
                  type="button"
                  className=" bg-buttonPrimary rounded-xl py-4 "
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
          <div className="rotate-180 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
              className="w-full h-20 xl:h-24"
            >
              <path
                fill="#f2f4f0"
                fillOpacity="1"
                d="M0,64L40,90.7C80,117,160,171,240,170.7C320,171,400,117,480,96C560,75,640,85,720,96C800,107,880,117,960,101.3C1040,85,1120,43,1200,37.3C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Popular;
