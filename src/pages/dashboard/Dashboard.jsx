import React from "react";
import {Route, Routes } from "react-router-dom";
import AdmissionForm from "../../pages/student/AdmissionForm";
import StudentDetails from "../../pages/student/StudentDetails";
import StudentsList from "../../components/StudentsList";
import AllStudentsList from "../../pages/student/AllStudentsList";
import SideBar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex ">
      <SideBar />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <div className="border flex-1 overflow-auto h-screen">
      <Routes>
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route
          path="/students-list/:registrationNumber"
          element={<StudentsList />}
        />

        <Route path="/all-students-details" element={<AllStudentsList />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
