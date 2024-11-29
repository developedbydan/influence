import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getBookings } from "../api/influencers";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchAllBookings = async () => {
      const response = await getBookings();
      setBookings(response);
    };

    fetchAllBookings();
  }, []);

  return (
    <Layout>
      <div className="bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter  overflow-y-scroll no-scrollbar ">
        <h2 className="text-center text-xl font-semibold pb-10">My Bookings</h2>
        {bookings.length > 0 ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{booking.influencerId.name}</td>
                    <td className="px-6 py-4">
                      {booking.influencerId.category}
                    </td>
                    <td className="px-6 py-4">{booking.influencerId.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>Empty</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllBookings;
