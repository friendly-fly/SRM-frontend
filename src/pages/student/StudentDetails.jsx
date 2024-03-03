import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosCloudDone } from "react-icons/io";

const NAVIGATION_DATA = [
  "Personal Details",
  "Academic Details",
  "Finance Details",
  "Documents",
];

const StudentDetails = () => {
  const [navigationTab, setNavigationTab] = useState(NAVIGATION_DATA[0]);
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
                  "bg-green-600 px-4 py-1 rounded-md text-white"
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
        {NAVIGATION_DATA[0] === navigationTab && <PersonalDetails />}

        {/* academic Details */}
        {NAVIGATION_DATA[1] === navigationTab && <AcademicDetails />}

        {/* finance Details */}
        {NAVIGATION_DATA[2] === navigationTab && <FinanceDetails />}

        {/* Documents Details */}
        {NAVIGATION_DATA[3] === navigationTab && <Documents />}
      </div>
    </div>
  );
};

export default StudentDetails;

const PersonalDetails = () => {
  return (
    <div className="bg-slate-50 px-8">
      {/* avatar img container*/}
      <div className="rounded-md">
        <img
          className="max-h-40 rounded-full object-contain"
          src="https://i.pinimg.com/564x/4e/09/49/4e09490e358cde38862495e8292621c1.jpg"
          alt="avatar-img"
        />
      </div>

      {/* prsonal details */}
      <div className="grid grid-cols-3 gap-5 my-3">
        <DetailsFieldPreviewerOrEditor
          title={"Name"}
          titleContent={"Manish Kumar"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Father's Name"}
          titleContent={"Sanjay Kumar Gupta"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Mother's Name"}
          titleContent={"Rita Devi"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Guardian Name"}
          titleContent={"Sanjay Kumar Gupta"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Guardian Mobile Number"}
          titleContent={"6204977821"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Mobile Number"}
          titleContent={"7479863918"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Address"}
          titleContent={"Daulatpur Devairy Hajipur Vaishali"}
        />
        <DetailsFieldPreviewerOrEditor title={"State"} titleContent={"Bihar"} />
        <DetailsFieldPreviewerOrEditor
          title={"PinCode"}
          titleContent={"844102"}
        />
        <DetailsFieldPreviewerOrEditor title={"10th%"} titleContent={"61.6"} />
        <DetailsFieldPreviewerOrEditor title={"12th%"} titleContent={"74"} />
        <DetailsFieldPreviewerOrEditor
          title={"Diploma CGPA"}
          titleContent={"9.54"}
        />
        <DetailsFieldPreviewerOrEditor
          title={"Hosteler"}
          titleContent={"Yes"}
        />
        <DetailsFieldPreviewerOrEditor title={"Gender"} titleContent={"Male"} />
      </div>
    </div>
  );
};

const DetailsFieldPreviewerOrEditor = ({ title, titleContent }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(titleContent);

  // edit details
  const onEdit = () => {
    alert("Edit functionality is not implemented yet." + data);
    setIsEditable((pre) => !pre);
  };
  return (
    <div className="my-2 flex  gap-2 items-center text-lg font-semibold  font-nunito text-slate-600">
      <label>{title}: </label>

      {/* for content */}
      {isEditable ? (
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="rounded-md px-2 py-2 text-xl mt-2 border-slate-400 border w-72"
        />
      ) : (
        <p>{titleContent}</p>
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
  return (
    <div className="border-2 p-4 rounded-md">
      <h1 className="text-lg bg-cyan-300 px-3 py-1 rounded-md text-slate-500 font-semibold font-nunito">
        Finance Details
      </h1>
      <div className="mb-6 font-nunito">
        {/* heading of the academic details */}
        <div className="grid grid-cols-3 text-center ">
          <p className="border py-2">Semester</p>
          <p className=" border py-2">Academic Fees</p>
          <p className=" border py-2">Hostel Fees</p>
        </div>

        {/* fee data */}

        <div>
          <div className="grid grid-cols-3 text-center bg-green-300">
            <p className="border py-2">1st</p>
            <p className=" border py-2">33000</p>
            <p className=" border py-2">6000</p>
          </div>

          <div className="grid grid-cols-3 text-center bg-green-300">
            <p className="border py-2">2nd</p>
            <p className=" border py-2">33000</p>
            <p className=" border py-2">6000</p>
          </div>

          <div className="grid grid-cols-3 text-center bg-green-300">
            <p className="border py-2">3rd</p>
            <p className=" border py-2 ">33000</p>
            <p className=" border py-2 bg-red-300">6000</p>
          </div>

          <div className="grid grid-cols-3 text-center bg-red-300">
            <p className="border py-2">4th</p>
            <p className=" border py-2">33000</p>
            <p className=" border py-2">6000</p>
          </div>
        </div>

        {/* due section */}
        <div className="grid grid-cols-3 text-cente bg-yellow-200 text-center text-xl">
          <p className="col-span-2 border py-2 font-bold font-nunito text-slate-600">
            Due Amount
          </p>
          <p className=" border py-2 font-bold text-slate-600">45000</p>
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
            className={`text-center px-4 py-2 rounded-lg bg-green-500 text-white font-semibold text-lg shadow-lg hover:scale-105 cursor-pointer duration-500`}
          >
            {document}
          </a>
        ))}
      </div>
    </>
  );
};
