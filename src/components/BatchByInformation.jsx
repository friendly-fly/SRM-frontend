import React from "react";
import { PiStudentBold } from "react-icons/pi";
const BatchByInformation = ({ data }) => {
  return (
    <div className="border border-slate-400 flex-1 rounded-md p-2">
      <h4 className="font-bold text-slate-500">Batch: {data?.year}</h4>
      <div className="mt-1 text-slate-600 font-semibold grid grid-cols-2">
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          CSE: {data?.departments?.CSE}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          ECE: {data?.departments?.ECE}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          CS: {data?.departments?.CS}
        </p>
        <p className="flex  items-center gap-1">
          {" "}
          <PiStudentBold />
          EE: {data?.departments?.EE}
        </p>
      </div>
    </div>
  );
};

export default BatchByInformation;
