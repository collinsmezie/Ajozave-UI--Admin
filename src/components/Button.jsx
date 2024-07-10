

<div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">Content</div>
  <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">Content</div>
</div>


// src/components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;



// function Button(props){
//     var color = props.color;
//     return (
//         <button 
//             className="add-task" 
//             onClick={props.onClick}
//         >{props.text}</button>
//     )
// }



// Button.defaultProps = {
//     text: 'Add'
// }

// export default Button;