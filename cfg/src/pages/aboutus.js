import pies from './Pies.jpg';
import HandP from './HandP.jpg';
import AnTeal from './AnTeal.jpg';
import cat from './cat.jpg';
import mapp from './logo.png';
import Navbar from '../Components/navbar';
import MiniNav from '../Components/mininav/mininav';



function AboutUs() {
  return ( 
    
    <div className="aboutus">
       <MiniNav />
      <header className="App-header">
     
      <div className="logo-container">
          <img src={mapp} alt="logo" className="logo" />
          </div>
          
        <h1>MAPP Team</h1>
      
        <p>
          The Mapp team consists of 4 software engineers 
          who are starting their professional journeys together.
        </p>
        <br></br>
        <br></br>
        <h2>
          Amanda
        </h2>
        <p>
          Hello! I'm Amanda. I enjoy being outdoors and going for hikes with my boyfriend. 
          I wanted to make an app that can help nature lovers like me plan their trips and keep track of where they've been.
          I also enjoy baking treats to take with us on the journey, it's always nice to look forward to eating something tasty on the summit!
        </p>
        <img src={pies} alt="some pies ready to take on a hike" className="aboutpics" />
        <br></br>
        <br></br>
        <h2>
          Niamh
        </h2>
        <p>
          Hello! I'm Niamh. I enjoy mostly being indoors with my computer. 
          I love challenges and unlocking achievements so wanted to create an app which would allow hiking enthusiasts to do that in real life!
          I live in Glasgow with my cat Fury!
        </p>
        <img src={cat} alt="niamh's cat" className="aboutpics"/>
        <br></br>
        <br></br>
        <h2>
          Helen!
        </h2>
        <p>
          Hi! I'm Helen.  I like travelling.  We often go up North camping and climb a few Munros at the weekends particularly 
          in May when we have the best weather in the Highlands.  I love swimming there too.
        </p>
        <img src={AnTeal} alt="View from our camp last weekend" className="aboutpics" />
        <br></br>
        <br></br>
        <h2>
          Verity!
        </h2>
        <p>
          Hello! I'm Verity! I love being outdoors, indoors and anywhere theres an animal to meet! 
          I wanted to create an app that would help people explore and enjoy the Scottish wildlife. I think Munro bagging is perfect for that. 
          I live in Glasgow with my two cats and my fiancee.
        </p>
        <img src={HandP} alt="Ham and Pickle" className="aboutpics"/>



        {/* left this in for now, may be useful to edit later */}
        
        {/* <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        </a> */}
      </header>
      
      <Navbar />
      
      
    </div>
  );
}

export default AboutUs;
