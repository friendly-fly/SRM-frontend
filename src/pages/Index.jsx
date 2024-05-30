import React from "react";
import heroLink from "../assets/hero.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className=" flex">
        {/* left section*/}
        <div className="hidden md:block basis-2/5">
          <img className="object-contain" src={heroLink} alt="hero-img" />
        </div>

        {/* right section*/}
        <div className="basis-3/5 px-4  flex flex-col gap-3 py-32">
          <h1 className="font-nunito font-bold text-6xl text-slate-700">
            Welcome to <span className="text-7xl text-cyan-600">Student</span>{" "}
            Relationship Management
          </h1>

          <p className="text-md font-nunito text-slate-600">
            The Student Management CRM application is meticulously designed to
            streamline a wide array of administrative tasks associated with
            student management. This innovative system offers a centralized
            platform that simplifies the management of student records, and
            financial transactions, ensuring an integrated and efficient
            operational framework for educational institutions
          </p>

          {/* button */}

          <div className="">
            <button
              onClick={() => navigate("/login")}
              className="px-3 py-1 bg-green-500 rounded-md text-white font-semibold shadow-lg cursor-pointer py-3"
            >
              Administration
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
