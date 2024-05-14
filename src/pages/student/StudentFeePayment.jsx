import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const StudentFeePayment = () => {
  return (
    <div className="border-2 p-4 rounded-md">
      <Filter />

      <div>
        <h1 className="text-lg bg-cyan-300 px-3 py-1 rounded-md text-slate-500 font-semibold font-nunito">
          Finance Details
        </h1>
        <div className="mb-6 font-nunito">
          <FeeDataHeading />
          <FeeData />
          <FeeData />
          <FeeData />
          <FeeData />
          <FeeData />

          {/* due section */}
          <div className="grid grid-cols-6 text-cente bg-yellow-200 text-center text-xl">
            <p className="col-span-5 border py-2 font-bold font-nunito text-slate-600">
              Due Amount
            </p>
            <p className=" border py-2 font-bold text-slate-600 flex items-center justify-center gap-1">
              <FaRupeeSign /> 45000
            </p>
          </div>
        </div>
      </div>
      <PaymentForm />
    </div>
  );
};

const FeeData = () => {
  const [enableInputField, setEnableInputField] = useState(false);
  const [inputData, setInputData] = useState();

  // update fee
  const submitHandler = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Do you really want to update..");
    if (confirm) {
      alert("This feature is not implemented yet.");
      setEnableInputField(false);
    }
  };

  console.log(enableInputField + " " + inputData);
  return (
    <div className="grid grid-cols-6 text-center bg-green-300 overflow-hidden">
      <p className="border py-2">1st</p>
      <p className="col-span-2 border py-2">33000</p>
      <p className="col-span-2 border py-2">6000</p>

      <p className=" border py-2">6000</p>
    </div>
  );
};

const FeeDataHeading = () => {
  return (
    <div className="grid grid-cols-6 text-center ">
      <p className=" border py-2">Semester</p>
      <p className="col-span-2 border py-2">Academic Fees</p>
      <p className="col-span-2 border py-2">Hostel Fees</p>
      <p className=" border py-2">Due</p>
    </div>
  );
};

const Filter = () => {
  return (
    <form className="py-3 shadow-inner flex items-center gap-6 justify-end pr-4">
      {/* passing batch select */}
      <div className="flex gap-2 items-center">
        <label className="font-nunito font-bold text-slate-600 text-md px-1">
          Passing Batch:
        </label>
        <select className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer">
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
        <select className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer">
          <option>***select-option***</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>EE</option>
          <option>CE</option>
        </select>
      </div>

      {/* university select */}
      <div className="flex gap-2 items-center">
        <label className="font-nunito font-bold text-slate-600 text-md px-1">
          University Roll:
        </label>
        <select className="border-2 shadow-sm text-md font-bold font-nunito text-slate-600 px-2 py-1 rounded-lg cursor-pointer">
          <option>***select-option***</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-1 text-lg bg-green-400 rounded-md text-white hover:scale-110 duration-500 cursor-pointer font-nunito font-bold"
      >
        Filter
      </button>
    </form>
  );
};

const PaymentForm = () => {
  const [amount, setAmount] = useState();
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment sucess " + amount);
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3" onSubmit={handlePayment}>
        <div>
          <label className="font-semi-bold">{"Enter Amount"}</label>
          <br />
          <input
            type={"number"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-md px-2 py-2 text-xl font-semibold border border-slate-700 w-80"
          />
        </div>

        <button
          type="submit"
          className=" px-4 py-2 text-lg bg-yellow-400 rounded-md text-white cursor-pointer font-nunito font-bold"
        >
          Payment
        </button>
      </form>
    </div>
  );
};

export default StudentFeePayment;
