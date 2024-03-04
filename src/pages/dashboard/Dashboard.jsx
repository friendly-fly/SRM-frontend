import React from "react";
import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* sidebar for menu*/}
      <div className="w-[300px] border h-screen bg-slate-100">
        <p className="text-2xl font-bold text-slate-500 px-5 py-2 font-nunito border-b-2">
          S<span className="text-cyan-400">R</span>M
        </p>

        <div className="mt-8">
        <ul className="flex flex-col gap-6 pl-6">
            <li className="text-md font-nunito flex items-center gap-1 cursor-pointer"><MdDashboard /> Dashboard</li>
            <li className="text-md font-nunito flex items-center gap-1 cursor-pointer"><PiStudentBold/> Admission</li>
            <li className="text-md font-nunito flex items-center gap-1"><MdManageAccounts />
Student Management</li>
            <li className="text-md font-nunito flex items-center gap-1"><BiAnalyse /> Resport and Analysis</li>
        </ul>
        </div>
      </div>


      {/* content */}
      <div className="border p-5 flex-1">
          
      </div>
    </div>
  );
};

export default Dashboard;
