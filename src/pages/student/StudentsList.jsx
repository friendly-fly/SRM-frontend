import React from "react";
import { FaSearch } from "react-icons/fa";

const StudentsList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Clicked");
  };

  return (
    <>
      {/* heading section */}
      <div className="bg-gray-100 text-xl py-3 px-8 shadow-sm flex justify-between items-center ">
        <p className=" text-slate-700 font-bold uppercase">
          Students List CSE-2020 batch
        </p>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            className="pl-5 w-[400px] py-1 border-2 rounded-full rounded-r-none text-center"
            type="number"
            placeholder="Registration Number"
          />
          <button
            type="submit"
            className="py-2 -ml-1 px-3 bg-green-600 border-2 rounded-full rounded-l-none "
          >
            <FaSearch className="text-white" />
          </button>
        </form>
      </div>

      {/* studnets list section */}
      <div className="border py-3 mt-2">
        <div className="mb-6 p-1">
          {/* heading of the academic details */}
          <div className="grid grid-cols-10 text-center font-bold text-lg sticky top-0 bg-white">
            <p className="col-span-2 border py-2">Registration Number</p>
            <p className="border-r-2 border py-2">Roll Number</p>
            <p className="col-span-2 border py-2">Full Name</p>
            <p className="border-r-2 border py-2">Mobile Number</p>
            <p className="col-span-3 border-r-2 border py-2">Address</p>
            <p className="border-r-2 border py-2">Due</p>
          </div>

          {/* academic Data */}

          <div className="[&>*:nth-child(odd)]:bg-slate-100">
            <div className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:text-lg hover:font-bold">
              <p className="col-span-2 border py-2">1060012000837479</p>
              <p className="border py-2 ">01</p>
              <p className="col-span-2 border-r-2 border py-2">Anish Kumar</p>
              <p className="border-r-2 border py-2">7479863918</p>
              <p className="col-span-3 border-r-2 border py-2">
                Daulatpur Devariya, Hajipur, Vaishail, Bihar, 844102
              </p>
              <p className="border-r-2 border py-2">33000</p>
            </div>

            <div className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:text-lg hover:font-bold">
              <p className="col-span-2 border py-2">1060012000837479</p>
              <p className="border py-2 ">01</p>
              <p className="col-span-2 border-r-2 border py-2">Anish Kumar</p>
              <p className="border-r-2 border py-2">7479863918</p>
              <p className="col-span-3 border-r-2 border py-2">
                Daulatpur Devariya, Hajipur, Vaishail, Bihar, 844102
              </p>
              <p className="border-r-2 border py-2">33000</p>
            </div>

            <div className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:text-lg hover:font-bold">
              <p className="col-span-2 border py-2">1060012000837479</p>
              <p className="border py-2 ">01</p>
              <p className="col-span-2 border-r-2 border py-2">Anish Kumar</p>
              <p className="border-r-2 border py-2">7479863918</p>
              <p className="col-span-3 border-r-2 border py-2">
                Daulatpur Devariya, Hajipur, Vaishail, Bihar, 844102
              </p>
              <p className="border-r-2 border py-2">33000</p>
            </div>

            <div className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:text-lg hover:font-bold">
              <p className="col-span-2 border py-2">1060012000837479</p>
              <p className="border py-2 ">01</p>
              <p className="col-span-2 border-r-2 border py-2">Anish Kumar</p>
              <p className="border-r-2 border py-2">7479863918</p>
              <p className="col-span-3 border-r-2 border py-2">
                Daulatpur Devariya, Hajipur, Vaishail, Bihar, 844102
              </p>
              <p className="border-r-2 border py-2">33000</p>
            </div>

            <div className="grid grid-cols-10 text-center cursor-pointer hover:text-green-700 hover:text-lg hover:font-bold">
              <p className="col-span-2 border py-2">1060012000837479</p>
              <p className="border py-2 ">01</p>
              <p className="col-span-2 border-r-2 border py-2">Anish Kumar</p>
              <p className="border-r-2 border py-2">7479863918</p>
              <p className="col-span-3 border-r-2 border py-2">
                Daulatpur Devariya, Hajipur, Vaishail, Bihar, 844102
              </p>
              <p className="border-r-2 border py-2">33000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
