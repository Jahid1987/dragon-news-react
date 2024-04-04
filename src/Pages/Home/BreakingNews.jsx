import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex gap-3 items-center justify-center my-4">
      <button className="btn btn-error text-white">Breaking News</button>
      <Marquee pauseOnHover="true">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
