import React, { useEffect, useState } from "react";
import StudentsList from "../../components/StudentsList";
import {
  getLastYearStudent,
  getStudentByBatchAndDepartment,
} from "../../utils/api";
import { toast } from "react-toastify";

const AllStudentsList = () => {
  const [passingBatch, setPassingBatch] = useState();
  const [department, setDepartment] = useState();
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    getLastYearStudent()
      .then((response) => response)
      .then((responseData) => {
        if (responseData.status) {
          setStudentsData(responseData.students);
        } else {
          toast.warning("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!passingBatch) {
      toast.warning("Please select Passing Batch");
    }

    if (!department) {
      toast.warning("Please select Department");
    }

    try {
      const response = await getStudentByBatchAndDepartment(
        passingBatch,
        department
      );

      if (response.status) {
        setStudentsData(response.students);
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="py-3 shadow-inner flex items-center gap-6 justify-end pr-4"
        onSubmit={submitHandler}
      >
        {/* passing batch select */}
        <div className="flex gap-2 items-center">
          <label className="font-nunito font-bold text-slate-600 text-md px-1">
            Passing Batch:
          </label>
          <select
            className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer"
            value={passingBatch}
            onChange={(e) => setPassingBatch(e.target.value)}
          >
            <option>***select-option***</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>

        {/* department select */}
        <div className="flex gap-2 items-center">
          <label className="font-nunito font-bold text-slate-600 text-md px-1">
            Department:
          </label>
          <select
            className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>***select-option***</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EE</option>
            <option>CE</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-1 text-lg bg-green-400 rounded-md text-white hover:scale-110 duration-500 cursor-pointer font-nunito font-bold"
        >
          Filter
        </button>
      </form>
      <StudentsList studentsData={studentsData} />
    </div>
  );
};

export default AllStudentsList;
