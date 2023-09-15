import React from 'react'
import { Link } from 'react-router-dom';
import {CiCircleAlert} from "react-icons/ci";

const UpdateSeasonalRule = () => {
  return (
    <div>
      <p className="ml-4 mt-4 text-lg">Add Seasonal Rules</p>
      <div className="mb-4 bg-white p-[2rem] mt-4 ml-4 mr-6 pb-[0rem] text-slate-500">
      <div className="flex gap-[31.125rem]">
        <div className="mb-2 w-[200px]" >
          <div>
        <label htmlFor="role" className="block">
                Name*
        </label>
              <input type= "text" className="w-[500px] h-[30px] p-2 border-1 border-slate-200 rounded"/>
        </div>
        
            <div className="mr-3 text-[14px]">
              <label htmlFor="role" className="block">
                Name your season*
              </label>
              <input
                type="text"
                className="w-[500px] h-[35px] p-2 border-1 border-slate-200 rounded"
              />
            </div>

            <div className="flex my-3">
              <div className="mr-3 text-[14px]">
                <label htmlFor="role" className="block">
                  Start date*
                </label>
                <input
                  type="date"
                  className="w-[242px] h-[35px] p-2 border-1 border-slate-200 rounded uppercase"
                />
              </div>
              <div className="mr-3 text-[14px]">
                <label htmlFor="role" className="block text-sm">
                  Expiry date*
                </label>
                <input
                  type="date"
                  className="w-[242px] h-[35px] p-2 border-1 border-slate-200 rounded text-sm uppercase"
                />
              </div>
            </div>
          </div>
          <div className=" mr-[100px] mb-[100px] my-3">
            <div className="mr-3 ml-8 text-[14px]">
              <label htmlFor="role" className="block text-sm">
                Min Nights *
              </label>
              <input
                type="date"
                className="w-[200px] h-[35px] p-2 border-1 border-slate-200 rounded uppercase"
              />
            </div>

            <div className="mr-3 ml-8 my-3 text-[14px]">
              <label htmlFor="role" className="block">
                Max Nights*
              </label>
              <input
                type="date"
                className="w-[200px] h-[35px] p-2 border-1 border-slate-200 rounded uppercase"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40.5rem]">
        <div className="ml-[15px]">
          <label
            htmlFor="cabinSelect"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose Location:
          </label>
          <select id="cabinSelect" className="w-[300px] h-[40px]">
            <option value="" disabled hidden>
              Choose Cabin
            </option>
            <option>Cabin 1</option>
            <option>Cabin 2</option>
            <option>Cabin 3</option>
            <option>Cabin 4</option>
            <option>Cabin 5</option>
            {/* Add more editable options here */}
          </select>
        </div>

        <div className="ml-4">
          <option value="" disabled hidden>
            Choose Cabin
          </option>
          <select className="w-[300px] h-[40px] mt-2 rounded">
            <option>Location 1</option>
            <option>Location 2</option>
            <option>Location 3</option>
            <option>Location 4</option>
            <option>Location 5</option>
          </select>
        </div>
      </div>
      <div className="mb-4 bg-white p-4 mt-4 ml-4 mr-4 h-[200px]">
        <div className="flex">
          <div className="mx-4">
            <Link to="/your-image-route">
              <img src={require("../../assets/images/image.png")} alt="" />
            </Link>
          </div>
          <div className="flex flex-col">
           <span>Cabin 1</span> 
           <span>Charge per room| 1 unit(s)</span>
          </div>
        </div>
        <div className="flex justify-between my-4 mx-auto">
          <div className="flex flex-col mr-8 text-xs text-slate-500">
            <div className="mb-2 flex items-center">
              <label htmlFor="input1" className="mb-0">
                Weekday
              </label>
            </div>
            <input
              type="text"
              className="w-[200px] py-[0.36rem] mb-4 border border-gray-300 rounded text-left text-[16px]"
              placeholder="$"
            />
          </div>

          <div className="flex flex-col mr-8 text-xs text-slate-500">
            <div className="mb-2 flex items-center">
              <label htmlFor="input1" className="mb-0">
                Weekend
              </label>
            </div>
            <input
              type="text"
              className="w-[200px] py-[0.36rem] mb-4 border border-gray-300 rounded text-left text-[16px]"
              placeholder="$"
            />
          </div>

          <div className="flex flex-col mr-8 text-xs text-slate-500">
            <div className="mb-2 flex items-center">
              <label htmlFor="input1" className="mb-0">
                Weekly
              </label>
              <CiCircleAlert className="w-[20px] h-[20px] text-sky-500 mr-2" />
            </div>
            <input
              type="text"
              className="w-[200px] py-[0.36rem] mb-4 border border-gray-300 rounded text-left text-[16px]"
              placeholder="$"
            />
          </div>

          <div className="flex flex-col mr-8 text-xs text-slate-500">
            <div className="mb-2 flex items-center">
              <label htmlFor="input1" className="">
                Monthly
              </label>
              <CiCircleAlert className="w-[20px] h-[20px] text-sky-500 mr-2" />
            </div>
            <input
              type="text"
              className="w-[200px] py-[0.36rem] mb-4 border border-gray-300 rounded text-left text-[16px]"
              placeholder="$"
            />
          </div>

          <div className="flex flex-col mr-8 text-xs text-slate-500">
            <div className="mb-2 flex items-center">
              <label htmlFor="input5" className="">
                Extra Adult
              </label>
              <CiCircleAlert className="w-[20px] h-[20px] text-sky-500 mr-2" />
            </div>
            <input
              type="text"
              className="w-[200px] py-[0.36rem] mb-4 border border-gray-300 rounded text-left text-[16px]"
              placeholder="$"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row-reverse gap-6 mt-4 mr-5 mb-2">
        <button
          className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/priceoptions/extracharge">Cancel</Link>
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

export default UpdateSeasonalRule;
