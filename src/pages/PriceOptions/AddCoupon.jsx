import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CouponsController from '../../controllers/couponsController';


const AddCoupon = () => {
  const [couponData, setCouponData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(couponData);
    try {
      CouponsController.addCoupon({ couponData })
      .then((response) => {
        console.log(response.data);
        navigate("/priceoptions/coupons");
      })
      .catch((error) => {
        console.log(error);
      })
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <p className="mx-[35px] mt-[20px] text-2xl font-medium">Add Coupon</p>
        
      <div className='p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white text-slate-500'>
        <div className='flex gap-[300px]'>
          <div>
            <div className='font-medium p-[10px]'>
              <span>Coupon ID*</span>
              <input 
              type="text"
              className='border border-slate-300 rounded flex w-[510px] h-[30px]'
              required
              onChange={(event) => {
                setCouponData({...couponData, coupon_name: event.target.value});
              }}
              />
            </div>

          <div className='flex gap-[0px]'>
            <div className=' font-medium p-[10px]'>
              <span>Start Date*</span>
              <input 
              type="date"
              className='border border-slate-300 rounded flex w-[250px] h-[30px] uppercase'
              required
              onChange={(event) => {
                setCouponData({...couponData, start_date: event.target.value});
              }}
              />
            </div>

            <div className=' font-medium p-[10px] pl-[0px] '>
              <span>End Date*</span>
              <input 
              type="date"
              className='border border-slate-300 rounded flex w-[250px] h-[30px] uppercase'
              required
              onChange={(event) => {
                setCouponData({...couponData, expiry_date: event.target.value});
              }}
              />
            </div>
          </div>
          <div className='font-medium p-[10px]'>
              <span>Coupon Code*</span>
              <input 
              type="text"
              className='border border-slate-300 rounded flex w-[510px] h-[30px]'
              required
              onChange={(event) => {
                setCouponData({...couponData, coupon_code: event.target.value});
              }}
              />
          </div>
          </div>
        <div className='p-[10px]'>
          <div className=' font-medium '>
                <span>%Discount*</span>
                <input 
                type="text"
                className='border border-slate-300 rounded flex w-[250px] h-[30px]'
                required
                onChange={(event) => {
                  setCouponData({...couponData, discount_percentage: event.target.value});
                }}
                />
          </div>

          <div className='font-medium p-[10px]  pl-[0px]'>
                <span>Usage Limit*</span>
                <input 
                type="text"
                className='border border-slate-300 rounded flex w-[250px] h-[30px]'
                required
                onChange={(event) => {
                  setCouponData({...couponData, usage_limit: event.target.value});
                }}
                />
          </div>
        </div>
      </div>
        <div className='absolute bottom-0 right-0 flex w-[200px] justify-between'>
            <div className='cursor-pointer bg-white text-black py-2 px-5 flex justify-center rounded-[10px]'>
              <span className='mx-auto'>cancel</span>
            </div>
            <div 
            onClick={handleSubmit}
            className='cursor-pointer bg-black text-white py-2 px-6 flex justify-center rounded-[10px]'>
              <span className='mx-auto'>save</span>
            </div>
        </div>
          
      </div>
    </div>
  )
}

export default AddCoupon;