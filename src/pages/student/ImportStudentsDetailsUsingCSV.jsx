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
            <svg
              className="hover:scale-110 transition-all duration-1000"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="8.192"
              >
                <path
                  d="M736.68 435.86a173.773 173.773 0 0 1 172.042 172.038c0.578 44.907-18.093 87.822-48.461 119.698-32.761 34.387-76.991 51.744-123.581 52.343-68.202 0.876-68.284 106.718 0 105.841 152.654-1.964 275.918-125.229 277.883-277.883 1.964-152.664-128.188-275.956-277.883-277.879-68.284-0.878-68.202 104.965 0 105.842zM285.262 779.307A173.773 173.773 0 0 1 113.22 607.266c-0.577-44.909 18.09-87.823 48.461-119.705 32.759-34.386 76.988-51.737 123.58-52.337 68.2-0.877 68.284-106.721 0-105.842C132.605 331.344 9.341 454.607 7.379 607.266 5.417 759.929 135.565 883.225 285.262 885.148c68.284 0.876 68.2-104.965 0-105.841z"
                  fill="#4A5699"
                ></path>
                <path
                  d="M339.68 384.204a173.762 173.762 0 0 1 172.037-172.038c44.908-0.577 87.822 18.092 119.698 48.462 34.388 32.759 51.743 76.985 52.343 123.576 0.877 68.199 106.72 68.284 105.843 0-1.964-152.653-125.231-275.917-277.884-277.879-152.664-1.962-275.954 128.182-277.878 277.879-0.88 68.284 104.964 68.199 105.841 0z"
                  fill="#C45FA0"
                ></path>
                <path
                  d="M545.039 473.078c16.542 16.542 16.542 43.356 0 59.896l-122.89 122.895c-16.542 16.538-43.357 16.538-59.896 0-16.542-16.546-16.542-43.362 0-59.899l122.892-122.892c16.537-16.542 43.355-16.542 59.894 0z"
                  fill="#F39A2B"
                ></path>
                <path
                  d="M485.17 473.078c16.537-16.539 43.354-16.539 59.892 0l122.896 122.896c16.538 16.533 16.538 43.354 0 59.896-16.541 16.538-43.361 16.538-59.898 0L485.17 532.979c-16.547-16.543-16.547-43.359 0-59.901z"
                  fill="#F39A2B"
                ></path>
                <path
                  d="M514.045 634.097c23.972 0 43.402 19.433 43.402 43.399v178.086c0 23.968-19.432 43.398-43.402 43.398-23.964 0-43.396-19.432-43.396-43.398V677.496c0.001-23.968 19.433-43.399 43.396-43.399z"
                  fill="#E5594F"
                ></path>
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M736.68 435.86a173.773 173.773 0 0 1 172.042 172.038c0.578 44.907-18.093 87.822-48.461 119.698-32.761 34.387-76.991 51.744-123.581 52.343-68.202 0.876-68.284 106.718 0 105.841 152.654-1.964 275.918-125.229 277.883-277.883 1.964-152.664-128.188-275.956-277.883-277.879-68.284-0.878-68.202 104.965 0 105.842zM285.262 779.307A173.773 173.773 0 0 1 113.22 607.266c-0.577-44.909 18.09-87.823 48.461-119.705 32.759-34.386 76.988-51.737 123.58-52.337 68.2-0.877 68.284-106.721 0-105.842C132.605 331.344 9.341 454.607 7.379 607.266 5.417 759.929 135.565 883.225 285.262 885.148c68.284 0.876 68.2-104.965 0-105.841z"
                  fill="#4A5699"
                ></path>
                <path
                  d="M339.68 384.204a173.762 173.762 0 0 1 172.037-172.038c44.908-0.577 87.822 18.092 119.698 48.462 34.388 32.759 51.743 76.985 52.343 123.576 0.877 68.199 106.72 68.284 105.843 0-1.964-152.653-125.231-275.917-277.884-277.879-152.664-1.962-275.954 128.182-277.878 277.879-0.88 68.284 104.964 68.199 105.841 0z"
                  fill="#C45FA0"
                ></path>
                <path
                  d="M545.039 473.078c16.542 16.542 16.542 43.356 0 59.896l-122.89 122.895c-16.542 16.538-43.357 16.538-59.896 0-16.542-16.546-16.542-43.362 0-59.899l122.892-122.892c16.537-16.542 43.355-16.542 59.894 0z"
                  fill="#F39A2B"
                ></path>
                <path
                  d="M485.17 473.078c16.537-16.539 43.354-16.539 59.892 0l122.896 122.896c16.538 16.533 16.538 43.354 0 59.896-16.541 16.538-43.361 16.538-59.898 0L485.17 532.979c-16.547-16.543-16.547-43.359 0-59.901z"
                  fill="#F39A2B"
                ></path>
                <path
                  d="M514.045 634.097c23.972 0 43.402 19.433 43.402 43.399v178.086c0 23.968-19.432 43.398-43.402 43.398-23.964 0-43.396-19.432-43.396-43.398V677.496c0.001-23.968 19.433-43.399 43.396-43.399z"
                  fill="#E5594F"
                ></path>
              </g>
            </svg>
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
