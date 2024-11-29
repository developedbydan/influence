import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { bookInfluencer, getOneInfluencer } from "../api/influencers";

const Booking = () => {
  const { influencerId } = useParams();
  const [influencer, setInfluncer] = useState([]);
  const [details, setDetails] = useState("");

  const navigate = useNavigate();
  const bookingFee = 10;

  useEffect(() => {
    const fetchInfluencerDetails = async (influencerId) => {
      try {
        const response = await getOneInfluencer(influencerId);
        setInfluncer(response);
      } catch (error) {
        console.error("Error fetching influencer details:", error);
      }
    };

    fetchInfluencerDetails(influencerId);
  }, [influencerId]);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookInfluencer(influencerId, details);

      const { success, message } = response;
      if (success) {
        setDetails("");
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter  overflow-y-scroll no-scrollbar ">
        <div className="bg-gray-800 flex flex-col items-center pt-10 pb-10 px-4 rounded-2xl">
          <h2 className="font-bold text-xl">Booking Details</h2>
          <div className="pt-10 pb-16 flex flex-col items-center \ w-full">
            <img
              src={influencer.imageUrl}
              alt="Influencer image"
              className="w-28 h-28 rounded-full object-cover object-center"
            />

            <h3 className="pt-4 pb-2 font-bold text-lg">{influencer.name}</h3>
            <div className="bg-buttonSecondary py-1 px-3 rounded-full ">
              <p className=" text-buttonBlend text-xs font-semibold">
                {influencer.category}
              </p>
            </div>
          </div>
          <div className=" w-full border-b-2">
            <div className="w-full flex justify-between text-sm text-gray-400">
              <p>Ad price:</p>
              <p>${influencer.price}</p>
            </div>
            <div className="w-full flex justify-between text-sm text-gray-400">
              <p>Booking fee:</p>
              <p>${bookingFee}</p>
            </div>
            <div className="w-full flex justify-between pt-3 font-semibold">
              <p>Total:</p>
              <p>${influencer.price + bookingFee}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full pt-10 flex flex-col items-center gap-10"
          >
            <textarea
              name="message"
              id="message"
              placeholder="Details..."
              className="w-full min-h-36 max-h-36 bg-gray-700 rounded-xl outline-none p-3 text-sm"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full flex gap-2 items-center justify-center text-black bg-white hover:bg-gray-200  focus:outline-none font-semibold rounded-lg text-sm px-5 py-3 text-cente "
            >
              Book a meeting
              <PaperPlaneRight size={16} weight="fill" />
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Booking;
