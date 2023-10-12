import mapp2 from './mapp2.png';
import './Dashboard.css';
import Navbar from '../Components/navbar/index';
import MiniNav from '../Components/mininav/mininav';
// import raw from './Munro.txt';
import { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript, InfoWindowF } from "@react-google-maps/api";
import {MunroObjectMaker} from './MunroGenerate'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMedal } from '@fortawesome/free-solid-svg-icons';
import UserPic from './UserPic.jpg';



function Dashboard() {
  const [munroObject, setMunroObject] = useState("")
  const [clickyMcClickFace, setClicky] = useState(null)

  // converting txt file into text that can be used

  useEffect(
    () => {
      MunroObjectMaker().then(m =>
        setMunroObject(m))
    },
  [])


    // const infowindow =  InfoWindowF({
    //   content: "contentString",
    //   ariaLabel: "Uluru",
    // });

  // creating function for marker
    function Marker(){
      const newMarkerArray = [];
      for (const item in munroObject){
        // console.log(item, munroObject[item])
        newMarkerArray.push(<MarkerF title={'title testing'} optimized={false} label={String(munroObject[item].Key)} position={{lat:munroObject[item].Lat, lng:munroObject[item].Long}}
        onClick={() => setClicky([item,munroObject[item]])}/>)
      }
      return newMarkerArray

}

  // connecting to API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDp_vX8N06PYGnYZdduJby9OXr4H5ykZ18',
  });
  // setting centre point of map
  const center = useMemo(() => ({ lat: 56.654762, lng: -4.128796 }), []);


  return (
    
    <div className="Header">
    <MiniNav />
    
    <header id="Header">  
    
    
    <span class="right"><img src={UserPic} alt="UserPicture" id="UserPic"></img></span>
    <span id="mapp" class="left"><img src={mapp2} alt="logo" id="Mapp"></img></span>
    <h4><span id="welcome" class="right">Welcome Back Jane</span></h4>  
  
    
    </header>  

    <h4><span class="left">16:20</span></h4>
    <h4><span class="right">11th May 2023</span></h4>
    <p class="line">.</p>
    <h6><span class="left">Next hour</span></h6>
    <h6><span class="right">Achievements</span></h6>

    <h4><span class="left"><FontAwesomeIcon icon={faCloudSun} /></span></h4>
    <h4><span class="right"><FontAwesomeIcon icon={faMedal} /><FontAwesomeIcon icon={faMedal} /><FontAwesomeIcon icon={faMedal} /></span></h4>
   
    <p class="line">.</p>
    <h6><span class="left">Complete Your Checklist</span></h6>
    <h6><span class="right">Three Days to Go</span></h6>
    <p class="line">.</p>
    <br></br>
    <br></br>


  <div className="App"> 
        {!isLoaded ? (
          <h1>Map loading</h1>
        ) : (
          <GoogleMap
          // setting zoom level
            mapContainerClassName="map-container"
            zoom={7}
            center={center}
          >
          {/* // adding markers */}
            {Marker()}
            {clickyMcClickFace && <InfoWindowF position={{lat:clickyMcClickFace[1].Lat, lng:clickyMcClickFace[1].Long }}>
              <div><h5>{clickyMcClickFace[0]}</h5>{clickyMcClickFace[1].Height_ft} ft<br/>{clickyMcClickFace[1].Height_m} m</div>
            </InfoWindowF>}
          </GoogleMap>
        )}
      
      </div>


<Navbar />
    </div>
    
  );
}

  export default Dashboard;