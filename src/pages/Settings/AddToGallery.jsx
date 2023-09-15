import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi'; // Import the close icon
import { IoListOutline } from 'react-icons/io5'; // Import the list icon
import ImageUploader from '../../components/ImageUploader';

const AddToGallery = () => {
  const [isFormVisible, setFormVisible] = useState(true); // Initial state is visible

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white relative">
      <div className="flex items-center mb-4">
        <IoListOutline
          className={`text-2xl ${isFormVisible ? 'text-gray-600' : 'text-gray-400'} mr-2`}
          onClick={toggleFormVisibility}
          style={{ cursor: 'pointer' }}
        />
        <div>
          <p className="text-2xl font-medium">Add To Gallery</p>
          <p className="border-b border-slate-200">Provide the details to update block</p>
        </div>
        {isFormVisible && (
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            onClick={toggleFormVisibility}
            style={{ cursor: 'pointer' }}
          >
            <HiOutlineX />
          </button>
        )}
      </div>
      {isFormVisible && (
        <div className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white">
          <form className="text-left grid lg:grid-cols-2 space-y-[40px] text-slate-500 mt-[20px]">
            <label className="w-[310px] h-[30px] text-[14px]">
              Name:
              <input
                className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
                type="text"
              />
            </label>
            <label
              className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12"
              style={{ marginTop: '0px' }}
            >
              Description:
              <input
                className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
                type="text"
              />
            </label>
          </form>
        </div>
      )}
      <div className="flex items-center mt-[20px] ml-[675px]">
        {isFormVisible && <ImageUploader />}
      </div>
      {isFormVisible && (
        <div className="flex flex-row-reverse gap-6 mt-4 mr-5">
          <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button">
            <Link to="/settings/extras">Cancel</Link>
          </button>
          <button className="bg-black rounded-lg text-white w-[98px] h-[32px] text-center" type="button">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToGallery;
