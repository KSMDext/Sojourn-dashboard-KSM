import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import CabinsController from "../../controllers/cabinsController";
import LocationsController from "../../controllers/locationsController";
import ExtraChargesController from "../../controllers/extraChargesController";
import PackagesController from "../../controllers/packagesController";

const CreatePackage = () => {
  const [packageData, setPackageData] = useState({});
  const navigate = useNavigate();
  const [cabins, setCabins] = useState([]);
  const [locations, setLocations] = useState([]);
  const [extraCharges, setExtraCharges] = useState([]);

  const handleSubmit = () => {
    console.log(packageData);
    try {
      PackagesController.addPackage({ packageData })
      .then((response) => {
        console.log(response.data);
        navigate("/priceoptions/packages");
      })
      .catch((error) => {
        console.log(error);
      })
    
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
      CabinsController.getAllCabins()
      .then((response) => {
        setCabins(response.data.results);
      }).catch((error) => {
        console.log(error);
      })

      LocationsController.getAllLocations()
      .then((response) => {
        setLocations(response.data.results);
      }).catch((error) => {
        console.log(error);
      })

      ExtraChargesController.getAllExtraCharges()
      .then((response) => {
        setExtraCharges(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }, [])
  return (
    <div className="w-full">
      <div className="ml-6 text-lg">CreatePackage</div>
      <div className="h-[300px] pt-[7px] mt-[32px] m-[35px] bg-white pl-5">
        <span className="text-xl">Package Details</span>
        <form className="flex justify-between text-slate-500 mt-[20px] w-[90%] mx-auto">
          <div className="space-y-[40px] my-1">
            <div className="flex flex-col">
              <label className="w-[300px] h-[40px] text-[14px]">
                Package Name*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="text"
                  onChange={(event) => {
                    setPackageData({...packageData, package_name: event.target.value})
                  }}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="w-[250px] h-[40px] text-[14px]">
                Start date*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="date"
                  onChange={(event) => {
                    setPackageData({...packageData, start_date: event.target.value});
                  }}
                />
              </label>
            </div>

            <div className="flex flex-col">
              <label className="w-[250px] h-[40px] text-[14px]">
                End date*
                <input
                  className="w-[250px] h-[40px] p-2 latto border-1 border-slate-200 rounded"
                  type="date"
                  onChange={(event) => {
                    setPackageData({...packageData, end_date: event.target.value});
                  }}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 w-[500px]">
            <div className="flex flex-col">
              <label className="w-[150px] h-[30px] text-[14px]">
                Choose Location
                <select
                onChange={(event) => {
                  setPackageData({...packageData, location: event.target.value});
                }}
                className="border rounded py-2 w-56">
                  {locations.map((location) => {
                    return (
                      <option value={location.id}>{location.location_name}</option>
                    )
                  })}
                  {/* Add more options if needed */}
                </select>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="w-[150px] h-[30px] text-[14px]">
                Choose Cabin
                <select
                onChange={(event) => {
                  setPackageData({...packageData, cabins: [event.target.value]});
                }}
                className="border rounded py-2 w-56">
                  {cabins.map((cabin) => {
                    return (
                      <option value={cabin.id}>{cabin.name}</option>
                    )
                  })}
                  {/* Add more options if needed */}
                </select>
              </label>
            </div>
            <div className="mt-12">
              <label className="my-10">Description</label>
              <textarea
              onChange={(event) => {
                setPackageData({...packageData, description: event.target.value});
              }}
              className="border"
              name="description" placeholder="Description" cols="30" rows="4"></textarea>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="flex-col bg-white p-[10px] flex h-[300px] pt-[10px] mt-[40px] m-[35px]">
          <p className="text-xl font-bold text-sky-700">Add-Ons</p>
          <div className="flex justify-between w-full px-5">
            <div className="pt-[10px] my-8">
              <p className="italic text-md  text-sky-700">Extra Charges</p>
                {extraCharges.map((extraCharge, index) => {
                  return (
                    <div className="mb-2 flex items-center text-[14px]">
                      <input
                        className=" border-1 border-slate-200 w-[23px] h-[19px]"
                        type="checkbox"
                        onChange={(event) => {
                          if (packageData.extra_charges) {
                            let charges = packageData.extra_charges;
                            if (charges.includes(extraCharge.id)) {
                              setPackageData({...packageData, extra_charges: [...packageData.extra_charges].filter((charge) => (charge !== extraCharge.id))});
                            } else {
                              setPackageData({...packageData, extra_charges: [...packageData.extra_charges, extraCharge.id]});
                            }
                          } else {
                            setPackageData({...packageData, extra_charges: [extraCharge.id]});
                          }
                        }}
                      />
                      <span className="pl-[5px] ">{extraCharge.charge_name}</span>
                    </div>
                  )
                })}
              <span 
              onClick={() => {
                navigate('/addextracharge')
              }}
              className="italics text-sm  text-sky-700 cursor-pointer">+More Extra Charges</span>
            </div>

            <div className="mt-[15px]">
              <p className="italics text-md  text-sky-700 text-center">Length of stay</p>
              <div className=" flex-col my-2 gap-[40px]">
                <div className="flex gap-[20px]">
                  <div className="flex flex-col">
                    <span className="text-sm">Min Nights*</span>
                    <input
                    onChange={(event) => {
                      setPackageData({...packageData, min_nights: event.target.value});
                    }}
                    type="number" className="border rounded h-[35px] border-slate-300" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm">Max Nights*</span>
                    <input 
                    onChange={(event) => {
                      setPackageData({...packageData, max_nights: event.target.value});
                    }}
                    type="number" className="border rounded  h-[35px] border-slate-300" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm">Price*</span>
                  <input
                    type="text"
                    placeholder="$"
                    className="border rounded h-[35px] border-slate-300 w-[11.5rem]"
                    onChange={(event) => {
                      setPackageData({...packageData, price: event.target.value});
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="bg-black mx-4 rounded-lg text-white w-[98px] h-[32px] text-center"
          type="button"
        >
          Save
        </button>
        <button
          className="bg-white rounded-lg  w-[98px] h-[32px]"
          type="button"
        >
          <Link to="/dashboard">Cancel</Link>
        </button>
      </div>
    </div>
  );
};

export default CreatePackage;
