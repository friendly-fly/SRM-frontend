import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdmissionForm from "./pages/student/AdmissionForm";
import StudentDetails from "./pages/student/StudentDetails";
import StudentsList from "./components/StudentsList";
import AllStudentsList from "./pages/student/AllStudentsList";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route
          path="/students-list/:registrationNumber"
          element={<StudentsList />}
        />

        <Route path="/all-students-details" element={<AllStudentsList />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
