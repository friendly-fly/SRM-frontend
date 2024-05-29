import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import heroLink from "../assets/hero.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [isPasswordVisible, setPasswordVisible] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <div className=" flex">
        {/* left section*/}
        <div className="basis-3/5 flex justify-center items-center">
          <LoginForm />
        </div>

        {/* right section*/}
        <div className="hidden md:block basis-2/5">
          <img className="object-contain" src={heroLink} alt="hero-img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

const LoginForm = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirm = window.confirm("You want to preview DASHBOARD.");
    if (confirm) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="border border-slate-500 text-white  rounded-lg sm:p-8 mt-5">
      <h1 className="text-center text-4xl font-dmsans font-bold text-slate-500">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-7 text-slate-600"
      >
        <div>
          <label className="font-semi-bold "> User Name</label>
          <br />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-md px-2 py-2 text-xl mt-2 border-2 border-slate-400 w-72"
          />
        </div>

        <div className="relative w-full">
          <label className="font-semi-bold">Password</label>
          <br />
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md px-2 py-2 text-xl mt-2 border-2 border-slate-400  w-72"
          />
          <div className="absolute right-3 bottom-3 text-slate-600">
            {isPasswordVisible ? (
              <FaEye
                onClick={() => setPasswordVisible((pre) => !pre)}
                className="cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordVisible((pre) => !pre)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Login"
            className="bg-green-500 px-4 py-2 text-xl rounded-md font-bold text-white cursor-pointer hover:bg-green-600 "
          />
        </div>
      </form>
    </div>
  );
};
