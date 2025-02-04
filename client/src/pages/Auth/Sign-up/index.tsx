import { useState } from "react";
import Button from "../../../components/shared/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const currentUrl = window.location.href.split("/").pop();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        action=""
        className="max-w-96 border rounded-md p-6 gap-5 flex flex-col justify-center items-center"
      >
        <h2 className="font-bold text-3xl">Sign up</h2>
        <div className="flex flex-col items-start">
          <label className="" htmlFor="signin_name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Jane Doe"
            id="signin_name"
            className="border h-10 pl-1.5 outline-none rounded-sm w-72"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="" htmlFor="signin_email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="signin_email"
            className="border h-10 pl-1.5 outline-none rounded-sm w-72"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="" htmlFor="signin_password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="e3@sF12FD2#"
            id="signin_password"
            className="border h-10 pl-1.5 outline-none rounded-sm w-72"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <Button label="Submit" />
        <div>
          <Link
            className={`${
              currentUrl == "sign-in"
                ? "bg-white text-black border"
                : "bg-black text-white border"
            } clip-left p-2 -mr-2 pr-4 min-w-20 min-h-10 borde`}
            to="/auth/sign-in"
          >
            Sign in
          </Link>
          <Link
            className={`${
              currentUrl === "sign-up"
                ? "bg-white text-black border border-black"
                : "bg-black text-white border border-black"
            }clip-right -ml-2 p-2 pl-4 min-w-20 min-h-10`}
            to="/auth/sign-up"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
