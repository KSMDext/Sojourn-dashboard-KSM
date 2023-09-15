import React, { useEffect, useMemo, useState } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';
import axios from 'axios';
import { COLUMNS } from './Columns';
import './table.css';
import { FiArrowUp,  FiArrowDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DougnutChart from '../components/DougnutChart';
import BarGraph from '../components/BarGraph';
import LineChart from '../components/Charts/LineChart';
        

const Analytics= () => {
  const [MOCK_DATA, setMOCK_DATA] = useState([])
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA]);
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    pageOptions,
    
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8 }, 
    },
    useGlobalFilter,
    usePagination
  );


  const { pageIndex } = state;
  useEffect(() => {
    axios.get("http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1/reservations/").then((response) => {
      console.log(response.data)
      setMOCK_DATA(response.data.results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <div className="flex justify-between w-full px-5">
      <div className=" text-2xl mt-6">Analytics</div>
        <div className=" text-2xl mt-6">{Array.from({ length: 5 }, (_, index) => (
          <span key={index}>⭐</span>
        ))}</div>
      </div>
       
      <div className="flex w-full justify-between items-center mb-4 mt-4">
        <div className="flex">
          <div className="ml-2"> 
          <span className = " mx-3">Start Date</span>
       <input type="date" className="" />
   </div>

   <div className="">
       <span className = "mx-3"> End Date</span>
       <input type="date" className="" />
   </div>
    </div>
   <div className='px-5'>
        <div className=''>
        
        <select className="w-60 px-4 py-2 border border-gray-300 rounded  text-slate-500" 
                   defaultValue="" >
       <option value="" disabled hidden>
                 Choose Location
       </option>
       <option value="vacation_rental">Vacation Rental</option>
       <option value="hotel">Hotel</option>
       <option value="guest_house">Guest House</option>
       </select>
   </div>
        </div>
   
        </div>
  <div className=" w-auto flex px-5 justify-between">
  <Link>
  <div className="w-[280px] h-32 bg-white rounded pt-3 pl-4 pb-3">
    <div className="text-lg">Total Bookings</div>
    <div className="flex">
      <div className="mr-5">
        <div className="text-2xl pt-2">19,671</div>
        <div className="flex pt-3 text-sm">
          <span className="flex pr-2 text-cyan-600">
            <FiArrowUp className="h-5" />15%{' '}
          </span>
          last mth
        </div>
      </div>
      {/* Move the LineChart component here */}
      <div className="ml-auto">
        <LineChart />
      </div>
    </div>
  </div>
</Link>
    <div className="">
 
  <div className="flex justify-between ml-1">
  <Link>
  <div className="w-[280px] h-32 bg-white rounded pt-3 pl-4 pb-3 gap-[600px]">
    <div className="text-lg">New Customers</div>
    <div className="flex">
      <div className="mr-5">
        <div className="text-2xl pt-2">1,143</div>
        <div className="flex pt-3 text-sm">
          <span className="flex pr-2 text-cyan-600">
            <FiArrowDown className="h-5" />15%{' '}
          </span>
          last mth
        </div>
      </div>
      {/* Move the LineChart component here */}
      <div className="ml-auto">
        <LineChart />
      </div>
    </div>
  </div>
</Link>
  </div>
</div>

<div className="flex justify-between ml-1">

<Link>
  <div className="w-[280px] h-32 bg-white rounded pt-3 pl-4 pb-3 gap-[600px]">
    <div className="text-lg">Available Bookings</div>
    <div className="flex">
      <div className="mr-5">
        <div className="text-2xl pt-2">19,671</div>
        <div className="flex pt-3 text-sm">
          <span className="flex pr-2 text-cyan-600">
            <FiArrowUp className="h-5" />15%{' '}
          </span>
          last mth
        </div>
      </div>
      {/* Move the LineChart component here */}
      <div className="ml-auto">
        <LineChart />
      </div>
    </div>
  </div>
</Link>
</div>

<div className="flex justify-between ml-1">

<Link>
  <div className="w-[280px] h-32 bg-white rounded pt-3 pl-4 pb-3 gap-[600px]">
    <div className="text-lg">Total Revenue</div>
    <div className="flex">
      <div className="mr-5">
        <div className="text-2xl pt-2">19,671</div>
        <div className="flex pt-3 text-sm">
          <span className="flex pr-2 text-cyan-600">
            <FiArrowDown className="h-5" />15%{' '}
          </span>
          last mth
        </div>
      </div>
      {/* Move the LineChart component here */}
      <div className="ml-auto">
        <LineChart />
      </div>
    </div>
  </div>
</Link>
</div>
        </div>
        
        <div className="flex">
  <div className="w-3/4 bg-white h-96 mt-8 ml-6 rounded mr-3">
    <div className='text-xl mt-0 text-center '>
      <h2>CABIN REVENUES/ 24HRS ($)</h2>
      <div className="ml-20 items-center mt-2 ">
      <BarGraph className="w-96"/>
      </div>
    </div>
  </div>
  <div className="w-1/2 bg-white h-96 mt-8 mr-6 rounded ml-3">
    <div className='text-xl text-center mt-0'>
      <h2>BOOKINGS FOR MAY 2023</h2>
      <DougnutChart/>
    </div>
  </div>
  </div>
  <div className=' italics ml-6 mt-6 mb-0'>
    <h2 className='italic text-blue-900 text-xl'>Most Frequent Customers</h2>
  </div>
  <div className=" w-auto mr-6 bg-white mt-5 ml-6 rounded">
  <div className="">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 bg-zinc-400 h-12 items-center rounded-md p-1">
          <button
            className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <IoMdArrowBack className="mr-1" />
            Previous
          </button>

          <div className="flex items-center mx-2 text-sm rounded-md p-2 ml-4 w-28 h-7">
            {Array.from({ length: pageOptions.length }, (_, pageIndex) => pageIndex + 1).map(
              (page) => (
                <span
                  key={page}
                  className={`mx-1 cursor-pointer ${
                    page === pageIndex + 1 ? 'font-bold bg-white rounded-md px-2' : ''
                  }`}
                >
                  {page}
                </span>
              )
            )}
          </div>

          <button
            className="bg-white rounded-md p-2 mr-4 w-28 h-7 text-sm flex items-center pl-8"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
            <IoArrowForward className="ml-1" />
          </button>
        </div>
  </div>
      
    </div>
  )
}

export default Analytics