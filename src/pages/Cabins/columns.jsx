import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CabinsController from "../../controllers/cabinsController";
import toast from "react-hot-toast";
import { setAllCabins } from "../../store/features/cabins.slice";
import { PulseLoader } from "react-spinners";

const cabinGridImage = (props) => (
  <div className="image flex gap-10">
    <img className="rounded-xl h-20 md:ml-3" src={props.value} alt="cabin" />
  </div>
);

const amenities = (props) => {
  return (
    <>
      {props.value.map((amenity, index) => {
        return (
          <>
            {index !== props.value.length - 1 ? (
              <span>{amenity.name}, </span>
            ) : (
              <span>{amenity.name} </span>
            )}
          </>
        );
      })}
    </>
  );
};

const gridCabinStatus = (props) => {
  let buttonStyle = {
    color: !props.value ? "green" : "red",
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      className="text-white py-1 px-2 capitalize text-md"
    >
      {props.value ? "Booked" : "Available"}
    </button>
  );
};

const CustomMenuCell = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const { row } = props;

  async function getAllCabins() {
    CabinsController.getAllCabins()
      .then((response) => {
        dispatch(setAllCabins(response?.data?.results ?? []));
      })
      .catch((error) => {
        toast.error(error.error, { position: "top-center" });
      });
  }

  async function handleDelete() {
    setIsDeleting(true);
    await CabinsController.deleteCabinById({ cabinId: row.values.id })
      .then(async (respone) => {
        await getAllCabins();
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
    Header: "",
    accessor: "CabinImage",
    Cell: cabinGridImage,
  },
  {
    Header: "Cabin Name",
    accessor: "name",
  },
  {
    Header: "Facilities",
    accessor: "amenities",
    Cell: amenities,
  },
  {
    Header: "Extra Charge",
    accessor: "",
  },
  {
    Header: "Rate",
    accessor: "price_rate.monthly_price",
  },
  {
    Header: "Status",
    accessor: "featured",
    Cell: gridCabinStatus,
  },
  {
    Header: "",
    accessor: "id",
    Cell: CustomMenuCell,
    width: 100,
  },
];
