import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-5 space-y-4">
      <img className="mx-auto" src={logo} alt="Logo" />
      <p className="text-lg text-gray-600">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl">
        Sunday,{" "}
        <span className="text-gray-600">
          {moment().format("dddd, MMMM D, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
