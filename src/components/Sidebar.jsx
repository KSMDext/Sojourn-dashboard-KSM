import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsPerson } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuHome } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";
import { useStateContext } from "../contexts/ContextProvider";
import * as RiIcons from "react-icons/ri";
import SubMenu from "./SubMenu";
import styled from "styled-components";

const SidebarWrap = styled.div`
  width: 100%;
`;

const links = [
  {
    links: [
      {
        name: "dashboard",
        icon: <LuLayoutDashboard className="text-white" />,
      },
      {
        name: "reservations",
        icon: <BiBookmark className="text-white" />,
      },
      {
        name: "location",
        icon: <HiOutlineLocationMarker className="text-white" />,
      },
      {
        name: "cabins",
        icon: <LuHome className="text-white" />,
      },
      {
        name: "staff",
        icon: <BsPerson className="text-white" />,
      },
      {
        name: "analytics",
        icon: <HiMenuAlt2 className="text-white" />,
      },
      {
        name: "feedback",
        icon: <BiComment className="text-white" />,
      },
    ],
  },
];

export const SidebarData = [
  {
    title: "Price Options",
    icon: <AiOutlineDollar className="text-white" />,
    iconClosed: <RiIcons.RiArrowDownSLine className="ml-2" />,
    iconOpened: <RiIcons.RiArrowUpSLine className="ml-2" />,

    subNav: [
      {
        title: "Seasonal Rule",
        path: "/priceoptions/seasonalrule",
      },
      {
        title: "Extra Charge",
        path: "/priceoptions/extracharge",
      },
      {
        title: "Coupons",
        path: "/priceoptions/coupons",
      },
      {
        title: "Packages",
        path: "/priceoptions/packages",
      },
    ],
  },
  {
    title: "Settings",
    icon: <FiSettings className="text-white" />,
    iconClosed: <RiIcons.RiArrowDownSLine className="ml-12" />,
    iconOpened: <RiIcons.RiArrowUpSLine className="ml-12" />,

    subNav: [
      {
        title: "General Settings",
        path: "/settings/generalsettings",
      },
      {
        title: "Policies",
        path: "/settings/policies",
      },
      {
        title: "Emails",
        path: "/settings/emails",
      },
      {
        title: "Extras",
        path: "/settings/extras",
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    // Api call to sign out goes here
    localStorage.removeItem("userAuthToken");
    localStorage.removeItem("refreshToken");
    navigate("/login", { replace: true });
  };

  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-5 pt-3 pb-3 rounded-md  text-gray-700 bg-zinc-700 text-md ";
  const normalLink =
    "flex items-center gap-5 pl-5 pt-3 pb-3 rounded-md text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-zinc-600 ";

  return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className=" items-center gap-5 ml-5 mt-5 tracking-tight"
            >
              <img
                src={require("./sojourn.png")}
                alt=""
                srcset=""
                width={"150px"}
                height={"100px"}
              />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className=" text-xl rounded-lg p-3 hover:bg-light-gray mt-4 block mx-1"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ml-3 mr-3">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400  mt-4 uppercase">{item.title}</p>
                {item.links.map((Link) => (
                  <NavLink
                    to={`/${Link.name}`}
                    key={Link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {Link.icon}
                    <span className="capitalize text-white">{Link.name}</span>
                  </NavLink>
                ))}

                <SidebarWrap>
                  {SidebarData.map((item, index) => {
                    return (
                      <SubMenu
                        item={item}
                        key={index}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      />
                    );
                  })}
                </SidebarWrap>
              </div>
            ))}
          </div>
          <div className="mt-40 border-t-2 border-black  relative">
            <div
              onClick={() => {
                signOut();
              }}
              className="mt-8 ml-5   fixed bottom-0 pr-5"
            >
              <NavLink
                to={`/`}
                key={Link.name}
                onClick={() => {}}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {<GoSignOut className="text-white" />}
                <span className="capitalize text-white">{"Sign Out"}</span>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
