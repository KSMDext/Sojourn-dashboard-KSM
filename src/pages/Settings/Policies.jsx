import React from 'react'
import { Edit } from '../../components'
import { Link } from 'react-router-dom'

const Policies = () => {
  return (
    <div className="m-3 ">
      <div className="mx-[5px] mt-[10px] text-2xl mb-4">Policies</div>
      <div className="mb-4 bg-white p-4 pl-8 mx-6">
      <div className="info_name text-blue-900 font-display-latto text-xl italic">Reservation Policy</div>
        <div className="flex gap-2">
          <div className="mt-2 text-gray-500 mr-5 italic">
          <p>Your guests will be asked to accept<br/> these terms upon checkout.</p>
          </div>
          <div>
            <form>
              <div className=" font-bold text-gray-500">Title:</div>
              <input
              type="text"
              className="w-[850px] px-4 py-2 mb-4 border h-9 border-gray-300 rounded"
              placeholder="Reservation Policy"
              />
            </form>
            <div className=" font-bold text-gray-500">Enter Your Reservation Policy:</div>
            <Edit/>
          </div>
        </div>

      </div>
      <div className="mb-4 bg-white p-4 pl-8 mx-6">
      <div className="info_name text-blue-900 font-display-latto text-xl italic">Cancellation Policy</div>
        <div className="flex gap-2">
          <div className="mt-2 text-gray-500 mr-2 italic">
          <p>Your guests will be asked to accept<br/> these terms upon the cancellation of<br/> a cabin bookings.</p>
          </div>
          <div>
            <form>
              <div className=" font-bold text-gray-500">Title:</div>
              <input
              type="text"
              className="w-[850px] px-4 py-2 mb-4 border h-9 border-gray-300 rounded"
              placeholder="Cancellation Policy"
              />
            </form>
            <div className=" font-bold text-gray-500">Enter Your Cancellation Policy:</div>
            <Edit/>
          </div>
        </div>

      </div>
      <div className=" flex   flex-row-reverse gap-2">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/dashboard">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
      </div>
    
    </div>
  )
}

export default Policies