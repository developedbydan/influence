import { useEffect, useState } from "react";
import { getInfluencers } from "../api/influencers";
import {
  InstagramLogo,
  PaperPlaneRight,
  SealCheck,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

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
    <div className="pt-16 ">
      {influencers.length > 0 ? (
        <div className="flex items-center gap-8 bg-secondaryBackground px-5 py-6 rounded-xl overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
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
                <div className="flex flex-col justify-between  ">
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
                className="text-sm font-semibold bg-buttonPrimary rounded-xl py-4 flex items-center justify-center gap-2"
              >
                Send message
                <PaperPlaneRight size={16} weight="fill" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Nema</h2>
        </div>
      )}
    </div>
  );
};

export default Popular;
