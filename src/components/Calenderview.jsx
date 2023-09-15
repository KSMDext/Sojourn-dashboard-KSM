// import React, { useState } from 'react';

// const CalendarView = ({ bookingData }) => {
//   const [currentWeek, setCurrentWeek] = useState(0);
//   const weekStart = new Date();
//   weekStart.setDate(weekStart.getDate() + (currentWeek * 7));
//   const weekEnd = new Date();
//   weekEnd.setDate(weekEnd.getDate() + (currentWeek * 2));
  
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
//   const renderDays = () => {
//     const days = [];
//     for (let i = 0; i < 7; i++) {
//       const currentDate = new Date(weekStart);
//       currentDate.setDate(currentDate.getDate() + i);
//       days.push(
//         <th key={i} className="px-4 py-2">
//           {daysOfWeek[currentDate.getDay()]}<br />
//           {currentDate.toLocaleDateString()}
//         </th>
//       );
//     }
//     return days;
//   };
  
//   const renderCabinBookings = () => {
//     const cabins = Object.keys(bookingData);
//     return cabins.map(cabin => (
//       <tr key={cabin}>
//         <td className="border px-4 py-2">{cabin}</td>
//         {renderWeekBookings(cabin)}
//       </tr>
//     ));
//   };
  
//   const renderWeekBookings = (cabin) => {
//     const weekBookings = [];
//     const weekEnd = new Date(weekStart);
//     weekEnd.setDate(weekEnd.getDate() + 6);
    
//     for (let i = 0; i < 7; i++) {
//       const currentDate = new Date(weekStart);
//       currentDate.setDate(currentDate.getDate() + i);
      
//       const bookingsForDay = bookingData[cabin].filter(booking => {
//         const startDate = new Date(booking.startDate);
//         const endDate = new Date(booking.endDate);
//         return startDate <= currentDate && endDate >= currentDate;
//       });
      
//       weekBookings.push(
//         <td key={i} className="border px-4 py-2">
//           {bookingsForDay.map((booking, index) => (
//             <div key={index}>
//               {booking.startTime} - {booking.endTime}
//             </div>
//           ))}
//         </td>
//       );
//     }
    
//     return weekBookings;
//   };
  
//   return (
//     <div className="mx-auto max-w-screen-lg">
//       <div className="flex items-center justify-between my-4">
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={() => setCurrentWeek(currentWeek - 1)}
//         >
//           Prev Week
//         </button>
//         <h2 className="text-xl font-semibold">
//           Week of {weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}
//         </h2>
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={() => setCurrentWeek(currentWeek + 1)}
//         >
//           Next Week
//         </button>
//       </div>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Cabin</th>
//             {renderDays()}
//           </tr>
//         </thead>
//         <tbody>
//           {renderCabinBookings()}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CalendarView;



import React, { useState } from 'react';

const CalendarView = ({ bookingData }) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() + (currentWeek * 7));
  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() + (currentWeek * 2));
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);
      currentDate.setDate(currentDate.getDate() + i);
      days.push(
        <th key={i} className="px-4 py-2">
          {daysOfWeek[currentDate.getDay()]}<br />
          {currentDate.toLocaleDateString()}
        </th>
      );
    }
    return days;
  };
  
  const renderCabinBookings = () => {
    const cabins = Object.keys(bookingData);
    return cabins.map(cabin => (
      <tr key={cabin}>
        <td className="border px-4 py-2">{cabin}</td>
        {renderWeekBookings(cabin)}
      </tr>
    ));
  };
  
  const renderWeekBookings = (cabin) => {
    const weekBookings = [];
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
  
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);
      currentDate.setDate(currentDate.getDate() + i);
  
      const bookingsForDay = bookingData[cabin].filter((booking) => {
        const startDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        return startDate <= currentDate && endDate >= currentDate;
      });
  
      weekBookings.push(
        <td key={i} className="border px-4 relative">
          {bookingsForDay.map((booking, index) => {
            const start = new Date(`${booking.startDate} ${booking.startTime}`);
            const end = new Date(`${booking.endDate} ${booking.endTime}`);
            const durationHours = (end - start) / (60 * 60 * 1000);
  
            const leftOffset = (start.getHours() + start.getMinutes() / 60) * 40; // Adjust the scaling factor as needed
  
            return (
              <div
                key={index}
                className={`bg-blue-500 text-white p-2 rounded-lg mb-2 absolute`}
                style={{ width: `${durationHours * 40}px`, left: `${leftOffset}px` }}
              >
                {booking.startTime} - {booking.endTime}
              </div>
            );
          })}
        </td>
      );
    }
  
    return weekBookings;
  };
  
  
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="flex items-center justify-between my-4">
        <button
          className="px-2 py-1 border rounded-lg"
          onClick={() => setCurrentWeek(currentWeek - 1)}
        >
          Prev Week
        </button>
        <h2 className="text-xl font-semibold">
          Week of {weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}
        </h2>
        <button
          className="px-2 py-1 border rounded-lg"
          onClick={() => setCurrentWeek(currentWeek + 1)}
        >
          Next Week
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Cabin</th>
            {renderDays()}
          </tr>
        </thead>
        <tbody>
          {renderCabinBookings()}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarView;
