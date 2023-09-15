import React from 'react'
import { Link} from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader';

const UpdateStaff = () => {
  return (
    <div>
    <p className="mx-[35px] mt-[20px] text-2xl font-medium	">Update Staff</p>
  <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white ">
    <form className="text-left grid lg:grid-cols-2 space-y-[30px] text-slate-500 mt-[20px]">
        <label className="w-[310px] h-[40px] text-[14px]">
          First Name*
          <input 
          className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>

        <label 
        className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
        style={{marginTop: "0px"}}>
          Last Name*
          <input 
          className="w-[400px] h-[32px] p-2 border-1  border-slate-200 rounded"
          type="text" />
        </label>

        <label 
          className="w-[310px] h-[40px] text-[14px]">
          Email*
          <input 
          className="w-[400px] h-[32px] p-2 border-1  border-slate-200 rounded"
          type="text" />
        </label>

        <label
        className="w-[310px] h-[40px] text-[14px]">
          Phone*
          <input 
          className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>
        <label
        className="w-[310px] h-[40px] text-[14px]">
          Address*
          <input 
          className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>
        <label
        className="w-[310px] h-[40px] text-[14px]">
          Work Location*
          <input 
          className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>
        <label
        className="w-[310px] h-[40px] text-[14px]">
          Country*
          <input 
          className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>

        <div className="flex">
          <div className="mr-3 text-[14px]">
            <label htmlFor="role" className="block">
              Role*
            </label>
            <input
              id="role"
              className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded"
              type="text"
            />
          </div>
          <select
            className="w-[200px] h-[30px]  border-1 border-slate-200 rounded text-[14px] mt-[20px]"
            name="staffType"
          >
            <option value="">Choose Staff Type</option>
            <option value="Staff1">Staff1</option>
            <option value="Staff2">Staff2</option>
          </select>

        </div>
        <div className=" ml-96">
          <div className="ml-64"><ImageUploader/></div>
        </div>
        
       
    </form>
    
  </div>
  <div className="ml-[890px] mb-[20px]">
  <button className="bg-white  mr-[10px]  rounded w-[98px] h-[32px] hover:bg-current  " type="button"><Link to="/staff" className="hover:text-white">Cancel</Link></button> 
  <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-current" type="button"><Link to="/staff" className="hover:text-black">Save</Link></button>
  </div>
  
  </div>
  )
}

export default UpdateStaff