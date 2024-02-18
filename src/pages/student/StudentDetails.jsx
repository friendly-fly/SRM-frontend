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
  const [data , setData] = useState(titleContent)

  // edit details
  const onEdit = () => {
    alert("Edit functionality is not implemented yet." + data)
    setIsEditable(pre => !pre)

  }
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
        <IoIosCloudDone className=" text-3xl cursor-pointer text-green-600" onClick={onEdit}/>
      ) : (
        <CiEdit className="hover:scale-150 text-xl cursor-pointer hover:text-green-600" onClick={() => setIsEditable(pre => !pre)}/>
      )}
    </div>
  );
};

const AcademicDetails = () => {
  return <h1>Acadamic detaisl</h1>;
};

const FinanceDetails = () => {
  return <h1>FinanceDetails</h1>;
};

const Documents = () => {
  return <h1>Documents</h1>;
};
