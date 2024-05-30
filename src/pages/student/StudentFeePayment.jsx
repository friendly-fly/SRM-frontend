import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import filterImg from "../../assets/filter.svg";
import {
  feePayment,
  getStudentByBatchAndDepartment,
  getStudentByBatchDepartmentAndRollNumber,
  updateStudent,
} from "../../utils/api";
import Loading from "../../components/Loading";

const StudentFeePayment = () => {
  const [passingBatch, setPassingBatch] = useState();
  const [department, setDepartment] = useState();
  const [studentsData, setStudentsData] = useState();
  const [rollNumber, setRollNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!passingBatch) {
      toast.warning("Please select Passing Batch");
    }

    if (!department) {
      toast.warning("Please select Department");
    }

    try {
      setLoading(true);
      const response = await getStudentByBatchDepartmentAndRollNumber(
        passingBatch,
        department,
        rollNumber
      );

      if (response.status && response.students.length === 0) {
        toast.warning("No Student Found");
      }

      if (response.status) {
        setStudentsData(response.students[0]);
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      {loading && <Loading />}
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

        {/* roll number input */}
        <div className="flex gap-2 items-center">
          <label className="font-nunito font-bold text-slate-600 text-md px-1">
            RollNumber
          </label>
          <input
            type="number"
            className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1 text-lg bg-green-400 rounded-md text-white hover:scale-110 duration-500 cursor-pointer font-nunito font-bold"
        >
          Filter
        </button>
      </form>
      {!studentsData && (
        <div className="flex justify-center mt-32">
          <img className="h-80 w-80" src={filterImg} alt="filter img" />
        </div>
      )}
      {studentsData && (
        <div>
          <div className="flex justify-between py-3">
            <StudentDataField
              label={"RollNumber"}
              value={studentsData?.rollNo}
            />
            <StudentDataField label={"Name"} value={studentsData?.name} />
            <StudentDataField
              label={"Department"}
              value={studentsData?.department}
            />
            <StudentDataField
              label={"Year"}
              value={new Date().getUTCFullYear() - studentsData?.year + 1}
            />
          </div>
          <FinanceDetails
            totalPayableFee={studentsData?.totalPayableFee}
            paid={studentsData?.payment}
            year={studentsData?.year}
            studentDetails={studentsData}
            setStudentDetails={setStudentsData}
          />
        </div>
      )}
    </div>
  );
};

const PaymentForm = ({ studentDetails, setStudentDetails }) => {
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!amount) {
      toast.warning("Please enter amout");
      return;
    }
    try {
      setLoading(true);
      const response = await feePayment({
        amount: parseInt(amount),
        id: studentDetails?._id,
      });
      if (response?.status) {
        console.log(response);
        setStudentDetails(response.student);
        toast.success("Payment sucessfully");
        return;
      } else {
        toast.warning("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      {loading && <Loading />}
      <form className="flex flex-col gap-3" onSubmit={handlePayment}>
        <div>
          <label className="font-semi-bold ">{"Enter Amount"}</label>
          <br />
          <input
            type={"number"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-md mt-2 px-2 py-2 text-xl font-semibold border border-slate-700 w-80"
          />
        </div>

        <button
          type="submit"
          className="mt-3 px-4 py-2 text-lg text-slate-600 bg-yellow-200 rounded-md cursor-pointer font-nunito font-bold"
        >
          Payment
        </button>
      </form>
    </div>
  );
};

export default StudentFeePayment;

const FinanceDetails = ({
  totalPayableFee,
  paid,
  year,
  studentDetails,
  setStudentDetails,
}) => {
  console.log(studentDetails);
  const FeeData = ({ data, semester, feePerSemester }) => {
    console.log(data);
    return (
      <div
        className={`grid grid-cols-6 text-center bg-green-300 overflow-hidden `}
      >
        <p className={`border py-2 ${data > 6000 && "bg-red-400"}`}>
          {semester}
        </p>
        <p className={`col-span-2 border py-2 ${data > 6000 && "bg-red-400"}`}>
          {feePerSemester - (studentDetails?.hosteler ? 6000 : 0)}
        </p>
        <p className={`col-span-2 border py-2 ${data !== 0 && "bg-red-400"}`}>
          {studentDetails?.hosteler ? 6000 : 0}
        </p>
        <p className={` border py-2 ${data != 0 && "bg-red-400"}`}>
          {data > 0 ? data : 0}
        </p>
      </div>
    );
  };

  const FeeDataHeading = () => {
    return (
      <div className="grid grid-cols-6 text-center ">
        <p className=" border py-2">Semester</p>
        <p className="col-span-2 border py-2">Academic Fees</p>
        <p className=" col-span-2 border py-2 ">Hostel Fees</p>
        <p className=" border py-2">Due</p>
      </div>
    );
  };

  // const feesArray = new Array();
  const currentYear = parseInt(new Date().getFullYear()) - parseInt(year) + 1;
  const currentSemester = currentYear * 2 - (new Date().getMonth() > 6 ? 0 : 1);

  const feeArray = new Array(currentSemester);
  let feePerSemester;

  if (studentDetails?.isLateral) {
    feePerSemester = totalPayableFee / 6;
  } else {
    feePerSemester = totalPayableFee / 8;
  }

  for (let i = 0; i < feeArray.length; i++) {
    feeArray[i] =
      paid - feePerSemester >= 0 ? 0 : Math.abs(paid - feePerSemester);
    paid -= feePerSemester;
    if (paid < 0) {
      paid = 0;
    }
  }

  const totalDue = feePerSemester * currentSemester - studentDetails?.payment;

  return (
    <div className="border-2 p-4 rounded-md">
      <h1 className="text-lg bg-cyan-300 px-3 py-1 rounded-md text-slate-500 font-semibold font-nunito">
        Finance Details
      </h1>
      <div className="mb-6 font-nunito">
        <FeeDataHeading />
        {feeArray.map((data, idx) => {
          return (
            <FeeData
              key={idx}
              data={data}
              semester={idx + 1}
              feePerSemester={feePerSemester}
            />
          );
        })}

        {/* due section */}
        <div className="grid grid-cols-6 text-cente bg-yellow-200 text-center text-xl">
          <p className="col-span-5 border py-2 font-bold font-nunito text-slate-600">
            Due Amount
          </p>
          <p className=" border py-2 font-bold text-slate-600 flex items-center justify-center gap-1">
            <FaRupeeSign /> {totalDue}
          </p>
        </div>
      </div>

      <PaymentForm
        studentDetails={studentDetails}
        setStudentDetails={setStudentDetails}
      />
    </div>
  );
};

const StudentDataField = ({ label, value }) => {
  function capitalizeAndSpace(str) {
    // Capitalize the first letter of the string
    const capitalizedFirst = str.charAt(0).toUpperCase() + str.slice(1);

    // Add a space before each uppercase letter, except the first one
    const result = capitalizedFirst.replace(/([A-Z])/g, " $1").trim();

    return result;
  }

  const labelName = capitalizeAndSpace(label);

  if (label === "_id" || label === "__v" || label === "name") return;

  if (label === "hosteler") {
    value = value === true ? "True" : "False";
  }

  if (label === "isActive") {
    value = value === true ? "True" : "False";
  }

  if (label === "isDropout") {
    value = value === true ? "True" : "False";
  }

  if (label === "isGraduated") {
    value = value === true ? "True" : "False";
  }

  if (label === "isLateral") {
    value = value === true ? "True" : "False";
  }

  return (
    <div className="flex gap-8 items-center shadow-md px-4 py-3 rounded-lg">
      <label className="text-lg font-semibold text-slate-600">
        {labelName} :
      </label>
      <p className="text-md  text-slate-500">{value}</p>
    </div>
  );
};
