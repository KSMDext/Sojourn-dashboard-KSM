import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';
import { useState } from 'react';

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    // Handle the menu item click event
    switch (menuItem) {
      case 'Delete':
        console.log('Delete clicked');
        // Add your delete logic here
        break;
      case 'Edit':
        console.log('Edit clicked');
        // Add your edit logic here
        break;
      default:
        break;
    }
  };

  const feedbackGridImage = (props) => (
    <div className="image flex gap-4">
      <img className="rounded-full w-10 h-10" src={props.FeedbackImage} alt="feedback" />
      <div>
        <p>{props.FeedbackName}</p>
      </div>
      <div>
        <p>{props.FeedbackMessage}</p>
      </div>
    </div>
  );

  const RatingStars = (props) => {
    const { Rating } = props;
    return (
      <div>
        {Array.from({ length: Rating }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
    );
  };

  const gridFeedbackMenu = () => (
    <div className="menu-container">
      <button onClick={toggleMenu} className="menu-button">
        <FaEllipsisV />
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <button onClick={() => handleMenuClick('Delete')} className="dropdown-menu-item">
            Delete
          </button>
          <button onClick={() => handleMenuClick('Edit')} className="dropdown-menu-item">
            Edit
          </button>
        </div>
      )}
    </div>
  );

  const feedbackGrid = [
    {
      headerText: 'Customer Review',
      width: '300',
      template: feedbackGridImage,
      textAlign: 'Center',
    },
    {
      field: 'Rating',
      headerText: 'Rating',
      width: '150',
      textAlign: 'Center',
      template: RatingStars, 
    },
    {
      field: 'Menu',
      headerText: '',
      width: '50',
      template: gridFeedbackMenu,
    },
  ];

  const feedbackData = [
    
    {
      feedbackName: 'Nirav Joshi',
      FeedbackMessage: 'Yea yea this is know how it is. Sho sho sho, you know AB in the building',
      FeedbackImage:
        'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      Rating: 4, 
    },
    
      
  {
    feedbackName: 'Sunil Joshi',
    Rating: 2, 
    FeedbackMessage:'Everything went smooth; from the swimming to the massages and even the dishes prepared by the master chef. Such great culinary skill',
    FeedbackImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  
  { 
    feedbackName: 'Nirav Joshi',
    Rating: 5, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },

  {
    feedbackName: 'Sunil Joshi',
    Rating: 3, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
   
  },
 
 
  {
    feedbackName: 'Nirav Joshi',
    Rating: 4, 
    FeedbackMessage:'Nice Environment',
    FeedbackImage:
      'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  
  {
    feedbackName: 'Nirav Joshi',
    Rating: 4, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    feedbackName: 'Sunil Joshi',
    Rating: 4, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
 
  
  {
    feedbackName: 'Michael',
    Rating: 4, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    feedbackName: 'Nirav Joshi',
    Rating: 4, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },

  {
    feedbackName: 'Sunil Joshi',
    Rating: 4, 
    FeedbackMessage:'I love to come here again',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',

  },
  
 
  {
    feedbackName: 'Michael',
    Rating: 3, 
    FeedbackMessage:'Nice place',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
   
  },
  {
    feedbackName: 'Nirav Joshi',
    Rating: 5, 
    FeedbackMessage:'I love this place',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    feedbackName: 'Sunil Joshi',
    Rating: 5, 
    FeedbackMessage:'This place is awesome',
    FeedbackImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  

  {
    feedbackName: 'Michael',
    Rating: 5, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    feedbackName: 'Nirav Joshi',
    Rating: 3, 
    FeedbackMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    FeedbackImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  
  },
  {
    feedbackName: 'Sunil Joshi',
    Rating: 4, 
    FeedbackMessage:'Nice Environ',
    FeedbackImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },


  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(feedbackData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = feedbackData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Feedback</p>
      </div>
      <GridComponent dataSource={visibleData} enableHover={false}>
        <ColumnsDirective>
          {feedbackGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
      <div className="flex justify-between mt-4 bg-zinc-600  h-12  items-center rounded-md p-1 m-5">
        <button
          className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <IoMdArrowBack className="mr-1" />
          Previous
        </button>
        <div className="flex items-center mx-2 text-sm rounded-md p-2 ml-4 w-28 h-7 ">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <span
              key={page}
              className={`mx-1 cursor-pointer ${
                page === currentPage ? 'font-bold bg-white rounded-md px-2' : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <button
          className="bg-white rounded-md p-2 mr-4 w-28 h-7 text-sm flex items-center pl-8"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
          <IoArrowForward className="ml-1" />
        </button>
        </div>
    </div>
  );
};

export default Feedback;
