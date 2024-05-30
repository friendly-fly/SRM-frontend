import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCloudUploadAlt, FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import { importStudentDetails } from "../../utils/api";
import Loading from "../../components/Loading";

const ImportStudentsDetailsUsingCSV = () => {
  const inputFileRef = useRef(null);
  const [csvFile, setCSVFile] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadCSVFileData = async () => {
    try {
      setLoading(true);
      const response = await importStudentDetails(csvFile);
      if (response.status) {
        toast.success("Data imported sucessfully...");
        setCSVFile(null);
      }
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <h1 className="text-4xl font-nunito font-extrabold text-slate-500 m-3 text-center my-5">
        Import Students Details Using CSV File
      </h1>

      <div className="flex justify-center my-40">
        <div className="flex flex-col justify-center items-center  p-10 shadow-xl rounded-3xl">
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
