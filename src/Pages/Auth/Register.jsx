import { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="mt-5">
      <Navbar></Navbar>
      <div className="mt-5 rounded-sm card shrink-0 w-full max-w-md p-5 mx-auto shadow-2xl bg-base-100">
        <h3 className="text-center text-3xl font-semibold">
          Register your account
        </h3>

        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>

          <p className="font-semibold">
            Dont’t Have An Account ?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
