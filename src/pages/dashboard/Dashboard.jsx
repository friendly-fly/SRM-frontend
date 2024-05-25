import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import { summary } from "../../utils/api";
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
  const logout = () => {
    alert("this feature is not implemented yet.");
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
        <DueFeePieChart />
        <DueFeePieChart />
        <DueFeePieChart />
        <DueFeePieChart />
      </div>
    </div>
  );
};

export default Dashboard;
