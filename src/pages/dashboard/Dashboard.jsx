import React from "react";
import { Route, Routes } from "react-router-dom";
import AdmissionForm from "../../pages/student/AdmissionForm";
import StudentDetails from "../../pages/student/StudentDetails";
import StudentsList from "../../components/StudentsList";
import AllStudentsList from "../../pages/student/AllStudentsList";
import SideBar from "../../components/Sidebar";
import DateAndTime from "../../components/DateAndTime";
import { IoMdLogOut } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex ">
      <SideBar />
      <Content />
    </div>
  );
};

const Content = () => {
  const logout = () => {
    alert("this feature is not implemented yet.")
  }
  return (
    <div className="flex-1 h-screen overflow-auto ">
      <div className="py-1 bg-slate-100 flex justify-between px-10 items-center">
        <DateAndTime/>
        <IoMdLogOut className="text-3xl bg-red-600 rounded-full text-white cursor-pointer p-1 hover:scale-110 duration-500" onClick={logout}/>
      </div>
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/students-list" element={<StudentsList />} />

        <Route path="/all-students-details" element={<AllStudentsList />} />
      </Routes>
    </div>
  );
};

const DashboardContent = () => {
  return <div className="bg-red-700 flex-1">Dashboard</div>;
};

export default Dashboard;
