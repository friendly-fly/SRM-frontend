import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menu, setMenu] = useState("dashboard");
  return (
    <div className="w-[280px] border h-screen bg-slate-100">
      <p className="text-2xl font-bold text-slate-500 px-5 py-2  border-b-2">
        S<span className="text-cyan-400">R</span>M
      </p>

      <div className="mt-8 pl-6 text-md text-slate-600 font-semibold font-nunito">
        <LinkContainer
          to={"/dashboard"}
          menu={menu}
          setMenu={setMenu}
          IconName={MdDashboard}
          label={"Dashboard"}
        />
        <LinkContainer
          to={"/dashboard/admission-form"}
          menu={menu}
          setMenu={setMenu}
          IconName={PiStudentBold}
          label={"Admission"}
        />

        <p
          className="
            pl-1 inline-block mb-4"
        >
          <span className="flex items-center gap-1 text-slate-900">
            <MdManageAccounts /> Student Management
          </span>
        </p>

        <div className="pl-7 text-sm">
          <LinkContainer
            to={"/dashboard/all-students-details"}
            menu={menu}
            setMenu={setMenu}
            IconName={FaUserGraduate}
            label={"Student Details"}
          />

          <LinkContainer
            to={"/dashboard/student-fees"}
            menu={menu}
            setMenu={setMenu}
            IconName={FaRupeeSign}
            label={"Student Fees"}
          />
        </div>

        <LinkContainer
          to={"/dashboard/report-analysis"}
          menu={menu}
          setMenu={setMenu}
          IconName={BiAnalyse}
          label={"Resport and Analysis"}
        />
      </div>
    </div>
  );
};

export default Sidebar;

const LinkContainer = ({ to, menu, setMenu, IconName, label }) => {
  return (
    <Link
      to={to}
      className={`${
        menu === label && "text-blue-800 bg-green-400"
      } pr-5 pl-1 py-1 rounded-md  inline-block cursor-pointer mb-5`}
      onClick={() => setMenu(label)}
    >
      <span className="flex items-center gap-1">
        <IconName /> {label}
      </span>
    </Link>
  );
};
