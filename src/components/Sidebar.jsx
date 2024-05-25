import React, { useEffect, useLayoutEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BiSolidFileImport } from "react-icons/bi";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState("dashboard");

  useEffect(() => {
    const activeNav = convertPathNameToOriginalName(pathname);
    if (activeNav === "Student Details") {
      setMenu("All Student Details");
      return;
    }
    setMenu(activeNav);
  }, [pathname]);

  const convertPathNameToOriginalName = (pathname) => {
    let navName = pathname.split(/[\/-]/);

    const convertFirstCharCapital = (str) => {
      const firstChar = str.charAt(0).toUpperCase();
      const restOfString = str.slice(1);
      const capitalizedStr = firstChar + restOfString;
      return capitalizedStr;
    };

    if (navName.length === 2) {
      return convertFirstCharCapital(navName[1]);
    } else {
      let temp = "";
      for (let i = 2; i < navName.length - 1; i++) {
        temp += convertFirstCharCapital(navName[i]) + " ";
      }

      temp += convertFirstCharCapital(navName[navName.length - 1]);

      return temp;
    }
  };

  return (
    <div className="w-[250px] border h-screen bg-slate-100">
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
          to={"/dashboard/admission"}
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
            to={"/dashboard/all-student-details"}
            menu={menu}
            setMenu={setMenu}
            IconName={FaUserGraduate}
            label={"All Student Details"}
          />

          <LinkContainer
            to={"/dashboard/student-fees"}
            menu={menu}
            setMenu={setMenu}
            IconName={FaRupeeSign}
            label={"Student Fees"}
          />
          <LinkContainer
            to={"/dashboard/import-csv-file"}
            menu={menu}
            setMenu={setMenu}
            IconName={BiSolidFileImport}
            label={"Import Csv File"}
          />
        </div>

        <LinkContainer
          to={"/dashboard/report-analysis"}
          menu={menu}
          setMenu={setMenu}
          IconName={BiAnalyse}
          label={"Report Analysis"}
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
      // onClick={() => setMenu(label)}
    >
      <span className="flex items-center gap-1">
        <IconName /> {label}
      </span>
    </Link>
  );
};
