import React from "react";
import { PiStudentBold } from "react-icons/pi";
const BatchByInformation = () => {
  return (
    <div className="border border-slate-400 flex-1 rounded-md p-2">
      <h4 className="font-bold text-slate-500">Batch: {"2024"}</h4>
      <div className="mt-1 text-slate-600 font-semibold grid grid-cols-2">
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          CSE: {45}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          ECE: {61}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          CS: {23}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          EE: {52}
        </p>
      </div>
    </div>
  );
};

export default BatchByInformation;
