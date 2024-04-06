import Navbar from "../Shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const Register = () => {
  const { registerUser, setDetails } = useAuth();
  const navigate = useNavigate();
  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await registerUser(email, password);
      await setDetails(name, photoUrl);
      navigate("/");
    } catch (error) {
      console.log({ ...error });
    }
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
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="url"
              type="text"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>

          <p className="font-semibold mt-3">
            Have An Account ?{" "}
            <Link to="/login" className="text-red-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
