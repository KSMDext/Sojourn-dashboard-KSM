import React from 'react';
import { Link } from 'react-router-dom';

const ExtrasTable = ({ xtrasData }) => (
  <table>
    <tbody>
      {xtrasData.map((item, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" className="h-8 w-8 mt-1 mb-2" />
          </td>
          <td>
            <img className="rounded-full w-10 h-8" src={item.ExtrasImage} alt="feedback" />
          </td>
          <td>
            <p>{item.ExtrasName}</p>
            <p>{item.ExtrasMessage}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const xtrasData = [
  {
    ExtrasName: 'Nirav Joshi',
    ExtrasMessage: 'Yea yea this is know how it is. Sho sho sho, you know AB in the building',
    ExtrasImage: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
      
  {
    ExtrasName: 'Sunil Joshi',
    ExtrasMessage:'Everything went smooth; from the swimming to the massages and even the dishes prepared by the master chef. Such great culinary skill',
    ExtrasImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  
  { 
    ExtrasName: 'Nirav Joshi',
    ExtrasMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    ExtrasImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },

  {
    ExtrasName: 'Sunil Joshi',
    ExtrasMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    ExtrasImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
   
  },

];
const Extras = () => {
  return (
    <div>
      <div className="text-xl mb-2">Extras</div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
          <p className='text-[20px]  text-blue-800 italics'>FAQs</p>
          <div className='h-[100px] w-[150px]'>
            <p className='italic ml-2'>These are some of the expected frequently asked questions that customers ask.</p>
          </div>
          <button className="bg-black rounded text-white h-[32px] w-[150px] text-center mt-10 flex items-center mb-1">
            <Link to = "/addfaq">
            <span className="mr-2 p-5 mb-1"><span className="p-2">+</span> Add FAQ</span>
            </Link>
          </button>
          <input type="text" className="mt-2" />
        </div>
        <div>
          <div className='flex flex-col'>
            <span>Question 1 :</span>
            <input type="text" className="mb-2 border w-[700px] p-2 rounded-md" placeholder=" Answer goes here" />
          </div>
          <div className='flex flex-col'>
            <span>Question 2:</span>
            <input type="text" className="mb-2 border w-[700px] p-2 rounded-md" placeholder="Answer goes here" />
          </div>
          <div className='flex flex-col'>
            <span>Question 3:</span>
            <input type="text" className="mb-2 border w-[700px] p-2 rounded-md" placeholder="Answer goes here" />
          </div>
        </div>
      </div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
          <p className='text-[20px] text-blue-900 italics ml-2'>Gallery</p>
          <div className='h-[230px] w-[165px]'>
            <p className='italic ml-2'>This entails random photos of locations, cabins, staff and events that happen at various places, relating to Sojourn Cabins.</p>
            <button className="bg-black rounded text-white h-[32px] w-[200px] text-center mt-10 flex items-center">
            <Link to = "/addtogallery">
              <span className="mr-2 p-5"><span className="p-2">+</span> Add To Gallery</span>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row br-4 space-x-5">
            <img src="https://media.istockphoto.com/id/1444295286/photo/view-from-the-pool-above-the-water-level-clear-water-of-pure-blue-color-in-the-background-a.webp?b=1&s=170667a&w=0&k=20&c=oJT4Ku5CsEvMTXTz9yeeBdBLO3nNPB_0OSvUaKY7aEY=" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://media.istockphoto.com/id/1001765878/photo/in-the-pool.webp?b=1&s=170667a&w=0&k=20&c=l1PbBT9LpFFSlFabe7IdI9g7AxtkCVaHUxXqhoPGh5o=" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://media.istockphoto.com/id/1332857654/photo/aerial-top-view-male-swimmer-swimming-in-swimming-pool-professional-determined-athlete.webp?b=1&s=170667a&w=0&k=20&c=JQ48D9dgwHAXaKeXBuARMZzBFDdrvooQRbbovCJUYt0=" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://media.istockphoto.com/id/1451002406/photo/portrait-of-a-senior-man-at-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=xtUxxEGOs1zm4y_UvnXEqVAZbhb2aNYWTKTB2aBON0k="alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row br-4 space-x-8">
            <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dpbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://images.unsplash.com/photo-1600965962323-6362f726c3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://images.unsplash.com/photo-1480109866847-0b432ceb666a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3aW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="https://media.istockphoto.com/id/1332857654/photo/aerial-top-view-male-swimmer-swimming-in-swimming-pool-professional-determined-athlete.webp?b=1&s=170667a&w=0&k=20&c=JQ48D9dgwHAXaKeXBuARMZzBFDdrvooQRbbovCJUYt0="alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
          </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
        <p className='text-[20px] text-blue-900 italics ml-3'>Testimonials</p>
        <div className='h-[100px] w-[200px]'>
        <p className='italic ml-1'>These are some of the expected frequently asked questions that customers ask.</p>
        <button className="bg-black rounded text-white h-[32px] w-[200px] text-center mt-10 flex items-center">
        <Link to = "/addtestimonial">  
      <span className="mr-2 p-4"><span className="p-2">+</span> Add Testimonials</span>
      </Link>
    </button>
    </div>
  </div>
  <div className="flex flex-col justify-between">
  <div className="flex flex-row br-4 space-x-6">
  <div className='bg-white mt-8 m-[30px] p-[30px]'>
        <div className="mr-8">
          <ExtrasTable xtrasData={xtrasData} />
        </div>
      </div>
  </div>
</div>

</div>

      <div className="ml-[800px] mb-[20px] mt-[20px] flex align-bottom ">
        <button
          type="button"
          className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-2"
        >
          Cancel
        </button>
        <button
          type="save"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-200 mr-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Extras;