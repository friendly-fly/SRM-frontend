import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const StudentsList = (data) => {
  const location = useLocation();
  const currentURL = location.pathname;
  const [universityRoll, setUniversityRoll] = useState();
  const [studentsData, setStudentsData] = useState([]);
  useEffect(() => {
    setStudentsData(data?.studentsData);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(universityRoll);
    const filterData = filterStudentByUniversityRoll(
      data?.studentsData,
      universityRoll
    );
    setStudentsData(filterData);
  };

  const filterStudentByUniversityRoll = (students, rollNumber) => {
    console.log("hlw");
    return students.filter((filterData) => {
      return filterData.rollNo === parseInt(rollNumber);
    });
  };

  return (
    <>
      {/* heading section */}
      <div className="bg-gray-100 text-xl py-3 px-8 shadow-sm flex justify-between items-center ">
        <p className=" text-slate-700 font-bold uppercase">
          Students List CSE-2024 batch
        </p>
        {currentURL !== "/dashboard/all-students-details" && (
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              className="pl-5 w-[400px] py-1 border-2 rounded-full rounded-r-none text-center"
              type="number"
              placeholder="University Number"
              value={universityRoll}
              onChange={(e) => setUniversityRoll(e.target.value)}
            />
            <button
              type="submit"
              className="py-2 -ml-1 px-3 bg-green-600 border-2 rounded-full rounded-l-none "
            >
              <FaSearch className="text-white" />
            </button>
          </form>
        )}
      </div>

      {/* studnets list section */}
      <div className="border py-3 mt-2">
        <div className="mb-6 p-1">
          {/* heading of the academic details */}
          <div className="grid grid-cols-10 text-center font-bold text-md sticky top-0 bg-white">
            <p className="col-span-2 border py-2">Registration Number</p>
            <p className="border-r-2 border py-2">Roll Number</p>
            <p className="col-span-2 border py-2">Full Name</p>
            <p className="border-r-2 border py-2">Mobile Number</p>
            <p className="col-span-3 border-r-2 border py-2">Address</p>
            <p className="border-r-2 border py-2">Due</p>
          </div>

          {/* academic Data */}

          <div className="[&>*:nth-child(odd)]:bg-slate-100">
            {studentsData?.map((student, idx) => {
              return (
                <DetailsContainer
                  key={idx}
                  regNum={student?.regNum ?? idx}
                  rollNum={student?.rollNo ?? idx}
                  fullName={student?.name ?? idx}
                  mobileNum={student?.mobileNumber ?? idx}
                  address={student?.address ?? idx}
                  due={student?.due ?? idx}
                  studentDetails={student}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;

const DetailsContainer = ({
  regNum,
  rollNum,
  fullName,
  mobileNum,
  address,
  due,
  studentDetails,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:font-bold"
      onClick={() =>
        navigate("/dashboard/student-details", { state: { studentDetails } })
      }
    >
      <p className="col-span-2 border py-2">{regNum}</p>
      <p className="border py-2 ">{rollNum}</p>
      <p className="col-span-2 border-r-2 border py-2">{fullName}</p>
      <p className="border-r-2 border py-2">{mobileNum}</p>
      <p className="col-span-3 border-r-2 border py-2">{address}</p>
      <p className="border-r-2 border py-2">{due}</p>
    </div>
  );
};
