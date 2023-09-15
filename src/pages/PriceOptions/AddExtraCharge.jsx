import React from 'react'
import { Link } from 'react-router-dom';
import {CiCircleAlert} from "react-icons/ci";

const AddExtraCharge = () => {
  return (
    <div>
      <p className="mx-[30px] mt-[20px] text-4xl font-semibold">Add Extra Charges</p>

    <div className="grid grid-rows-3 bg-white p-4 m-[30px]">
{/* Row 1 */}
      <div className="flex">
      <div className="flex flex-col mt-[20px]">
          <div className="flex items-center">
            <span>Set Charge Type</span>
            <CiCircleAlert className="w-[20px] h-[20px] text-sky-500"/>
          </div>
          <div>
            <select className="w-[598px] h-[30px] border-1 border-slate-400 rounded-md mt-2">
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mt-[20px] ml-[100px]">
          <div className="flex items-center">
            <span>Set Charge Type</span>
            <CiCircleAlert className="w-[20px] h-[20px] text-sky-500"/>
          </div>
          <div>
            <select className="w-[384px] h-[30px] border-1 border-slate-400 rounded-md mt-2 ">
              <option>charge type 1</option>
              <option>charge type 2</option>
              <option>charge type 3</option>
            </select>
          </div>
        </div>
    </div>

{/* Row 2 */}
      <div>
        <div className="flex">
          <div className="flex flex-col mt-[20px]">
            <div className="flex items-center">
              <span>Add Charge Per</span>
              <CiCircleAlert className="w-[20px] h-[20px] text-sky-500"/>
            </div>
            <input 
              className="w-[228px] h-[30px] p-2 border-1 border-slate-400 rounded-md mt-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-[20px] ml-[140px]">
            <div className="flex items-center">
              <span>Set Price </span>
            </div>
            <div>
            <input 
              className="w-[228px] h-[30px] p-2 border-1 border-slate-400 rounded-md mt-2"
              type="text"
            />
            </div>

          </div>

          <div className="flex flex-col mt-[50px] ml-[105px] items-center"> 
            <div className="flex items-center">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <span className="ml-2">Non-refundable</span>
              <CiCircleAlert className="w-[20px] h-[20px] text-sky-500"/>
            </div>
          </div>
        </div>

          
      </div>
{/* Row 3 */}
        <div>
          <div className="flex">
          <div className="flex flex-col mt-[20px]">
              <div className="flex items-center">
                <span> Location</span>
              </div>
              <div>
                <select className="w-[300px] h-[30px] border-1 border-slate-400 rounded-md mt-2">
                  <option>Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-[20px] ml-[70px]">
              <div className="flex items-center">
                <span>Set Charge Type</span>
              </div>
              <div>
                <select className="w-[707px] h-[30px] border-1 border-slate-400 rounded-md mt-2">
                  <option>charge type 1</option>
                  <option>charge type 2</option>
                  <option>charge type 3</option>
                </select>
              </div>
            </div>
          </div>

          
        </div>

      </div>
      <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/priceoptions/extracharge">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
    </div>
    </div>
  )
}

export default AddExtraCharge