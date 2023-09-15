import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PulseLoader } from "react-spinners";
import LocationsController from "../../controllers/locationsController";

const AddLocation = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      location_name: "",
      location_address: "",
      country: "",
      description: "",
      locationType: "",
    },
    validationSchema: Yup.object({
      location_name: Yup.string().required("Location Name is required"),
      location_address: Yup.string().required("Location Address is required"),
      country: Yup.string().required("Country is required"),
      description: Yup.string().required("Description is required"),
      locationType: Yup.string().required("Location Type is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleLocationSubmit(values, setSubmitting);
    },
  });

  const handleLocationSubmit = async (values, setSubmitting) => {
    // Send the location data to your server for creation
    // Example: You can use the LocationsController to make an API request

    try {
      await LocationsController.createLocation(values);
      setSubmitting(false);

      // Redirect to the locations page or do other necessary actions
      navigator("/locations", { replace: true });
    } catch (error) {
      // Handle errors if the location creation fails
      console.error(error);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium">Add Location</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white">
          <div className="text-left grid lg:grid-cols-2 space-y-[40px] text-slate-500 mt-[20px]">
            <label className="w-[310px] h-[40px] text-[14px]">
              Location Name*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.location_name && formik.touched.location_name
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="location_name"
                value={formik.values.location_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.location_name && formik.touched.location_name && (
                <p className="text-red-500 text-sm">
                  {formik.errors.location_name}
                </p>
              )}
            </label>

            <label
              className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
              style={{ marginTop: "0px" }}
            >
              Location Address*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.location_address &&
                  formik.touched.location_address
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="location_address"
                value={formik.values.location_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.location_address &&
                formik.touched.location_address && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.location_address}
                  </p>
                )}
            </label>

            <div className="flex-col flex">
              <span className="w-[310px] h-[40px] text-[14px]">Country*</span>
              <input
                className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
                type="text"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.country && formik.touched.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>

            <label className="w-[310px] h-[40px] text-[14px]">
              Description*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.description && formik.touched.description
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <p className="text-red-500 text-sm">
                  {formik.errors.description}
                </p>
              )}
            </label>

            <div className="flex-col flex">
              <span className="w-[310px] h-[40px] text-[14px]">Location Type*</span>
              <input
                className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
                type="text"
                name="locationType"
                value={formik.values.locationType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.locationType && formik.touched.locationType && (
                <p className="text-red-500 text-sm">
                  {formik.errors.locationType}
                </p>
              )}
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
            type="submit"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
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
      </form>
    </div>
  );
};

export default AddLocation;
