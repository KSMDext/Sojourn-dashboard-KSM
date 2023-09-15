import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { COLUMNS } from "./columns";
import "./table.css";
import { GlobalFilter } from "../../components/GlobalFilter";
import { useDispatch, useSelector } from "react-redux";
import CabinsController from "../../controllers/cabinsController";
import { setAllCabins } from "../../store/features/cabins.slice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const Cabins = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { allCabins } = useSelector((state) => state.cabins);
  const dispatch = useDispatch();

  async function getAllCabins() {
    setIsLoading(true);

    CabinsController.getAllCabins()
      .then((response) => {
        dispatch(setAllCabins(response?.data?.results ?? []));
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.error, { position: "top-center" });
        setIsLoading(false);
      });
  }

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
      columns: COLUMNS,
      data: allCabins,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;
  const { pageIndex } = state;

  useEffect(() => {
    getAllCabins();
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex flex-col justify-center self-center h-[80vh] ">
          <div className="flex justify-center self-center w-[30%] bg-white shadow-lg p-6 rounded-xl">
            <h2 className="font-bold">Getting Cabins Data</h2>
            <PulseLoader
              size={"0.4rem"}
              color="currentColor"
              className="ml-3 mt-[3px]"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex mt-4 items-center w-full justify-between px-5">
            <div className="text-2xl">Cabins</div>
            <div></div>
            <div>
              <button className="text-white p-1 hover:bg-zinc-300 bg-zinc-800 rounded-md bold text-14 w-40">
                <Link to="/addcabins">
                  <span className="mr-4">+</span>Add Cabin
                </Link>
              </button>
            </div>
          </div>
          <div className="flex mt-4 justify-between px-5">
            <div className="w-80 border rounded text-sm">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <div>
              <select className="w-[190px] h-9 border-slate-200 border-1 rounded text-sm">
                <option>All Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>
            </div>
          </div>
          <div className="m-5">
            <div className="rounded-md bg-white mb-6">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
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
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-16 bg-zinc-400 h-12 items-center rounded-md p-1">
              <button
                className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <IoMdArrowBack className="mr-1" />
                Previous
              </button>

              <div className="flex items-center mx-2 text-sm rounded-md p-2 ml-4 w-28 h-7">
                {Array.from(
                  { length: pageOptions.length },
                  (_, pageIndex) => pageIndex + 1
                ).map((page) => (
                  <span
                    key={page}
                    className={`mx-1 cursor-pointer ${
                      page === pageIndex + 1
                        ? "font-bold bg-white rounded-md px-2"
                        : ""
                    }`}
                  >
                    {page}
                  </span>
                ))}
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
        </>
      )}
    </div>
  );
};

export default Cabins;
