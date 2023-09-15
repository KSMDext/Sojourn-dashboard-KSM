import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAllLocations } from "../../store/features/location.slice";
import LocationsController from "../../controllers/locationsController";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
const gridLocationImage = (props) => (
  <div>
    <img className="h-20 md:ml-3" src={props.value} alt="location-item" />
  </div>
);

const CustomMenuCell = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const { row } = props;

  async function getAllLocations() {
    LocationsController.getAllLocations()
      .then((response) => {
        dispatch(setAllLocations(response?.data?.results ?? []));
      })
      .catch((error) => {
        toast.error(error.error, { position: "top-center" });
      });
  }

  async function handleDelete() {
    setIsDeleting(true);
    await LocationsController.deleteLocationById({ locationId: row.values.id })
      .then(async (respone) => {
        await getAllLocations();
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
            <Link to="/updatelocation"> Edit</Link>
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
    Header: "Location",
    accessor: "LocationImage",
    Cell: gridLocationImage,
  },
  {
    Header: "Location Address",
    accessor: "location_address",
  },
  {
    Header: "Description",
    accessor: "location_description",
  },
  {
    Header: "Total Cabins",
    accessor: "cabins.length",
  },
  {
    Header: "Available Cabins",
    accessor: "AvailableCabins",
  },
  {
    Header: "Booked Cabins",
    accessor: "BookedCabins",
  },
  {
    Header: "", // Column header
    accessor: "id", // This could be an identifier for the row data
    Cell: CustomMenuCell, // Use the custom cell renderer
    width: 50,
  },
];
