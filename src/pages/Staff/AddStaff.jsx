import { React, useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import ImageUploader from "../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

// import Select from "react-select";
import { useFormik } from "formik";
import EmployeesController from "../../controllers/employeesController";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import LocationsController from "../../controllers/locationsController";
import { setAllLocations } from "../../store/features/location.slice";

const AddStaff = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null);

  const { allLocations } = useSelector((state) => state.location);

  async function getWorkLocations() {
    await LocationsController.getAllLocations()
      .then((response) => {
        dispatch(setAllLocations(response.data?.results));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      country: "",
      address: "",
      date_joined: "",
      work_location: "",
      staff_type: "",
      role: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      phone_number: Yup.string().required("Phone number is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string().required("Address is required"),
      date_joined: Yup.string().required("Starting date is required"),
      work_location: Yup.string().required("Work location is required"),
      staff_type: Yup.string().required("Staff type is required"),
      role: Yup.string().required("Role type is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleUserSubmit(values, setSubmitting);
    },
  });

  const handleUserSubmit = async (values, setSubmitting) => {
    const data = { ...values };

    try {
      const formData = new FormData();

      // Loop through the keys of the employeeData object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // Append each key-value pair to the formData
          formData.append(key, data[key]);
        }
      }

      formData.append("image", photo);

      await EmployeesController.addEmployee({ employeeData: formData }).then(
        (response) => {
          if (response.success) {
            setSubmitting(false);

            toast.success("Staff Added Successfully!", {
              position: "top-center",
            });

            navigator("/staff", { replace: true });
          } else {
            // handle error here

            toast.error(response.error, {
              position: "top-center",
            });

            setSubmitting(false);
          }
        }
      );
    } catch (error) {
      setSubmitting(false);
      // handle error
      toast.error(error, {
        position: "top-center",
      });
    }
  };

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "gh", label: "Ghana" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    // Add more countries
  ];
  const roleOptions = [
    { value: "", label: "Select Role" },
    { value: "ADMIN", label: "ADMIN" },
    // Add more ROLES
    // This is not the best approach. There should be an endpoint to promote users to
    // specific roles intead of submitting role/role-ids
  ];
  const staffOptions = [
    { value: "", label: "Select staff type" },
    { value: "FRONT DESK", label: "FRONT DESK" },
    { value: "HOUSEKEEPING", label: "HOUSEKEEPING" },
    { value: "MAINTENANCE", label: "MAINTENANCE" },
    { value: "SECURITY", label: "SECURITY" },
    { value: "FOOD SERVICE", label: "FOOD SERVICE" },
  ];

  useEffect(() => {
    getWorkLocations();
  }, []);

  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium	">Add Staff</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white ">
          <div className="text-left grid lg:grid-cols-2 space-y-[30px] text-slate-500 mt-[20px]">
            <label className="w-[310px] h-[40px] text-[14px]">
              First Name*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.first_name && formik.touched.first_name
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.first_name && formik.touched.first_name && (
                <p className="text-red-500 text-sm">
                  {formik.errors.first_name}
                </p>
              )}
            </label>

            <label
              className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
              style={{ marginTop: "0px" }}
            >
              Last Name*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.last_name && formik.touched.last_name
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.last_name && formik.touched.last_name && (
                <p className="text-red-500 text-sm">
                  {formik.errors.last_name}
                </p>
              )}
            </label>

            <label className="w-[310px] h-[40px] text-[14px]">
              Email*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </label>

            <label className="w-[310px] h-[40px] text-[14px]">
              Phone*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.phone_number && formik.touched.phone_number
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone_number && formik.touched.phone_number && (
                <p className="text-red-500 text-sm">
                  {formik.errors.phone_number}
                </p>
              )}
            </label>
            <label className="w-[310px] h-[40px] text-[14px]">
              Address*
              <input
                className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                  formik.errors.address && formik.touched.address
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.address && formik.touched.address && (
                <p className="text-red-500 text-sm">{formik.errors.address}</p>
              )}
            </label>
            <label className="w-[310px] h-[40px] text-[14px]">
              Work Location*
              <select
                className={`w-[400px] h-[32px] p-1 pl-[0rem] ${
                  formik.errors.work_location && formik.touched.work_location
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                name="work_location"
                value={formik.values.work_location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {[
                  { id: "", location_address: "Select work location" },
                  ...allLocations,
                ].map((data) => {
                  return (
                    <option key={data.id} value={data.id}>
                      {data.location_address}
                    </option>
                  );
                })}
              </select>
              {formik.errors.work_location && formik.touched.work_location && (
                <p className="text-red-500 text-sm">
                  {formik.errors.work_location}
                </p>
              )}
            </label>
            <div>
              <span className="w-[310px] h-[40px] text-[14px]"> Country*</span>
              <select
                className="w-[400px] h-[32px] p-1 pl-[0rem]"
                type="text"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {countryOptions.map((data) => {
                  return (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                  );
                })}
              </select>

              {formik.errors.country && formik.touched.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>
            <div className="flex">
              <div className="mr-3 text-[14px]">
                <label htmlFor="role" className="block">
                  Role*
                </label>
                {/* <input
                  id="role"
                  className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded"
                  type="text"
                  onChange={(e) => setRole(e.target.value)}
                  required
                /> */}

                <select
                  className="w-[400px] h-[32px] p-1 pl-[0rem]"
                  type="text"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {roleOptions.map((data) => {
                    return (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    );
                  })}
                </select>
                {formik.errors.role && formik.touched.role && (
                  <p className="text-red-500 text-sm">{formik.errors.role}</p>
                )}
              </div>
              <select
                className="w-[400px] h-[32px] p-1 pl-[0rem]"
                name="staff_type"
                value={formik.values.staff_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Staff Type"
              >
                {staffOptions.map((data) => {
                  return (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                  );
                })}
              </select>
              {formik.errors.staff_type && formik.touched.staff_type && (
                <p className="text-red-500 text-sm">
                  {formik.errors.staff_type}
                </p>
              )}
            </div>

            <div className="flex">
              <div className="mr-3 text-[14px]">
                <label htmlFor="date_joined" className="block">
                  Start date*
                </label>
                <input
                  className={`w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded ${
                    formik.errors.date_joined && formik.touched.date_joined
                      ? "border-red-500"
                      : ""
                  }`}
                  type="date"
                  name="date_joined"
                  value={formik.values.date_joined}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.date_joined && formik.touched.date_joined && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.date_joined}
                  </p>
                )}
              </div>
              <div className=" ml-96">
                <div>
                  <ImageUploader
                    selectedImage={photo}
                    setSelectedImage={setPhoto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
          <button
            className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]"
            type="button"
            disabled={formik.isSubmitting}
          >
            <Link to="/staff">Cancel</Link>
          </button>
          <button
            className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <div className="flex justify-center">
                <p className="text-sm">Adding Employee</p>
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

export default AddStaff;