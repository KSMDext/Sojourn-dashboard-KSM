import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';

const analyticsImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10 items-center align-middle"
      src={props.cell.row.original.image} 
      alt="staff"
    />
    <div className="items-center align-middle mt-2">
      <p>{props.cell.row.original.name}</p> 
    </div>
  </div>
);


const CustomMenuCell = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    return (
      <div className="relative">
        <button
          type="button"
          className="text-gray-600"
          onClick={toggleMenu}
        >
          <HiDotsVertical />
        </button>
        {menuOpen && (
          <div className=" absolute z-10 bg-white border rounded-md py-1 mt-1  right-0">
            <button
              type="button"
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
            >
             <Link to="/reservation"> Edit</Link> 
            </button>
            <button
              type="button"
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
};

export const COLUMNS =[
   
    {
        Header:'Name',
        accessor: 'name',
        Cell:analyticsImage
    },
    {
        Header:'Country',
        accessor:'country'
    },
    {
        Header:'Email',
        accessor: 'email'
    },
    {
        Header:'Phone',
        accessor: 'phone'
    },
    {
        Header:'Total Bookings',
        accessor: 'totalBooking',
        
    },
    {
        Header: '', 
        accessor: 'id', 
        Cell: CustomMenuCell, 
        width: 100,
      },
]