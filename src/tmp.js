{
 <Routes>
                <Route path="/login" element={<Signin />} />

                <Route path="*" element={<Protected />}>
                  <Route path="" element={<Navigate to="/dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />


                  <Route path="reservations" element={<Reservations />} />
                  <Route path="addreservations" element={<AddReservations />} />
                  <Route
                    path="updatereservations"
                    element={<UpdateReservations />}
                  />
                  <Route path="location" element={<Location />} />
                  <Route path="addlocation" element={<AddLocation />} />
                  <Route path="updatelocation" element={<UpdateLocation />} />
                  <Route path="cabins" element={<Cabins />} />
                  <Route path="addcabins" element={<AddCabins />} />
                  <Route path="updatecabins" element={<UpdateCabins />} />
                  <Route path="staff" element={<Staff />} />
                  <Route path="addstaff" element={<AddStaff />} />
                  <Route path="updatestaff" element={<UpdateStaff />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="feedback" element={<Feedback />} />
                  <Route
                    path="priceoptions/seasonalrule"
                    element={<SeasonalRule />}
                  />
                  <Route path="addseasonalrule" element={<AddSeasonalRule />} />
                  <Route
                    path="priceoptions/extracharge"
                    element={<ExtraCharge />}
                  />
                  <Route path="addextracharge" element={<AddExtraCharge />} />
                  <Route path="priceoptions/coupons" element={<Coupons />} />
                  <Route path="addcoupons" element={<AddCoupon />} />
                  <Route path="priceoptions/packages" element={<Packages />} />
                  <Route path="createpackage" element={<CreatePackage />} />
                  <Route
                    path="settings/generalsettings"
                    element={<GeneralSettings />}
                  />
                  <Route path="settings/emails" element={<Emails />} />
                  <Route path="settings/policies" element={<Policies />} />
                  <Route path="settings/extras" element={<Extras />} />
                  <Route path="addfaq" element={<AddFaq />} />
                  <Route path="addtestimonial" element={<AddTestimonial />} />
                  <Route path="addtogallery" element={<AddToGallery />} />
                  <Route path="updatecoupon" element={<UpdateCoupon />} />
                  <Route
                    path="updateextracharge"
                    element={<UpdateExtraCharge />}
                  />
                  <Route
                    path="updateseasonalrule"
                    element={<UpdateSeasonalRule />}
                  />
                  <Route path="test" element={<Test />} />
                </Route>
              </Routes> 
}

//               import React from "react";
// import { Outlet } from "react-router-dom";
// import Protected from "../hooks/protecteRoute";
// import { useStateContext } from "../contexts/ContextProvider";
// import { Navbar, Sidebar } from "../components";

// function MainLayout() {
//   const { activeMenu } = useStateContext();

//   return (
//     <div className="flex relative dark:bg-main-dark-bg">
//       {activeMenu ? (
//         <div className="w-60 sticky sm:h-[100vh] sidebar dark:bg-secondary-dark-bg bg-stone-900 ">
//           <Sidebar />
//         </div>
//       )

//       : (
//         <div className="w-0 dark:bg-secondary-dark-bg">
//           <Sidebar />
//         </div>
//       )}

//       <div
//         className={`${
//           activeMenu
//             ? "dark:bg-main-dark-bg  bg-zinc-200 w-full"
//             : "bg-zinc-200 dark:bg-main-dark-bg  w-full flex-2"
//         }
//             `}
//       >
//         <div className={`bg-main-bg dark:bg-main-dark-bg navbar w-full`}>
//           <Navbar />
//         </div>
//         <div className="w-full h-[90vh] overflow-y-scroll">
//           {/* outlet */}

//           <Protected>
//             <Outlet />
//           </Protected>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;

