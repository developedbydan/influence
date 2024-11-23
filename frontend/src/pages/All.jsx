import Influencers from "../components/Influencers";
import Layout from "../components/Layout";

const Serach = () => {
  return (
    <Layout>
      <div className="bg-background h-screen text-white pt-6 pb-8 px-4 lg:px-20 font-inter  overflow-y-scroll no-scrollbar ">
        <section>
          <Influencers />
        </section>
      </div>
    </Layout>
  );
};

export default Serach;
