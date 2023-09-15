import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  AddCabins,
  AddExtraCharge,
  AddLocation,
  AddReservations,
  AddSeasonalRule,
  AddStaff,
  Analytics,
  Cabins,
  CreatePackage,
  Dashboard,
  Emails,
  ExtraCharge,
  Extras,
  Feedback,
  GeneralSettings,
  Location,
  Packages,
  Policies,
  Reservations,
  SeasonalRule,
  Staff,
  UpdateCabins,
  UpdateExtraCharge,
  UpdateReservations,
  UpdateSeasonalRule,
  UpdateStaff,
  Coupons,
  AddCoupon
} from "../pages";
import UpdateLocation from "../pages/Location/UpdateLocation";
import ErrorPage from "../pages/ErrorPages/ErrorPage";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    //   ================= dashboard =================

    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },

    //  ==================== End Dashboard =========================

    // ================= other routes goes here ===================

    {
      path: "reservations",
      element: <Reservations />,
    },

    {
      path: "staff",
      children: [
        {
          path: "",
          element: <Staff />,
        },
        {
          path: "add",
          element: <AddStaff />,
        },
        {
          path: ":id",
          // view single staff detail
          element: "",
        },
      ],
    },

    {
      path: "addreservations",
      element: <AddReservations />,
    },
    {
      path: "updatereservations",
      element: <UpdateReservations />,
    },
    {
      path: "location",
      element: <Location />,
    },
    {
      path: "addlocation",
      element: <AddLocation />,
    },
    {
      path: "updatelocation",
      element: <UpdateLocation />,
    },
    {
      path: "cabins",
      element: <Cabins />,
    },
    {
      path: "addcabins",
      element: <AddCabins />,
    },
    {
      path: "updatecabins",
      element: <UpdateCabins />,
    },
    {
      path: "staff",
      element: <Staff />,
    },
    {
      path: "addstaff",
      element: <AddStaff />,
    },
    {
      path: "updatestaff",
      element: <UpdateStaff />,
    },
    {
      path: "analytics",
      element: <Analytics />,
    },
    {
      path: "feedback",
      element: <Feedback />,
    },
    {
      path: "priceoptions/seasonalrule",
      element: <SeasonalRule />,
    },
    {
      path: "addseasonalrule",
      element: <AddSeasonalRule />,
    },
    {
      path: "updateseasonalrule",
      element: <UpdateSeasonalRule />,
    },
    {
      path: "priceoptions/extracharge",
      element: <ExtraCharge />,
    },
    {
      path: "addextracharge",
      element: <AddExtraCharge />,
    },
    {
      path: "priceoptions/packages",
      element: <Packages />,
    },
    {
      path: "priceoptions/coupons",
      element: <Coupons />,
    },
    {
      path: "/addcoupons",
      element: <AddCoupon />,
    },
    {
      path: "createpackage",
      element: <CreatePackage />,
    },
    {
      path: "settings/generalsettings",
      element: <GeneralSettings />,
    },
    {
      path: "settings/emails",
      element: <Emails />,
    },
    {
      path: "settings/policies",
      element: <Policies />,
    },
    {
      path: "settings/extras",
      element: <Extras />,
    },
    {
      path: "updateextracharge",
      element: <UpdateExtraCharge />,
    },
    {
      path: "updateseasonalrule",
      element: <UpdateSeasonalRule />,
    },

    //  ======================== End Other routes =================

    // NB: Keep this as the last route
    // ========== 404 pages ====================

    {
      path: "page-not-found",
      element: <ErrorPage />,
    },

    //  =======================
  ],
};

export default MainRoutes;
