import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosCloudDone } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const NAVIGATION_DATA = [
  "Personal Details",
  // "Academic Details",
  "Finance Details",
  // "Documents",
];

const StudentDetails = () => {
  const [navigationTab, setNavigationTab] = useState(NAVIGATION_DATA[0]);
  const location = useLocation();
  const { studentDetails } = location.state || {};

  return (
    <div className="px-10 py-2">
      <div className="max-width-[1000px]">
        {/* navigation tab */}
        <div className="bg-slate-100 shadow-sm flex justify-evenly items-center py-2 rounded-md text-md font-semibold font-nunito mb-3">
          {NAVIGATION_DATA.map((navtab, idx) => {
            return (
              <div
                className={`cursor-pointer ${
                  navtab === navigationTab &&
                  "text-blue-800 bg-green-400 px-4 py-1 rounded-md"
                }`}
                key={idx}
                onClick={() => setNavigationTab(navtab)}
              >
                {" "}
                {navtab}{" "}
              </div>
            );
          })}
        </div>

        {/* personal Details */}
        {NAVIGATION_DATA[0] === navigationTab && (
          <PersonalDetails
            name={studentDetails?.name}
            avatar={studentDetails?.avatar}
            studentDetails={Object.entries(studentDetails)}
            details={studentDetails}
          />
        )}

        {/* academic Details */}
        {/* {NAVIGATION_DATA[1] === navigationTab && <AcademicDetails />} */}

        {/* finance Details */}
        {NAVIGATION_DATA[1] === navigationTab && <FinanceDetails />}

        {/* Documents Details */}
        {/* {NAVIGATION_DATA[3] === navigationTab && <Documents />} */}
      </div>
    </div>
  );
};

export default StudentDetails;

// const PersonalDetails = () => {
//   return (
//     <div className="border px-8">
//       {/* avatar img container*/}
//       <div className="rounded-md mt-2">
//         <img
//           className="max-h-32 rounded-full object-contain"
//           src="https://i.pinimg.com/564x/4e/09/49/4e09490e358cde38862495e8292621c1.jpg"
//           alt="avatar-img"
//         />
//       </div>

//       {/* prsonal details */}
//       <div className="grid grid-cols-2 gap-3 my-3">
//         <DetailsFieldPreviewerOrEditor
//           title={"Name"}
//           titleContent={"Manish Kumar"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Father's Name"}
//           titleContent={"Sanjay Kumar Gupta"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Mother's Name"}
//           titleContent={"Rita Devi"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Guardian Name"}
//           titleContent={"Sanjay Kumar Gupta"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Guardian Mobile Number"}
//           titleContent={"6204977821"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Mobile Number"}
//           titleContent={"7479863918"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Address"}
//           titleContent={"Daulatpur Devairy Hajipur Vaishali"}
//         />
//         <DetailsFieldPreviewerOrEditor title={"State"} titleContent={"Bihar"} />
//         <DetailsFieldPreviewerOrEditor
//           title={"PinCode"}
//           titleContent={"844102"}
//         />
//         <DetailsFieldPreviewerOrEditor title={"10th%"} titleContent={"61.6"} />
//         <DetailsFieldPreviewerOrEditor title={"12th%"} titleContent={"74"} />
//         <DetailsFieldPreviewerOrEditor
//           title={"Diploma CGPA"}
//           titleContent={"9.54"}
//         />
//         <DetailsFieldPreviewerOrEditor
//           title={"Hosteler"}
//           titleContent={"Yes"}
//         />
//         <DetailsFieldPreviewerOrEditor title={"Gender"} titleContent={"Male"} />
//       </div>
//     </div>
//   );
// };

const DetailsFieldPreviewerOrEditor = ({ title, titleContent }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(titleContent);

  // edit details
  const onEdit = () => {
    alert("Edit functionality is not implemented yet." + data);
    setIsEditable((pre) => !pre);
  };
  return (
    <div className="my-2 flex  gap-2 items-center text-slate-800 font-nunito text-lg">
      <label className="font-bold">{title}: </label>

      {/* for content */}
      {isEditable ? (
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="rounded-md px-2 py-2 text-xl mt-2 border-slate-400 border w-72"
        />
      ) : (
        <p className="text-md text-slate-600 font-normal">{titleContent}</p>
      )}

      {/* for button */}
      {isEditable ? (
        <IoIosCloudDone
          className=" text-3xl cursor-pointer text-green-600"
          onClick={onEdit}
        />
      ) : (
        <CiEdit
          className="hover:scale-150 text-xl cursor-pointer hover:text-green-600"
          onClick={() => setIsEditable((pre) => !pre)}
        />
      )}
    </div>
  );
};

const AcademicDetails = () => {
  return (
    <div className="border-2 p-4 rounded-md">
      <h1 className="text-lg bg-cyan-300 px-3 py-1 rounded-md text-slate-500 font-semibold font-nunito">
        Academic Marks
      </h1>
      <div className="mb-6 ">
        <p className="bg-slate-100 text-center py-2 rounded-sm text-md font-nunito font-semibold">
          Eight Semester
        </p>
        {/* heading of the academic details */}
        <div className="grid grid-cols-11 text-center ">
          <p className="border py-2">Paper Code</p>
          <p className="col-span-4 border py-2">Paper Name</p>
          <p className="border-r-2 border py-2">CA1</p>
          <p className="border-r-2 border py-2">CA2</p>
          <p className="border-r-2 border py-2">CA3</p>
          <p className="border-r-2 border py-2">CA4</p>
          <p className="col-span-2 border py-2">Responsible Teacher</p>
        </div>

        {/* academic Data */}

        <div className="[&>*:nth-child(odd)]:bg-slate-50">
          <div className="grid grid-cols-11 text-center ">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="bg-slate-100 text-center py-2 rounded-sm text-md font-nunito font-semibold">
          Seven Semester
        </p>
        {/* heading of the academic details */}
        <div className="grid grid-cols-11 text-center">
          <p className="border py-2">Paper Code</p>
          <p className="col-span-4 border py-2">Paper Name</p>
          <p className="border-r-2 border py-2">CA1</p>
          <p className="border-r-2 border py-2">CA2</p>
          <p className="border-r-2 border py-2">CA3</p>
          <p className="border-r-2 border py-2">CA4</p>
          <p className="col-span-2 border py-2">Responsible Teacher</p>
        </div>

        {/* academic Data */}

        <div className="[&>*:nth-child(odd)]:bg-slate-50">
          <div className="grid grid-cols-11 text-center ">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>

          <div className="grid grid-cols-11 text-center">
            <p className="border py-2">PEC_2234</p>
            <p className="col-span-4 border py-2 ">
              Data Structure and Algorithm
            </p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="border-r-2 border py-2">0</p>
            <p className="col-span-2 border py-2 ">Anindiya Bakshi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FinanceDetails = () => {
  const FeeData = () => {
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
  return (
    <div className="border-2 p-4 rounded-md">
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
  );
};

const Documents = () => {
  const docData = [
    "10th Marksheet Certificate",
    "12th Marksheet Certificate",
    "Diploma Certificate",
    "Caste Certificate",
    "Income Certificate",
    "Residence Certificate",
    "JEE Score Sheet",
    "Webjee Score Sheet",
  ];
  return (
    <>
      <h1 className="text-4xl font-nunito font-extrabold text-slate-500">
        Documents
      </h1>

      <div className="py-5 grid grid-cols-4 gap-10">
        {docData.map((document, idx) => (
          <a
            href="#"
            target="_blank"
            key={idx}
            className={`text-center px-4 py-2 rounded-lg bg-slate-100 font-semibold text-md shadow-lg hover:scale-105 hover:bg-slate-200 cursor-pointer duration-300`}
          >
            {document}
          </a>
        ))}
      </div>
    </>
  );
};

const PersonalDetails = ({ studentDetails, name, avatar, details }) => {
  const [editStudentDetails, setEditStudentDetails] = useState(false);
  const changeStudentDetails = () => {};

  if (editStudentDetails) {
    return <EditStudentDetails studentDetails={details} />;
  }

  return (
    <div>
      <div className=" shadow-md p-4 flex flex-row justify-between pl-5 bg-slate-50">
        <div>
          <div className="w-32 h-32 rounded-full shadow-md overflow-hidden">
            <img
              src={
                avatar ??
                "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
              }
              className="h-full w-full object-center"
            />
          </div>
          <p className="text-slate-500 text-3xl font-semibold">{name}</p>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setEditStudentDetails(true)}
            className="inline px-5 py-2 rounded-lg bg-yellow-500 text-white font-nunito font-bold cursor-pointer hover:scale-110 hover:bg-green-500 duration-700"
          >
            Edit Data
          </button>
        </div>
      </div>

      {/* details */}
      <div className=" my-2 grid grid-cols-3 gap-4 text-xl p-3">
        {studentDetails.map((data, idx) => {
          return <StudentDataField key={idx} label={data[0]} value={data[1]} />;
        })}
      </div>
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

const EditStudentDetails = ({ studentDetails }) => {
  const [name, setName] = useState(studentDetails?.name);
  const [fathersName, setFathersName] = useState(studentDetails?.fathersName);
  const [mothersName, setMothersName] = useState(studentDetails?.mothersName);
  const [guardianName, setGuardianName] = useState(
    studentDetails?.guardianName
  );
  const [guardianMobileNumber, setGuardianMobileNumber] = useState(
    studentDetails?.guardianMobileNumber
  );
  const [mobileNumber, setMobileNumber] = useState(
    studentDetails?.mobileNumber
  );
  const [address, setAddress] = useState(studentDetails?.address);
  const [state, setState] = useState(studentDetails?.state);
  const [pincode, setPincode] = useState(studentDetails?.pinCode);
  const [tenthPercentage, settenthPercentage] = useState(
    studentDetails?.tenthPercentage
  );
  const [twelvePercentage, settwelvePercentage] = useState(
    studentDetails?.twelfthPercentage
  );
  const [diplomaCGPA, setDiplomaCGPA] = useState(studentDetails?.diplomaCGPA);
  const [image, setImage] = useState("");

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Clicked sucessfully");
  };
  return (
    <div className="px-10 py-5">
      <div className="m-2 mb-4">
        <h1 className="text-4xl font-nunito font-extrabold text-slate-500">
          Edit Student Details
        </h1>
        <div className="w-52 bg-cyan-500 h-[1.5px] mt-2 rounded-lg text-center"></div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <InputField
          labelName={"Name"}
          fieldValue={name}
          onChangeHandler={setName}
        />
        <InputField
          labelName={"Father's Name"}
          fieldValue={fathersName}
          onChangeHandler={setFathersName}
        />
        <InputField
          labelName={"Mother's Name"}
          fieldValue={mothersName}
          onChangeHandler={setMothersName}
        />
        <InputField
          labelName={"Guardian Name"}
          fieldValue={guardianName}
          onChangeHandler={setGuardianName}
        />
        <InputField
          labelName={"Guardian Mobile Number"}
          inputType="number"
          fieldValue={guardianMobileNumber}
          onChangeHandler={setGuardianMobileNumber}
        />
        <InputField
          labelName={"Mobile Number"}
          inputType="number"
          fieldValue={mobileNumber}
          onChangeHandler={setMobileNumber}
        />
        <InputField
          labelName={"Address"}
          fieldValue={address}
          onChangeHandler={setAddress}
        />
        <InputField
          labelName={"State"}
          fieldValue={state}
          onChangeHandler={setState}
        />
        <InputField
          labelName={"Pincode"}
          inputType="number"
          fieldValue={pincode}
          onChangeHandler={setPincode}
        />
        <InputField
          labelName={"10th%"}
          fieldValue={tenthPercentage}
          inputType="number"
        />
        <InputField
          labelName={"12th%"}
          require={false}
          fieldValue={twelvePercentage}
          onChangeHandler={settwelvePercentage}
        />
        <InputField
          labelName={"Diploma CGPA"}
          require={false}
          inputType="number"
          fieldValue={diplomaCGPA}
          onChangeHandler={setDiplomaCGPA}
        />
        <FileInputField labelName={"Image"} onChangeHandler={setImage} />

        <div className="col-span-3 text-center ">
          <input
            type="submit"
            value={"Apply"}
            className="px-5 py-2 rounded-lg bg-yellow-500 text-white  font-nunito font-bold cursor-pointer hover:scale-110 hover:bg-green-500 duration-700"
          />
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  labelName,
  fieldValue,
  onChangeHandler,
  require = true,
  inputType,
}) => {
  return (
    <div>
      <label className="font-semi-bold">{labelName}</label>
      {require && <span className="text-red-600 font-bold ">*</span>}
      <br />
      <input
        type={inputType}
        value={fieldValue}
        onChange={(e) => onChangeHandler(e.target.value)}
        className="rounded-md px-2 py-2 text-xl font-semibold mt-2 border border-slate-700 w-80"
      />
    </div>
  );
};

const FileInputField = ({ labelName, onChangeHandler }) => {
  return (
    <div>
      <label className="font-semi-bold">{labelName}</label>
      <span className="text-red-600 font-bold">*</span>
      <br />
      <input
        type="file"
        onChange={(e) => onChangeHandler(e.target.files[0])}
        className="rounded-md px-2 py-2 mt-2 border border-slate-700 w-80"
        placeholder="none"
      />
    </div>
  );
};
