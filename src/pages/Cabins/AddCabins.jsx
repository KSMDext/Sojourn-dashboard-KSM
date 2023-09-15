import React from "react";
import { Link } from "react-router-dom";
import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import ImageUploader from "../../components/ImageUploader";

const AddCabins = () => {
  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium">Add Cabins</p>

      {/* Cabin Details */}
      <div className="grid grid-cols-2 gap-[200px] p-8 mt-[20px] mx-[35px] bg-white rounded  ">
        <div className="grid grid-cols-2 ">
          <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700	">
            Cabin Details
          </p>
          <div>
            <form>
              <div className="grid grid-rows-2">
                <div className="flex flex-col items-left">
                  <div className="flex items-center text-[14px]">
                    <span>Name this Cabin*</span>
                  </div>
                  <input
                    className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded "
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-2  mt-2">
                  <div className="flex flex-col items-left text-[14px]">
                    <div className="flex items-center">
                      <span>Max Guest</span>
                      <CiCircleAlert className="mr-1" />
                    </div>
                    <input
                      className="w-[108px] h-[30px] p-2 border-1 border-slate-200 rounded "
                      type="number"
                    />
                  </div>

                  <div className="flex flex-col items-left">
                    <div className="flex items-center text-[14px]">
                      <span>Max Kids</span>
                      <CiCircleAlert className="mr-1" />
                    </div>
                    <input
                      className="w-[108px] h-[30px] p-2 border-1 border-slate-200 rounded "
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div>
            <form>
              <div className="grid grid-rows-2 ">
                <div className="flex flex-col items-left">
                  <div className="flex items-center text-[14px]">
                    <span>Units</span>
                    <CiCircleAlert className="mr-1" />
                  </div>
                  <input
                    className="w-[127px] h-[32px] p-2 border-1 border-slate-200 rounded"
                    type="number"
                  />
                </div>
                <div>
                  <div className="flex flex-col items-left mt-1">
                    <div className="flex items-center text-[14px]">
                      <span>Room Size</span>
                      <CiCircleAlert className="mr-1" />
                    </div>
                    <input
                      className="w-[253px] h-[32px] p-2 border-1 border-slate-200 rounded"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* BED */}
      <div className="grid grid-cols-2 gap-[200px] p-8 mt-[20px]  mx-[35px] bg-white rounded">
        <div>
          <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700">
            Beds
          </p>
          <div className="grid grid-cols-2 gap-[100px] w-[700px]">
            <form>
              <div className="grid grid-rows-2 pt-[20px]">
                <div className="flex flex-col items-left text-[14px]">
                  <div className="flex items-center text-[14px]">
                    <span>Bed type</span>
                  </div>
                  <select className="w-[334px] h-[32px]  border-1 border-slate-200 rounded mt-2 text-[14px] mb-1">
                    <option value="">Choose bed type</option>
                  </select>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col items-left">
                    <div className="flex items-center text-[14px]"></div>
                    <select className="w-[334px] h-[32px]  border-1  border-slate-200 rounded mt-2 text-[14px]">
                      <option value="">Choose bed type</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <form>
              <div className="flex flex-col items-left text-[14px] mb-1">
                <span className="mt-[20px] mb-[5px]">Number</span>

                <input
                  type="number"
                  className="w-[127px] h-[30px] p-2 border-1  border-slate-200 rounded text-[14px] mb-1"
                />
                <input
                  type="number"
                  className="w-[127px] h-[30px] p-2 border-1  border-slate-200 rounded mt-2"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="border-l-2 ">
          <div className="ml-6 ">
            <form>
              {/* <div className="grid grid-rows-2"> */}
              <div className="grid grid-cols-2 ">
                <div>
                  <div className="flex flex-col items-left ">
                    <div className="flex items-center text-[14px]">
                      <span className="text-xl font-bold text-sky-700">
                        Amenities
                      </span>
                    </div>
                  </div>

                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200 w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px] ">Air conditioning</span>
                  </div>
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px]">Minibar</span>
                  </div>
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px] "
                      type="checkbox"
                    />
                    <span className="pl-[5px]">WorkSpace</span>
                  </div>
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px]">Internet</span>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px]">Shower</span>
                  </div>
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px]">Towel</span>
                  </div>
                  <div className="mb-2 flex items-center text-[14px]">
                    <input
                      className=" border-1 border-slate-200	w-[23px] h-[19px]"
                      type="checkbox"
                    />
                    <span className="pl-[5px]">Safe</span>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>

      {/* Photo Section */}
      <div className="  grid grid-cols-2 p-6 mt-[20px]  mx-[35px] bg-white rounded">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-xl font-bold text-sky-700">Photo</p>
            <div className=" mt-44 ml-44">
              <ImageUploader />
            </div>
          </div>
        </div>
        {/* Description Section */}
        <div className="grid grid-rows-2 border-l-2 text-[14px]">
          <div className="ml-6">
            <p className="text-xl font-bold text-sky-700">Description</p>
            <label>
              <p>Description*</p>
              <textarea className="w-[444px] h-[98px] p-2 border-1 border-slate-200 rounded"></textarea>
            </label>
          </div>

          <div className="flex flex-col items-left ml-6">
            <div className="flex items-center">
              <span>Location*</span>
            </div>
            <select className="w-[444px] h-[39px]  border-1 border-slate-200 rounded mt-2">
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      {/* Price Section */}
      <div className=" pt-[10px] grid grid-cols-3 p-8 mt-[20px]  mx-[35px] bg-white rounded text-[14px]">
        <div>
          <p className="text-xl font-bold text-sky-700">Price</p>
          <div className="flex flex-col items-left">
            <div className="flex items-center">
              <span>Rate Type</span>
              <CiCircleAlert className="mr-1" />
            </div>
            <select className="w-[330px] h-[32px]  border-1 border-slate-200 rounded mt-2">
              <option value=""></option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="text-sky-500 text-xs inline-flex">
              More pricing options
              <RiArrowDropDownLine className="ml-1 h-[20px] w-[30px] self-center" />
            </p>
          </div>
        </div>

        <div className="mt-[30px]">
          <label className="flex flex-col w-[310px]">
            <span className="flex items-center">
              Weekday Price
              <CiCircleAlert className="ml-1" />
            </span>
            <input
              className="w-[330px] h-[32px] p-2 border-1 border-slate-200 rounded mt-2"
              type="text"
            />
          </label>
        </div>

        <div className="mt-[30px]">
          <label className="flex flex-col w-[310px]">
            <span className="flex items-center">
              Weekend Price
              <CiCircleAlert className="ml-1" />
            </span>
            <input
              className="w-[330px] h-[32px] p-2 border-1 border-slate-200 rounded mt-2"
              type="text"
            />
          </label>
        </div>
      </div>
      <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button
          className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/cabins">Cancel</Link>
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

export default AddCabins;
