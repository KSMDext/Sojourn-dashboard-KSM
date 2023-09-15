import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import LocationsController from "../../controllers/locationsController";

const AddLocation = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    location_name: "",
    location_address: "",
    country: "",
    description: "",
    locationType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationSubmit = async () => {
    setIsSubmitting(true);

    try {
      await LocationsController.createLocation(formData);
      setIsSubmitting(false);

      // Redirect to the locations page or do other necessary actions
      navigator("/locations", { replace: true });
    } catch (error) {
      // Handle errors if the location creation fails
      console.error(error);
      setIsSubmitting(false);
    }
  };

  // const { Locations } = useSelector((state) => state.location);

  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium">Add Location</p>
      <div className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white">
        <div className="text-left grid lg:grid-cols-2 space-y-[40px] text-slate-500 mt-[20px]">
          <label className="w-[310px] h-[40px] text-[14px]">
            Location Name*
            <input
              className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                formData.location_name === "" ? "border-red-500" : ""
              }`}
              type="text"
              name="location_name"
              value={formData.location_name}
              onChange={handleChange}
            />
          </label>

          <label
            className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
            style={{ marginTop: "0px" }}
          >
            Location Address*
            <input
              className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                formData.location_address === "" ? "border-red-500" : ""
              }`}
              type="text"
              name="location_address"
              value={formData.location_address}
              onChange={handleChange}
            />
          </label>

          <div className="flex-col flex">
            <span className="w-[310px] h-[40px] text-[14px]">Country*</span>
            <input
              className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <label className="w-[310px] h-[40px] text-[14px]">
            Description*
            <input
              className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                formData.description === "" ? "border-red-500" : ""
              }`}
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <div className="flex-col flex">
            <span className="w-[310px] h-[40px] text-[14px]">Location Type*</span>
            <input
              className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
              name="locationType"
              value={formData.locationType}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-6 mt-4 mr-5">
        <button
          className="bg-white rounded-lg mr-[10px] w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/locations">Cancel</Link>
        </button>
        <button
          className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center"
          type="button"
          onClick={handleLocationSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex justify-center">
              <p className="text-sm">Adding Location</p>
              <PulseLoader
                size={"0.6rem"}
                color="currentColor"
                className="ml-3 self-center"
              />
            </div>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </div>
  );
};

export default AddLocation;
