import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("../news.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews([...data]);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-5xl font-bold">Coming soon ...{news.length}</h3>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
