import React from 'react'
import { Link } from 'react-router-dom'

const GeneralSettings = () => {
  return (
    <div class="p-5 bg-black-50">
      <div className="mx-[5px] mt-[10px] text-2xl mb-4">General Settings</div>
         <div className="w-1/8">
            <div className="mb-4 bg-white p-4">
    <form>
      <div className="info_name text-blue-900 font-bold font-display-latto">Business Info</div>
    <div className="flex gap-20">
    <div className="flex flex-col mr-8  text-slate-500 ml-40">
      <div className="mb-2">Property Name*</div>
      <input
      type="text"
      className="w-72 px-4 py-2 mb-4 border border-gray-300 rounded"
      placeholder="Sojourn cabins"
      />
      <div className="mb-2">Email Address*</div>
      <input
      type="text"
      className="w-72 px-6 py-2 border border-gray-300 rounded"
      placeholder="theteam@sojourngh.com"
      />
    </div>
    <div className="flex flex-col  text-slate-500">
      <div className="mb-2">Property Type*</div>
      <select
        className="w-72 px-4 py-2 mb-4 border border-gray-300 rounded  text-slate-500" 
        defaultValue="" 
      >
      <option value="" disabled hidden>
       Select a property type
        </option>
        <option value="vacation_rental">Vacation Rental</option>
        <option value="hotel">Hotel</option>
        <option value="guest_house">Guest House</option>
      </select>
      <div className="mb-2">Phone*</div>
      <input
        type="integers"
        className="w-72 px-4 py-2 border border-gray-300 rounded"
        placeholder="+44 72 8392018"
      />
    </div>
  </div>
</form>
 </div>
 </div>
<div className="w-1/8">
 <div className="mb-4 bg-white p-4">
  <form>
  <div className="">
  <div className="info_name text-blue-900 font-bold">Address</div>
  <div className="flex  mb-4">
    <div className="flex flex-col  text-slate-500 text-14 mr-6">
      City, State, Country*
      <input
      type="text"
      className="border rounded p-2 mb-2 text-gray-700 w-64" // Apply text color to the input
      placeholder="Anomabo, Central region, Ghana"
      />
      Street Address*
      <input
      type="text"
        className="border rounded p-2 mb-2 text-gray-700" // Apply text color to the input
        placeholder="5VCF+Q8"
      />
      Zip/Postal Code*
      <input
      type="text"
      className="border rounded p-2 mb-2 text-gray-700" // Apply text color to the input
      placeholder="Input 3"
      />
    </div>
    
    {/* Add the Google Map as an iframe */}
    <div className="border rounded overflow-hidden ml-10">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.472020101909!2d-1.1266588852656467!3d5.171908650496125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde057a668fbb1b%3A0x724f8f20e7e68e74!2sSojourn%20Cabins!5e0!3m2!1sen!2s!4v1631225516235!5m2!1sen!2s"
        width="600"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </div>
  </div>
</form>


  </div>
</div>
<div className="w-1/8">
          <div className="mb-4 bg-white p-4">
          <form>
  <div className="info_name text-blue-900 font-bold font-display-latto">Regional Settings</div>
  <div className="flex gap-48  mr-8  text-slate-500 ml-40">
    <div className="w-1/4">
      <div>
          Time Zone
        <input
          type="text"
          className="border rounded p-2 py-2 mb-2 w-72 col-sm-5  text-blue-900   "
          placeholder="(GMT+00:00)Europe/London "
        />
      </div>
      <div>
      Your Weekend Night Are:
      </div>
     
    </div>
    <div className="w-1/4 flex flex-col ">
      Measurement Units
      <div className="relative inline-block">
        <select
          className=" border rounded items-center p-2 px-2 mb-2 py-2 w-72  pr-10" // Position the dropdown button
          
        >
          <option value="square_feet">Square Feet</option>
          <option value="square_meters">Square Meters</option>
          <option value="acres">Acres</option>
          {/* Add more options if needed */}
        </select>
      </div>
      {/* Add margin to create space */}
      <div className="relative inline-block">
        Primary English
        <select
          className="border rounded p-2 px-2 mb-2 py-2 w-72 pr-10" // Position the dropdown button
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more options if needed */}
        </select>
      </div>
    </div>
  </div>
</form>
 </div>
</div>
     <div className="w-1/8">
  <div className="mb-4 bg-white p-3">
  <div className="info_name  text-blue-900 font-bold">Length of stay</div>
  <form> 
  <div className="">
    <div className="flex gap-6  mr-5  text-slate-500 ml-40">
      <div className="flex flex-col mr-5  text-xs  text-slate-500 ">
        <div className="mb-2"></div>
        Check-In time
        <input
          type="text"
          className="w-[220px] px-2 py-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col mr-5  text-xs  text-slate-500">
        <div className="mb-2"></div>
        Check-Out Time
        <input
          type="text"
          className="w-[220px] px-2 py-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col  text-xs  text-slate-500">
        <div className="mb-2 only:"></div>
        Min. Nights
        <input
          type="text"
          className="w-20 px-2 py-3 g-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col text-xs  text-slate-500">
        <div className="mb-2"></div>
        Max. Nights
        <input
          type="text"
          className="w-20 px-4 py-3 g-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col text-xs  text-slate-500">
        <div className="mb-2"></div>
        Max. Nights
        <input
          type="text"
          className="w-20 px-4 py-3 g-4 border border-gray-300 rounded"
        />
      </div>
    </div>
  </div>
   </form>

  </div>
</div> 
<div className=" flex   flex-row-reverse gap-3">
    <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/dashboard">Cancel</Link></button> 
    <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
    </div>
 </div>
  )
}

export default GeneralSettings