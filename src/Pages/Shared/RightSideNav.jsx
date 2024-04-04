import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* login section  */}
      <div className=" space-y-4 mb-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <button className="btn btn-outline btn-primary w-full">
          <FaFacebook className="text-2xl"></FaFacebook>Login with Facebook
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-2xl"></FaGithub>Login with Github
        </button>
      </div>
      {/* social media section  */}
      <h1 className="text-3xl font-bold mb-4">Find Us On</h1>
      <a className="p-5 border w-full rounded-t-md flex items-center gap-5">
        <div className=" bg-blue-50 rounded-full p-3">
          <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
        </div>
        Facebook
      </a>
      <a className="p-5 border-x flex items-center gap-5">
        <div className=" bg-blue-50 rounded-full p-3">
          <FaTwitter className="text-2xl text-blue-400"></FaTwitter>
        </div>
        Twitter
      </a>
      <a className="p-5 border w-full rounded-b-md flex items-center gap-5">
        <div className=" bg-red-50 rounded-full p-3">
          <FaInstagram className="text-2xl text-red-400"></FaInstagram>
        </div>
        Instagram
      </a>

      {/* Q-zone section  */}
      <div className="bg-base-200 mt-5 space-y-4">
        <h1 className="text-3xl font-bold mb-4 p-4">Q-Zone</h1>
        <img src={qzone1} alt="swimming" />
        <img src={qzone2} alt="class" />
        <img src={qzone3} alt="play ground" />
      </div>
    </div>
  );
};

export default RightSideNav;
