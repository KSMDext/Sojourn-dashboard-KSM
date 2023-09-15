import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { PulseLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthController from "../../controllers/authController";

const SignIn = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
   
    onSubmit: async (values, { setSubmitting }) => {
      // handle submssion here
      // console.log(values);

      // login user here
      await AuthController.loginUser(values).then((response) => {
        if (response.success) {
          // TODO: dispatch user data here
          // data will be in response.data
          // dispatch(setUserProfile(response.data));
          setSubmitting(false);
          navigator("/dashboard", { replace: true });
        } else {
          // handle error here

          toast.error(response.error, {
            position: "top-center",
          });

          setSubmitting(false);
        }
      });
    },
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100">
        <img src={logo} alt="Logo" className="w-44 h-22 mb-4" />
        <div className="p-4 w-5/6 lg:w-3/4 xl:w-2/3 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-5xl font-bold mb-2 text-center font-lato">
              Welcome back
            </h2>
            <h3 className="text-lg text-gray-500 mb-4 text-center font-lato">
              Sign into your account
            </h3>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-lato">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`border border-gray-300 bg-white px-2 py-1 w-full rounded-lg font-lato  ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-lato">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`border border-gray-300 bg-white px-2 py-1 w-full rounded-lg font-lato ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="font-lato">
                Remember me
              </label>
            </div>

            <button
              className={`bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 w-full font-lato  ${
                formik.isSubmitting ? "bg-gray-400" : ""
              }`}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <div className="flex justify-center">
                  <p className="text-sm">Loading</p>
                  <PulseLoader
                    size={"0.4rem"}
                    color="currentColor"
                    className="ml-3 self-center"
                  />
                </div>
              ) : (
                <p className="text-sm">Sign in</p>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
