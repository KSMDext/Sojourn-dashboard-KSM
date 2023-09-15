import React, { useState, useRef } from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateReservations = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const today = new Date();
  const checkInDatePickerRef = useRef(null);
  const checkOutDatePickerRef = useRef(null);

  const openCheckInCalendar = () => {
    checkInDatePickerRef.current.setOpen(true);
  };

  const openCheckOutCalendar = () => {
    checkOutDatePickerRef.current.setOpen(true);
  };

  const [selectedCabinType, setSelectedCabinType] = useState(""); // Selected cabin type
  const [selectedCabinName, setSelectedCabinName] = useState(""); // Selected cabin name

  const cabinTypes = ["Cabin 1", "Cabin  2", "Cabin  3"]; // Replace with your cabin types
  const cabinNames = ["Cabin 1", "Cabin  2", "Cabin  3"]; // Replace with your cabin names

  return (
    <>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium">
        Update Reservations
      </p>

      {/* Booking Details Section */}
      <div className="grid grid-cols-3 bg-white mx-[35px] mt-[5px] px-[40px] py-[30px] rounded">
        <div>
          <span className="text-xl text-sky-500">Check-in</span>
          <div className="flex items-center mt-[20px]">
            <SlCalender onClick={openCheckInCalendar} />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd/MM/yyyy"
              className="hidden"
              maxDate={today} // Set maximum date as today (present or past)
              ref={checkInDatePickerRef}
            />
            <input
              type="text"
              className="ml-2 text-[14px] text-blue-600 cursor-pointer"
              onClick={openCheckInCalendar}
              value={checkInDate ? checkInDate.toLocaleDateString() : ""}
              readOnly
            />
          </div>
          <label className="w-[310px] h-[30px] text-[14px] mt-[50px] ">
            Adults
            <input
              type="text"
              className="w-[70px] h-[28px] p-2 border-1 border-slate-200 rounded ml-2 mt-2"
            />
          </label>
          <div className="flex flex-col items-left mt-[20px]">
            <div className="flex items-center">
              <span className="w-[310px] h-[30px] text-[14px]">
                Cabin type*
              </span>
            </div>
            <select
              className="w-[300px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]"
              value={selectedCabinType}
              onChange={(e) => setSelectedCabinType(e.target.value)}
            >
              <option value="">Cabin Type</option>
              {cabinTypes.map((cabin) => (
                <option key={cabin} value={cabin}>
                  {cabin}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <span className="text-xl text-sky-500">Check-out</span>
          <div className="flex items-center mt-[20px]">
            <SlCalender onClick={openCheckOutCalendar} />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd/MM/yyyy"
              className="hidden"
              minDate={
                checkInDate ? new Date(checkInDate.getTime() + 86400000) : today
              } // Set minimum date as the day after check-in date or today
              ref={checkOutDatePickerRef}
            />
            <input
              type="text"
              className="ml-2 text-[14px] text-blue-600 cursor-pointer"
              onClick={openCheckOutCalendar}
              value={checkOutDate ? checkOutDate.toLocaleDateString() : ""}
              readOnly
            />
          </div>
          <label className="w-[310px] h-[30px] text-[14px] mt-[50px] ">
            Kids
            <input
              type="text"
              className="w-[70px] h-[28px] p-2 border-1 border-slate-200 rounded ml-2 mt-2"
            />
          </label>
          <div className="flex flex-col items-left mt-[20px]">
            <div className="flex items-center">
              <span className="w-[310px] h-[30px] text-[14px]">
                Cabin Name*
              </span>
            </div>
            <select
              className="w-[300px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]"
              value={selectedCabinName}
              onChange={(e) => setSelectedCabinName(e.target.value)}
            >
              <option value="">Cabin Name</option>
              {cabinNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Guest Details Section */}
      <div className=" grid grid-cols-2  bg-white mx-[35px] px-[35px] py-[35px] mt-[20px] rounded">
        <div>
          <p className="text-xl  text-sky-700	">Guest Details </p>
          <div className="ml-[100px] mt-4">
            <div className="flex flex-col items-left ">
              <span className="w-[310px] h-[20px] text-[14px] mb-1">
                First Name*
              </span>
              <input
                className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]"
                type="text"
              />
            </div>
            <div className="flex flex-col items-left">
              <span className="w-[310px] h-[20px] text-[14px] mb-1">
                Email*
              </span>
              <input
                className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]"
                type="email"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 ml-10 ">
          <div className="flex flex-col items-left">
            <span className="w-[310px] h-[20px] text-[14px] mb-1">
              Last Name*
            </span>
            <input
              className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]"
              type="text"
            />
          </div>
          <div className="flex flex-col items-left">
            <span className="w-[310px] h-[20px] text-[14px] mb-1">Phone*</span>
          </div>
          <input className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded text-[14px]" />
        </div>
      </div>
      <div className=" grid grid-rows-3  bg-white  mx-[35px] mt-[20px] px-[35px] py-[35px] rounded">
        <div className="mt-[10px]">
          <p className=" text-xl  text-sky-700	">Price Details</p>
          <table className="table-fixed border-separate  border-spacing-x-28 border-b-2 ">
            <thead>
              <tr>
                <th className="border-b-0 ">Service Name</th>
                <th className="border-b-0">Quantity</th>
                <th className="border-b-0">Price</th>
                <th className="border-b-0">Tax</th>
                <th className="border-b-0">Amount</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className=" mx-[35px] mt-[20px]">
          <input className=" w-[200px]" type="text" />
          <input className="text-center w-[80px]" type="number" />
          <input className="text-center" type="text" />
          <input className="text-center" type="text" />
          <input className="text-center" type="text" />

          <div className="border-separate  border-b-2 "></div>
        </div>
        <div className="ml-[800px] mr-[30px]">
          <span className="mr-2">Total: </span>
          <input
            type="text"
            className="border-none focus:ring-0 "
            placeholder="$"
          />
          <div className="flex gap-2 border-b border-black"></div>

          <input type="checkbox" />
          <span className="text-xs text-lime-500 italic">Fully Paid</span>
        </div>
      </div>
      <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button
          className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/reservations">Cancel</Link>
        </button>
        <button
          className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center"
          type="button"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default UpdateReservations;
