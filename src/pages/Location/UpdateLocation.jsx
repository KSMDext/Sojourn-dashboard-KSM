import React from 'react'
import {Link} from "react-router-dom"
import ImageUploader from '../../components/ImageUploader'

const UpdateLocation = () => {
  return (
    <div> 
    <p className="mx-[35px] mt-[20px] text-2xl font-medium	">UpdateLocation</p>
  <div 
   className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white  ">
    <form className="text-left grid lg:grid-cols-2  space-y-[40px] text-slate-500 mt-[20px]">
        <label className="w-[310px] h-[30px] text-[14px]">
          Location Name*
          <input 
          className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>

        <label 
        className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12"
        style={{marginTop: "0px"}}>
          Location Address*
          <input 
          className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded "
          type="text" />
        </label>

        <label 
          className="w-[310px] h-[30px] text-[14px]">
          Country*
          <input 
          className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>

        <label
        className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12">
          Description*
          <input 
          className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
          type="text" />
        </label>
        <select
          className="grid md:grid-cols-6 w-[210px] h-[37px] p-2 border-1 border-slate-200 rounded text-[14px]"
          name="Choose Location Manager">
          <option value="Manager1">Choose Location Manager</option>
          <option value="Manager1">Manager2</option>
          <option value="Manager1">Manager3</option>
      </select>
      <ImageUploader/>
       
    </form>
    
  </div>
  <div className="ml-[900px] mb-[20px] mt-[220px] flex align-bottom ">
  <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/location">Cancel</Link></button> 
  <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
  </div>
  
  </div>
  )
}

export default UpdateLocation