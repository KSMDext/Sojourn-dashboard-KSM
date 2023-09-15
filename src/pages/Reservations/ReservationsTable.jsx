import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Columns';
import './table.css';
import { GlobalFilter } from '../../components/GlobalFilter';

const ReservationsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

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
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 7 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;
  const { pageIndex } = state;

  return (
    <div>
      <div className="w-96 border rounded text-sm ">
        {/* Global Filter */}
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <div className="rounded-md bg-white max-h-64 overflow-y-auto">
        {/* Table */}
        <table className="w-full" {...getTableProps()}>
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

      <div className="flex justify-between mt-2 bg-zinc-400 h-10 items-center rounded-md p-1">
        {/* Pagination Controls */}
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
  );
};

export default ReservationsTable;
