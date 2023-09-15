import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddReservations = () => {
  const [selectedCabinName, setSelectedCabinName] = useState(""); 
  const[priceChange,setPriceChange] = useState(0)
  const [couponCode, setCouponCode] = useState("");
  const cabinNames = ["Cabin 1", "Cabin 2", "Cabin 3"]; 

  const handlePriceChange = (e) =>{
      e.preventDefault()
      setPriceChange(e.target.value)
  }

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };
  return (
    <div>
      <div className="flex px-4">
        <div className="w-full mr-2">
          <div className="ml-6 mt-4 font-display-bold text-3xl">
            Add Reservation
          </div>
          <div className="grid grid-cols-3 w-full bg-white mt-[5px] px-[40px] py-[30px] pb-[5rem] rounded">
          <p className="text-xl  text-sky-700">Booking Details</p>

            <div>
            
              <span className="text-lg text-sky-500">Check-in</span>
              <div className="flex items-center mt-[20px]">
                <input
                  type="Date"
                  className=" text-[14px] p-1 border-1 rounded cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <label className="w-[310px] h-[30px] text-[14px] mt-[10px] ">
                  Adults*
                  <input
                    type="text"
                    className="w-[70px] h-[28px] p-2 border-1 border-slate-200 rounded mt-2"
                  />
                </label>
                <label className="w-[280px] h-[30px]  ">
                  kids*
                  <input
                    type="text"
                    className="w-[70px] h-[28px] p-2 border-1  border-slate-200 rounded ml-2 mt-2"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <span className="text-lg text-sky-500">Check-out</span>
              <div className="flex items-center mt-[20px]">
                <input
                  type="date"
                  className=" text-[14px] p-1 border-1 rounded cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-left mt-[20px]">
                <div className="flex items-center">
                  <span className="w-[310px] h-[30px] text-[14px]">
                    Cabin Name*
                  </span>
                </div>
                <select
                  className="w-[150px] h-[32px]  border-1 border-slate-200 rounded text-[14px]"
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
          <div className="grid grid-cols-2 w-full bg-white px-[35px] py-[35px] pb-[4rem] mt-4 rounded">
            <div className="flex flex-col">
              <p className="text-xl text-sky-700">Guests</p>
              <div className="flex-col flex ml-[5rem]">
                <span>No. of Guests</span>
                <input type="number" className="w-[6.25rem] border border-slate-300 text-center" />
              </div>
            </div>

            <div className="flex flex-col justify-end items-end pt-[10rem]">
              <button type="button" className="bg-black text-white w-[8rem] h-[2rem] rounded hover:bg-slate-300 hover:text-black">+ Add Guest</button>
            </div>
          </div>

        </div>
        <div className="flex flex-col h-[580px] mt-[58px] items-right bg-white w-[580px] ml-auto">
          <p className="ml-6 mt-2 text-xl mb-0">Add Extra Charges*</p>
          <div className="flex flex-col items-left">
              <div className="flex flex-col items-center">
              <div className="w-[500px] p-2 border-1 border-slate-200 rounded text-[14px] text-left flex items-center justify-between">
                <div>
                  <div className="text-2xl text-blue-900">Outdoor Movie</div>
                </div>
                <input
                  className="w-[50px] h-[32px] border-1 text-center"
                  type="number"
                  onChange={handlePriceChange}
                />
                <div className="text-2xl text-center">${priceChange}</div>
                
              </div>
            </div>
          </div>
          <div className="flex flex-col items-left">
            <span className="w-[310px] h-[20px] text-[14px] mb-1"></span>
            <input
              className="w-[500px] h-[50px] ml-6 mr-3 p-2 border-1 border-slate-200 rounded text-[14px]"
              type="email"
            />
          </div>
          <div className="flex flex-col items-left">
            <span className="w-[310px] h-[20px] text-[14px] mb-1"></span>
            <input
              className="w-[500px] h-[50px] ml-6 mr-3 p-2 border-1 border-slate-200 rounded text-[14px]"
              type="email"
            />
          </div>
          <div className="flex flex-col items-left">
            <span className="w-[310px] h-[20px] text-[14px] mb-1"></span>
            <input
              className="w-[500px] h-[50px] ml-6 mr-3 p-2 border-1 border-slate-200 rounded text-[14px]"
              type="email"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 bg-white mx-[25px] mt-[20px] px-[35px]  rounded">
        <div className="mt-[2rem]">
          <p className="text-xl  text-sky-700">Price Details</p>
          <table className="table-fixed border-separate  border-spacing-x-28 border-b-2 ">
            <thead>
              <tr>
                <th className="border-b-0 text-[1.2rem] pl-[0rem] text-left w-[13rem]">Service Name</th>
                <th className="border-b-0 text-[1.2rem] text-left pl-[0rem]">Quantity</th>
                <th className="border-b-0 text-[1.2rem] text-left pl-[0rem]">Price</th>
                <th className="border-b-0 text-[1.2rem] text-left pl-[0rem]">Tax</th>
                <th className="border-b-0 text-[1.2rem] text-left pl-[0rem]">Amount</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="h-[4rem]">
          <input className="text-center w-[200px]   ml-[5rem] mr-[4.5rem]" type="text" />
          <input className="text-center w-[140px] ml-[3rem] mr-[2rem]" type="number" />
          <input className="text-center mr-[2rem]" type="text" />
          <input className="text-center mr-[1.5rem]" type="text" />
          <input className="text-center" type="text" />
          <div className="border-separate border-b-2 "></div>
        </div>
        {/* Last section */}
        <div className=" mr-[30px] mb-[6rem] flex gap-[15rem]">
          {/* Coupon Code Input Section */}
          <div className="">
              <input
                className="w-[450px] h-[40px] p-2 border-1 border-slate-200 text-[14px]"
                type="text"
                placeholder="Enter your Coupon code"
                value={couponCode}
                onChange={handleCouponCodeChange}
              />
              <button
                className="text-blue-500 border-1 hover:bg-blue-500 hover:text-white hover:duration-700 hover:border-slate-200 font-semibold border-slate-200 bg-white w-[100px] h-[40px]"
                type="button"
              >
                APPLY
              </button>
          </div>
          {/* Total section  */}
          <div>
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
      </div>

      <div className="flex flex-row-reverse gap-6 mt-4 mr-5">
        <button
          className="bg-white rounded-lg mr-[10px] w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/reservations">Cancel</Link>
        </button>
        <button
          className="bg-black rounded-lg text-white w-[98px] h-[32px] text-center"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddReservations;