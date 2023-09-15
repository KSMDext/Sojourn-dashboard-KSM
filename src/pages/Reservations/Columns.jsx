import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { setAllReservationData } from "../../store/features/reservations.slice";
import toast from "react-hot-toast";
import ReservationsController from "../../controllers/reservationsController";

const gridPaymentStatus = (props) => {
  let buttonStyle = {
    color: props.value === "FULLY PAID" ? "green" : "red",
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      className="text-white py-1 px-2 capitalize text-md"
    >
      {props.value === "FULLY PAID" ? "PAID" : "UNPAID"}
    </button>
  );
};

const reservationGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10 items-center align-middle"
      src={props.cell.row.original.ReservationImage}
      alt="staff"
    />
    <div className="items-center align-middle mt-2">
      <p>{props.cell.row.original.ReservationName}</p>
    </div>
  </div>
);

const gridReservationStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p>{props.value}</p>
  </div>
);

const CustomMenuCell = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const { row } = props;

  async function getAllReservations() {
    ReservationsController.getAllReservations()
      .then((response) => {
        dispatch(setAllReservationData(response?.data?.results ?? []));
      })
      .catch((error) => {
        toast.error(error.error, { position: "top-center" });
      });
  }

  async function handleDelete() {
    setIsDeleting(true);
    await ReservationsController.deleteReservationById({
      reservationId: row.values.id,
    })
      .then(async (respone) => {
        await getAllReservations();
        toggleMenu();
        toast.success("Deleted successfully", { position: "top-center" });
        setIsDeleting(false);
      })
      .catch((error) => {
        setIsDeleting(false);
      });
  }

  return (
    <div className="relative">
      <button type="button" className="text-gray-600" onClick={toggleMenu}>
        <HiDotsVertical />
      </button>
      {menuOpen && (
        <div className=" absolute z-10 bg-white border rounded-md py-1 mt-1 right-0">
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
            disabled={isDeleting}
          >
            <Link to="/updatereservations"> Edit</Link>
          </button>
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-red-600"
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
    Header: "Name",
    accessor: "ReservationImage",
    Cell: reservationGridImage,
    width: 150,
  },
  {
    Header: "Phone",
    accessor: "guest.phone_number",
    width: 130,
  },
  {
    Header: "Email",
    accessor: "guest.email",
    width: 160,
  },
  {
    Header: "Check In",
    accessor: "check_in_date",
    width: 125,
  },
  {
    Header: "Check Out",
    accessor: "check_out_date",
    width: 125,
  },
  {
    Header: "Reservation Status",
    accessor: "Status",
    Cell: gridReservationStatus,
    width: 125,
  },
  {
    Header: "Payment",
    accessor: "payment_status",
    Cell: gridPaymentStatus,
    width: 100,
  },
  {
    Header: "",
    accessor: "id",
    Cell: CustomMenuCell,
    width: 100,
  },
];
