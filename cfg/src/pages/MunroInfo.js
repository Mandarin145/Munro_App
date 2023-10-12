
// import {useState, useEffect} from 'react';
import './MunroInfo.css';
import Navbar from '../Components/navbar/index';
import MiniNav from '../Components/mininav/mininav';
import MunroTable from './MunroTable';


function MunroInfo() {
  return (
    <div className="MunroInfo">
      <MiniNav />
      
      
    <header className="App-header">    
        <h1>The Munros</h1>
    </header>  

    <h6>Here is a list of all the Munros.  The number of the Munro corresponds
      to the number on the interactive map on the Dashboard page.  Please click into the 
      list and scroll down and right to see more hills and information.
    </h6>

    <div id="MunroTable">
    <MunroTable/>
    </div>


<Navbar />
    </div>
  );
}

  export default MunroInfo;