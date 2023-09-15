import { React, useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import ImageUploader from "../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";

const AddLocation = ({ history }) => {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "gh", label: "Ghana" },
    { value: "ca", label: "Canada" },
    // Add more countries
  ];

  const dispatch = useDispatch();
  const [location_name, setlocation_name] = useState("");
  const [location_address, setlocation_address] = useState("");
  // const [locationImage, setLocationImage] = useState("")
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [locationType, setLocationType] = useState("");
  // const [date_joined, setDateJoined] = useState('');

  const handleSelect = (selectedOptions) => {
    setCountry(selectedOptions.label);
  };

  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = {
      location_name,
      location_address,
      country,
      description,
      locationType,
    };
    console.log(locationData);
  };

  const { Locations } = useSelector((state) => state.location);

  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium	">Add Location</p>
      <div className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white  ">
        <form
          onSubmit={handleSubmit}
          className="text-left grid lg:grid-cols-2  space-y-[40px] text-slate-500 mt-[20px]"
        >
          <label className="w-[310px] h-[30px] text-[14px]">
            Location Name*
            <input
              className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
              onChange={(e) => setlocation_name(e.target.value)}
              required
            />
          </label>

          <label
            className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12"
            style={{ marginTop: "0px" }}
          >
            Location Address*
            <input
              className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded "
              type="text"
              onChange={(e) => setlocation_address(e.target.value)}
              required
            />
          </label>

          <div>
            <span className="w-[310px] h-[40px] text-[14px]"> Country*</span>
            <Select
              className="w-[400px] h-[32px] p-1 pl-[0rem]"
              type="text"
              // value={country?.value}
              options={countryOptions}
              onChange={handleSelect}
              required
            />
          </div>

          <label className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12">
            Description*
            <input
              className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <select
            className="grid md:grid-cols-6 w-[210px] h-[37px] p-2 border-1 border-slate-200 rounded text-[14px]"
            name="locationType"
            onChange={(e) => setLocationType(e.target.value)}
            required
          >
            <option value="Manager1">Choose Location Manager</option>
            <option value="Manager1">Manager2</option>
            <option value="Manager1">Manager3</option>
          </select>
          <div className="ml-34">
            <ImageUploader />
          </div>
        </form>
      </div>
      <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button
          className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/location">Cancel</Link>
        </button>
        <button
          className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center"
          type="submit"
          onClick={handleSubmit}
          required
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddLocation;
