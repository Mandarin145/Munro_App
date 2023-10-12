import './Transport.css';
import Navbar from '../Components/navbar/index';
import MiniNav from '../Components/mininav/mininav';


function Transport() {
  return (
    <div className="Transport">
      <MiniNav />
      
    <header className="App-header">    
        <h1>Transport</h1>
    </header>  

    <h4>Here is your route to...</h4>


    <iframe id="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272138.1865988398!2d-5.596256564311861!3d57.799999082559985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488e442f5d900f99%3A0x90f0327752c6117a!2sAn%20Teallach!5e0!3m2!1sen!2suk!4v1684226624944!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p></p>

<Navbar />
    </div>
  );
}

  export default Transport;