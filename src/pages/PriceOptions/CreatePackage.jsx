import React from "react";
import { Link } from "react-router-dom";

const CreatePackage = () => {
  return (
    <div>
      <div className="ml-6 text-lg">CreatePackage</div>
      <div className="h-[300px] pt-[10px] mt-[40px] m-[35px] bg-white pl-5">
        <form className="flex justify-between text-slate-500 mt-[20px]">
          <div className=" space-y-[40px] my-4 mx-20">
            <div className="flex flex-col">
              <label className="w-[300px] h-[40px] text-[14px]">
                Package Name*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="text"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="w-[250px] h-[40px] text-[14px]">
                Start date*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="date"
                />
              </label>
            </div>

            <div className="flex flex-col">
              <label className="w-[250px] h-[40px] text-[14px]">
                End date*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="date"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 w-[600px]">
            <div className="flex flex-col">
              <label className="w-[150px] h-[30px] text-[14px]">
                Choose Location
                <select className="border rounded py-2 w-64">
                  <option value="All_location">All Locations</option>
                  <option value="Location_1">Location 1</option>
                  <option value="Location 2">Location 2</option>
                  <option value="Location 3">Location 3</option>
                  {/* Add more options if needed */}
                </select>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="w-[150px] h-[30px] text-[14px]">
                Choose Cabin
                <select className="border rounded py-2 w-64">
                  <option value="All_Cabin">All Cabins</option>
                  <option value="Cabin_1">Cabin 1</option>
                  <option value="Cabin 2">Cabin 2</option>
                  <option value="Cabin 3">Cabin 3</option>
                  {/* Add more options if needed */}
                </select>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="bg-white p-[10px] flex h-[300px] pt-[10px] mt-[40px] m-[35px]">
          <p className="text-xl font-bold text-sky-700">Add-Ons</p>
          <div className="flex gap-[400px]">
            <div className="pt-[20px] my-8">
              <p className="italic text-md  text-sky-700">Extra Charges</p>
              <div className="mb-2 flex items-center text-[14px]">
                <input
                  className=" border-1 border-slate-200 w-[23px] h-[19px]"
                  type="checkbox"
                />
                <span className="pl-[5px] ">Massage</span>
              </div>
              <div className="mb-2 flex items-center text-[14px]">
                <input
                  className=" border-1 border-slate-200 w-[23px] h-[19px]"
                  type="checkbox"
                />
                <span className="pl-[5px] ">Splash pool</span>
              </div>
              <div className="mb-2 flex items-center my-2 text-[14px]">
                <input
                  className=" border-1 border-slate-200 w-[23px] h-[19px]"
                  type="checkbox"
                />
                <span className="pl-[5px] ">Chef</span>
              </div>
              <div className="mb-2 flex items-center text-[14px]">
                <input
                  className=" border-1 border-slate-200 w-[23px] h-[19px]"
                  type="checkbox"
                />
                <span className="pl-[5px] ">Tourism</span>
              </div>
              <span className="italics text-sm  text-sky-700">+More Extra Charges</span>
            </div>

            <div className="mt-[15px]">
              <p className="italics text-md  text-sky-700 text-center">Length of stay</p>
              <div className=" flex-col my-2 gap-[40px]">
                <div className="flex gap-[20px]">
                  <div className="flex flex-col">
                    <span className="text-sm">Min Nights*</span>
                    <input type="number" className="border rounded h-[35px] border-slate-300" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm">Max Nights*</span>
                    <input type="number" className="border rounded  h-[35px] border-slate-300" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm">Price*</span>
                  <input
                    type="text"
                    placeholder="$"
                    className="border rounded h-[35px] border-slate-300 w-[11.5rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex   flex-row-reverse gap-6">
        <button
          className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/dashboard">Cancel</Link>
        </button>
        <button
          className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatePackage;
