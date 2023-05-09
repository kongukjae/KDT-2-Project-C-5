import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';

const formOneStyle = {
  backgroundColor: '#A7B999',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}
const formTwoStyle = {
  backgroundColor: '#B195B1',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}
const formThreeStyle = {
  backgroundColor: '#C86C6C',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}
const PopularReview = () => {
  return (
    <div>
      <div style={formOneStyle}><MainFeedReviewForm/></div>
      <div style={formTwoStyle}><MainFeedReviewForm/></div>
      <div style={formThreeStyle}><MainFeedReviewForm/></div>
    </div>
  );
};

export default PopularReview;


// import React, { useState, useEffect } from 'react';
// import MainFeedReviewForm from './mainFeedReviewForm';

// const PopularReview = () => {
//   const [reviews, setReviews] = useState([]);

//   const formStyle = {
//     backgroundColor: '#A7B999',
//     border: '1px solid black',
//     borderRadius: '10px',
//     backgroundClip: 'padding-box',
//     marginBottom: '20px'
//   };

//   const handleScroll = () => {
//     const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//     const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight || window.innerHeight;
//     const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

//     if (scrolledToBottom) {
//       setReviews([...reviews, <div key={reviews.length} style={formStyle}><MainFeedReviewForm/></div>]);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   });

//   return (
//     <div>
//       {reviews.map((review, index) => (
//         <div key={index}>{review}</div>
//       ))}
//     </div>
//   );
// };

// export default PopularReview;
