import React from 'react'

const AddCoupon = () => {
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
              required/>
            </div>

          <div className='flex gap-[0px]'>
            <div className=' font-medium p-[10px]'>
              <span>Start Date*</span>
              <input 
              type="date"
              className='border border-slate-300 rounded flex w-[250px] h-[30px] uppercase'
              required/>
            </div>

            <div className=' font-medium p-[10px] pl-[0px] '>
              <span>End Date*</span>
              <input 
              type="date"
              className='border border-slate-300 rounded flex w-[250px] h-[30px] uppercase'
              required/>
            </div>
          </div>
          <div className='font-medium p-[10px]'>
              <span>Coupon Code*</span>
              <input 
              type="text"
              className='border border-slate-300 rounded flex w-[510px] h-[30px]'
              required/>
          </div>
          </div>
        <div className='p-[10px]'>
          <div className=' font-medium '>
                <span>%Discount*</span>
                <input 
                type="text"
                className='border border-slate-300 rounded flex w-[250px] h-[30px]'
                required/>
          </div>

          <div className='font-medium p-[10px]  pl-[0px]'>
                <span>Usage Limit*</span>
                <input 
                type="text"
                className='border border-slate-300 rounded flex w-[250px] h-[30px]'
                required/>
          </div>
        </div>
      </div>

          
      </div>
    </div>
  )
}

export default AddCoupon;