import { Link, NavLink } from "react-router-dom";
import defaultUserImage from "../../assets/user.png";

import useAuth from "../../customHooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const nvaLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  async function handleSignOut() {
    await signOutUser();
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nvaLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nvaLinks}</ul>
      </div>
      <div className="navbar-end">
        <p className="mr-2 text-gray-500">
          {user?.displayName && user.displayName}
        </p>

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar  mr-2"
        >
          <div className="w-10 rounded-full">
            <img
              src={user?.photoURL ? user.photoURL : defaultUserImage}
              alt="Tailwind CSS Navbar component"
            />
          </div>
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-neutral btn-sm">
            Log Out
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-neutral btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
