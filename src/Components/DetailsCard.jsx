import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const DetailsCard = ({ news }) => {
  const { image_url, title, details } = news;
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(-1);
  }
  return (
    <div className="border p-5 rounded-sm space-y-4">
      <img src={image_url} alt={`Image of ${title}`} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{details}</p>
      <button onClick={handleNavigate} className="btn bg-red-600  text-white">
        All news in this category
      </button>
    </div>
  );
};
DetailsCard.propTypes = {
  news: PropTypes.object,
};
export default DetailsCard;
