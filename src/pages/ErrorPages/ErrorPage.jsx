import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <img alt='image' className='ml-[25.5rem] mt-[7rem] w-[5rem] h-[8rem] absolute' src ='https://lh3.googleusercontent.com/pw/AIL4fc9ftYEeXQdftfiLNUGypjpXJYFsUKyLOlNHJdEf5iVMg2inGspnDoZ_JZ5NVHAEc4WR6c5ZHwB4W5kcRpQrZK6Cpg0r3Db7PP51j4w_yt0zvetfP-3MnzJMCdX7f-E1mYf7MU-VKIXD7JwbStzuuBh3pC2v3CO3W3X20C3BtCB_deB1cx22ZyJVSytKN4MvxszjwjY4u-HPyEWm2upTcTFpsfwh4dt6UVoiL4oyHSmVjgmhdYQ22Usy_XTD06EkG_tUMUAx0Jvx85Z4CCetXqDUr5E3u9sodl8Wt0QsXG181k1PD2nt4RxoMF14MzzMragK6vK6OPgUwfDNrUadk3NDG5_tPL2ylNQ2VnYZ40rRSbtjfzPUtpY4kSTGHUPFBlx06To7FBjxNpQEbbynloGVBNaz7I3_wxHdMkTFsEiYXqAKq2PK_g7WEbzAEneaZ8tgGVk9wZOWCL6uLUQfakkOxHLrb7gMpEa4D2JdhlmYowRW4pEVr8lsoYpzeRHiufCgTWYVdbaeQfuElHfDYLaLxCInoXFtl73aWRhJjgFym-Cbpfqf_HtGW7a2AI0RXdqZe4FKlstRe-kc5eE8qM1jo2AOVeWr-oJfDRCxPqnzmEKfBHv4XOQ-JvVvjIt0T7e8rNPQlvpKiHNU6CN4rimve31H5CzMXSRQeVSftYaV_Vpgj71USlKF5JhE1N1L3RAEyKN2V4U0x5M6BumHCM_eQht-B1EiJ0-kgLYQ1dCy8VI6mPOpLpgndeCmz5_KyCzQE8SAJYz2wXXPH4D590Fx5WzaMnc-E5IeYCTkHyEW1p8jNJyHEocbnMBrXN_tYxP86w3se1NHg9IbHmBJtTRVoK_T--hMEpYXYBdovxOvyTlnz-jYez8jWJSs5ZZwFuSuiDVmAX5S9_zaEaS9mw=w578-h884-s-no?authuser=0'/>
        <p className='text-center text-[12.5rem] font-extrabold mt-[3rem]'>Oops!</p>
        <p className ='text-center text-[1.5rem] font-bold uppercase'>404-page not found...</p>
        <p className ='text-center text-[1rem]'>Please click on the button below </p>
        <div className='grid justify-items-center mt-[1rem]'>
        <button className='rounded bg-sky-700 text-white p-[0.5rem] text-center uppercase self-center'><Link to='/dashboard'>Go to Dashboard</Link></button>
      </div>
    </div>
  )
}

export default ErrorPage
