import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import EmployeesController from "../../controllers/employeesController";
import { PulseLoader } from "react-spinners";
import toast from "react-hot-toast";
import { setAllStaffData } from "../../store/features/staff.slice";
import { useDispatch } from "react-redux";
const gridStaffProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10 align-middle items-center ml-4"
      src={props.value}
      alt="staff"
    />
  </div>
);
const gridStaffCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.value}</span>
  </div>
);

const CustomMenuCell = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const { row } = props;

  async function getAllEmployees() {
    EmployeesController.getAllEmployees()
      .then((response) => {
        dispatch(setAllStaffData(response?.data ?? []));
      })
      .catch((error) => {
        toast.error(error.error, { position: "top-center" });
      });
  }

  async function handleDelete() {
    setIsDeleting(true);
    await EmployeesController.deleteEmployeeById({ employeeId: row.values.id })
      .then(async (respone) => {
        await getAllEmployees();
        toggleMenu();
        toast.success("Deleted successfully", { position: "top-center" });
        setIsDeleting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDeleting(false);
      });
  }

  return (
    <div className="relative">
      <button type="button" className="text-gray-600" onClick={toggleMenu}>
        <HiDotsVertical />
      </button>
      {menuOpen && (
        <div className=" absolute z-10 bg-white border rounded-md py-1 mt-1  right-0">
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
            disabled={isDeleting}
          >
            <Link to="/updatestaff"> Edit</Link>
          </button>
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-red-600"
            disabled={isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? (
              <div className="flex justify-center">
                <p className="text-sm">Deleting</p>
                <PulseLoader
                  size={"0.6rem"}
                  color="currentColor"
                  className="ml-3 self-center"
                />
              </div>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export const COLUMNS = [
  {
    Header: "Image",
    accessor: "image",
    Cell: gridStaffProfile,
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone_number",
  },
  {
    Header: "Address",
    accessor: "address",
    Cell: gridStaffCountry,
  },

  {
    Header: "",
    accessor: "id",
    Cell: CustomMenuCell,
    width: 100,
  },
];