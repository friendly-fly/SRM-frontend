import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCloudUploadAlt, FaUpload } from "react-icons/fa";
import Papa from "papaparse";

const ImportStudentsDetailsUsingCSV = () => {
  const inputFileRef = useRef(null);
  const [csvFile, setCSVFile] = useState("");

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  console.log(data);
  const getDataFromCSVFile = () => {
    if (csvFile) {
      Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setColumns(result.meta.fields);
          setData(result.data);
        },
      });
    }
  };

  const uploadCSVFileData = () => {
    getDataFromCSVFile();
  };
  return (
    <div>
      <h1 className="text-4xl font-nunito font-extrabold text-slate-500 m-3">
        Import Students Details Using CSV File
      </h1>

      <div className="flex justify-center mt-20">
        <div className="flex flex-col justify-center">
          <div
            className="w-32 h-32 rounded-lg border-white border flex-col flex justify-center items-center cursor-pointer"
            onClick={() => inputFileRef.current.click()}
          >
            <FaCloudUploadAlt size={500} />
            <input
              type="file"
              accept=".csv"
              ref={inputFileRef}
              onChangeCapture={(e) => setCSVFile(e.target.files[0])}
              className="hidden"
            />
          </div>

          <button
            className={`${
              csvFile ? "bg-green-700 text-white" : "border"
            } px-3 py-1 rounded-md font-dmsans hover:bg-green-800 hover:text-white m-5 text-lg font-semibold`}
            onClick={uploadCSVFileData}
          >
            {csvFile ? csvFile?.name?.slice(0, 13) : "Upload"}{" "}
            <FaUpload className="inline ml-1" />
          </button>
        </div>
      </div>
    </div>

    // <CsvImporter />
  );
};

export default ImportStudentsDetailsUsingCSV;
