import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdmissionForm from "../../pages/student/AdmissionForm";
import StudentDetails from "../../pages/student/StudentDetails";
import StudentsList from "../../components/StudentsList";
import AllStudentsList from "../../pages/student/AllStudentsList";
import SideBar from "../../components/Sidebar";
import DateAndTime from "../../components/DateAndTime";
import { IoMdLogOut } from "react-icons/io";
import BatchByInformation from "../../components/BatchByInformation";
import DueFeePieChart from "../../components/DueFeePieChart";
import StudentFeePayment from "../student/StudentFeePayment";
import ImportStudentsDetailsUsingCSV from "../student/ImportStudentsDetailsUsingCSV";
import { getDueSummaryOfCurrentBatch, summary } from "../../utils/api";
import { toast } from "react-toastify";

const Dashboard = () => {
  return (
    <div className="flex ">
      <SideBar />
      <Content />
    </div>
  );
};

const Content = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };
  return (
    <div className="flex-1 h-screen overflow-auto ">
      <div className="py-1 bg-slate-100 flex justify-between px-10 items-center">
        <DateAndTime />
        <IoMdLogOut
          className="text-3xl bg-red-600 rounded-full text-white cursor-pointer p-1 hover:scale-110 duration-500"
          onClick={logout}
        />
      </div>
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/students-list" element={<StudentsList />} />
        <Route path="/student-fees" element={<StudentFeePayment />} />
        <Route
          path="/import-Csv-file"
          element={<ImportStudentsDetailsUsingCSV />}
        />

        <Route path="/all-student-details" element={<AllStudentsList />} />
      </Routes>
    </div>
  );
};

const DashboardContent = () => {
  const [data, setData] = useState([]);
  const [dueData, setDueData] = useState({});
  useEffect(() => {
    summary()
      .then((response) => response)
      .then((responseData) => {
        if (responseData.status) {
          setData(responseData.summary);
        } else {
          toast.warning("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getDueSummaryOfCurrentBatch()
      .then((response) => response)
      .then((responseData) => {
        if (responseData.status) {
          console.log(responseData);
          setDueData(responseData?.summary?.payableAmountPerYearAndDepartment);
        } else {
          toast.warning("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div className="">
      {/* student in the batch */}
      <div className="flex justify-evenly p-2 gap-8">
        {data?.map((summaryData, idx) => {
          return <BatchByInformation key={idx} data={summaryData} />;
        })}
      </div>

      {/* due fees pie chart of each batch */}

      <div className="mt-2 grid grid-cols-2 justify-center items-center gap-6">
        <DueFeePieChart dueData={dueData[2024]} batch={2024} />
        <DueFeePieChart dueData={dueData[2023]} batch={2023} />
        <DueFeePieChart dueData={dueData[2022]} batch={2022} />
        <DueFeePieChart dueData={dueData[2021]} batch={2021} />
      </div>
    </div>
  );
};

export default Dashboard;
