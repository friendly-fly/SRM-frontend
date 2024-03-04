import React, { useState } from "react";

const AdmissionForm = () => {
    const [name , setName] = useState("")
    const [fathersName , setFathersName] = useState("")
    const [mothersName , setMothersName] = useState("")
    const [guardianName , setGuardianName] = useState("")
    const [guardianMobileNumber , setGuardianMobileNumber] = useState("")
    const [mobileNumber , setMobileNumber] = useState("")
    const [address , setAddress] = useState("")
    const [state , setState] = useState("")
    const [pincode , setPincode] = useState("")
    const [tenthPercentage , settenthPercentage] = useState("")
    const [twelvePercentage , settwelvePercentage] = useState("")
    const [diplomaCGPA , setDiplomaCGPA] = useState("")
    const [image , setImage] = useState("")
    const [tenthMarkSheet , settenthMarkSheet] = useState("")
    const [twelveMarkSheet , setTwelveMarkSheet] = useState("")
    const [diplomaMarkSheet , setDiplomaMarkSheet] = useState("")


    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Clicked sucessfully")
    }
  return (
    <div className="px-10 py-5">
      <div className="m-2 mb-4">
        <h1 className="text-4xl font-nunito font-extrabold text-slate-500">
          Admission Form
        </h1>
        <div className="w-52 bg-cyan-500 h-[1.5px] mt-2 rounded-lg text-center"></div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <InputField labelName={"Name"} fieldValue={name} onChangeHandler={setName}/>
        <InputField labelName={"Father's Name"} fieldValue={fathersName} onChangeHandler={setFathersName}/>
        <InputField labelName={"Mother's Name"} fieldValue={mothersName} onChangeHandler={setMothersName}/>
        <InputField labelName={"Guardian Name"} fieldValue={guardianName} onChangeHandler={setGuardianName}/>
        <InputField labelName={"Guardian Mobile Number"} inputType="number" fieldValue={guardianMobileNumber} onChangeHandler={setGuardianMobileNumber}/>
        <InputField labelName={"Mobile Number"} inputType="number" fieldValue={mobileNumber} onChangeHandler={setMobileNumber}/>
        <InputField labelName={"Address"} fieldValue={address} onChangeHandler={setAddress}/>
        <InputField labelName={"State"} fieldValue={state} onChangeHandler={setState}/>
        <InputField labelName={"Pincode"} inputType="number" fieldValue={pincode} onChangeHandler={setPincode}/>
        <InputField labelName={"10th%"} fieldValue={tenthPercentage} inputType="number"/>
        <InputField labelName={"12th%"} require={false}  fieldValue={twelvePercentage} onChangeHandler={settwelvePercentage}/>
        <InputField labelName={"Diploma CGPA"} require={false} inputType="number" fieldValue={diplomaCGPA} onChangeHandler={setDiplomaCGPA}/>
        <FileInputField labelName={"Image"} onChangeHandler={setImage}/>
        <FileInputField labelName={"10th Mark Sheet"} onChangeHandler={settenthMarkSheet}/>
        <FileInputField labelName={"12th Mark Sheet"} require={false} onChangeHandler={settenthMarkSheet}/>
        <FileInputField labelName={"Diploma Mark Sheet"} require={false} onChangeHandler={setDiplomaMarkSheet}/>


        <div className="col-span-3 text-center ">
            <input type="submit" value={"Apply"} className="px-5 py-2 rounded-lg bg-yellow-500 text-white  font-nunito font-bold cursor-pointer hover:scale-110 hover:bg-green-500 duration-700"  />
        </div>

      </form>
    </div>
  );
};

export default AdmissionForm;

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
