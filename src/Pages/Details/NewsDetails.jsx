import DetailsCard from "../../Components/DetailsCard";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";

import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const res = await fetch("../news.json");
  const docs = await res.json();
  const doc = docs.find((doc) => doc._id === params.id);

  return { doc };
}

const NewsDetails = () => {
  const { doc: news } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xl font-semibold">Dragon News</h3>
          <DetailsCard news={news}></DetailsCard>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
