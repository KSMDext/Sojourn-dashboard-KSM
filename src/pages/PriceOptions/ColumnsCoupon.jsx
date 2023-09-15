import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';

const CouponTypeCell = (props) => {
  return (<div><p>{props.value}</p></div>);
};
const CouponCodeCell = (props) => {
  return (<div><p>{props.value}</p></div>);
};
const StartDateCell = (props) => {
  return (<div><p>{props.value}</p></div>);
};
const ExpiryDateCell = (props) => {
  return (<div><p>{props.value}</p></div>);
};
const DiscountCell = (props) => {
  return (<div><p>{props.value}%</p></div>);
};
const UsageCell = (props) => {
  return (<div><p>{props.value}/100</p></div>);
};

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
             <Link to="/updatecoupon"> Edit</Link> 
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

export const COLUMNS = [
  {
    Header: 'Coupon ID',
    accessor: 'coupon_name',
    Cell: CouponTypeCell,
  },
  {
    Header: 'Coupon Code',
    accessor: 'coupon_code',
    Cell: CouponCodeCell,
  },
  {
    Header: 'Start Date',
    accessor: 'start_date',
    Cell: StartDateCell,
  },
  {
    Header: 'Expiry Date',
    accessor: 'expiry_date',
    Cell: ExpiryDateCell,
  },
  {
    Header: 'Discount',
    accessor: 'discount_percentage',
    Cell: DiscountCell,
  },
  {
    Header: 'Usage',
    accessor: 'usage_limit',
    Cell: UsageCell,
  },
  {
    Header: '', 
    accessor: 'id', 
    Cell: CustomMenuCell, 
    width: 100,
  },
];