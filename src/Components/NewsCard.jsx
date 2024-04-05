import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import LinesEllipsis from "react-lines-ellipsis";
import { Rating } from "@smastrom/react-rating";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news;
  return (
    <div className="border rounded-sm mb-4">
      {/* card head section  */}
      <div className="flex justify-between items-center bg-base-200 p-2">
        <div className="flex gap-2">
          <div className="w-14 rounded-full">
            <img
              className="rounded-full"
              src={author?.img}
              alt={`image of ${author.name}`}
            />
          </div>
          <div>
            <p className="font-bold text-lg">{author.name}</p>
            <p className="text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl font-semibold">
          <CiShare2 />
          <CiBookmark />
        </div>
      </div>
      {/* card body section  */}
      <div className="mt-2 p-2 space-y-3">
        <h1 className="text-xl font-bold">{title}</h1>
        <img src={image_url} alt={`Image of ${title}`} />
        <LinesEllipsis
          text={details}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <Link
          to={`/news-details/${_id}`}
          className=" btn-link text-orange-500 "
        >
          Read More
        </Link>

        <div className="divider"></div>
      </div>
      {/* card footer section  */}
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-40">
            <Rating value={rating.number} readOnly={true}></Rating>
          </div>
          <p className="text-gray-500">{rating.number}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaEye />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
