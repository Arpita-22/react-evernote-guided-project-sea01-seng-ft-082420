// import React from 'react';


// const Header = () => {
//   return (
//     // <div className="nav-bar">
//     //   <ul>
//     //     <li className="nav-item"><h2>EverNote</h2></li>
//     //   </ul>
//     // </div>
//   );
// }


import React from "react";
import { Random } from 'react-animated-text';

const Header = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item">
            <h1>
            <Random
              text="EverNote"
              effect="jump"
              effectChange={2.0}
              effectDuration={0.3}/>
              {/* <Wave text="LOADING DATA" effect="stretch" effectChange={2.0} /> */}
            </h1>
          </li>
      </ul>
    </div>
  );
  
}


export default Header;
