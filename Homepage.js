import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import imageSrc from './images/home.jpg';
import image2 from './images/itinary.jpg';
import image3 from './images/group.jpg';
import image4 from './images/booking.jpg';
import image5 from './images/map.jpg';


const Homepage = () => {
  const navigate = useNavigate();

  const onItineraryClick = useCallback(() => {
    navigate("/Trip");
  }, [navigate]);

  const onSIGNUPTextClick = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  return (
//     <div className="homepage">
//       <input className="Search" placeholder="Search Your Destination"></input>
//       {/* <img
//         className="screenshot-2023-10-02-013454-1"
//         alt=""
//         src="https://images.thequint.com/thequint%2F2017-06%2F673fb278-12d9-4dde-a55e-eb067bf86376%2F85a477d6-568d-4fb2-94b5-72d7eed4f8ef.png?rect=0%2C0%2C978%2C550&auto=format%2Ccompress&fmt=webp&width=230&w=1200"
//         onClick={screenshotclick}
//       /> */}
//       <div className="frame-div">
//         <div className="sign-up-parent">
//           <div className="sign-up" onClick={onSIGNUPTextClick}>SIGN UP</div>
//           <div className="reservations">RESERVATIONS</div>
//           <div className="about" onClick={onItineraryClick}>ITINERARY</div>
//         </div>
//       </div>

//       <div className="body">
//         <div className="homeitinerary">
//           <h4>ITINERARY</h4>
//           <p>....</p>
//           <img src=""></img>
//         </div>
//         <div className="homegrptour">
//           <h4>GROUP TOURISM</h4>
//           <p>....</p>
//           <img src=""></img>
//         </div>
//         <div className="homereservation">
//           <h4>RESERVATIONS</h4>
//           <p>....</p>
//           <img src=""></img>
//         </div>
//       </div>

//       <div className="homepage-child7" />
//       <div className="cookies">Cookies</div>
//       <div className="privacy-policy1">Privacy Policy</div>
//       <div className="copyright-2023"></div>
//       <div className="contact-us">Contact us</div>
//       <img className="homepage-child8" alt="" src="/line-17.svg" />
//     </div>
//   );
// };

// export default Homepage;
<div className="homepage">
      {/*<div className="search-bar">
        <input className="Search" type="text" placeholder="Search Your Destination"></input>
  </div>*/}


      {/* <img
              className="screenshot-2023-10-02-013454-1"
              alt=""
              src="https://images.thequint.com/thequint%2F2017-06%2F673fb278-12d9-4dde-a55e-eb067bf86376%2F85a477d6-568d-4fb2-94b5-72d7eed4f8ef.png?rect=0%2C0%2C978%2C550&auto=format%2Ccompress&fmt=webp&width=230&w=1200"
              onClick={screenshotclick}
            /> */}
      <div id="navbar-container">
        <nav class="navbar">

          <div className="frame-div">
            <div className="sign-up-parent">
              <li>
                <div className="sign-up" style={{ color: 'white' }}onClick={onSIGNUPTextClick}>SIGN UP </div>
              </li>
              <li>
                <div className="reservations" style={{ color: 'white' }}>RESERVATIONS</div>
              </li>
              <li>
                <div className="about" onClick={onItineraryClick} style={{ color: 'white' }}>ITINERARY</div>
              </li>
            </div>
          </div>

        </nav>
      </div>



      <div className="body">
        <div className="homeabout">
          <p><span className="bold-letter">ABOUT</span> <br /> India is one of the developing countries <br/>in India's warm hospitality and the warmth <br/>of its people leave an indelible mark on<br/> every visitor,  the world, rich in culture, <br /> heritage and values.India's warm hospitality<br/> and the warmth of its people leave an indelible<br/> mark on every visitor.</p>
          <img className="homeimg" src={imageSrc} alt="homeimg" />
        </div>

        <div className="homeitinerary">
          <img className="itin" src={image2}/>
          <p><span className="bold-letter">ITINERARY</span> <br /> Create a personalized travel plan that aligns <br /> with your preference allowing you to make<br/> the most of your trip. helps travelers make <br/>the most of their time, balancing sightseeing<br/> with relaxation and cultural experiences.</p>
          <img src=""></img>
        </div>
        <div className="homegrptour">
          <p><span className="bold-letter">GROUP TOURISM</span> <br/>such tours which are organised <br /> in groups comprising individuals <br /> and/or families and where the <br /> services provided are similar to <br /> all the Tourist(s) in that group.</p>
          <img className="grp" src={image3}/>
        </div>
        <div className="homereservation">
          <img className="reser" src={image4}/>
          <p><span className="bold-letter">RESERVATIONS</span><br/>The website allows you to effotlessly book <br /> hotels,providing competative prices and<br /> exclusive deals, saving you both time <br />and money </p>
            
        </div>
        <div className="homemap">
          <p><span className="bold-letter">INTERACTIVE MAP</span><br/>Our travel website features <br /> interactive maps that allow you to <br /> explore Destination,plan routes, <br /> and discovery nearby attractions, <br /> making it easier than ever to <br /> navigate your adventures.</p>
          <img className="hmap" src={image5}/>
        </div>
      </div>


      <div className="footer">
        <ul>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
        <p className="copy-right">Copyright &copy; India Wonders</p>
      </div>
    </div>

  );
}

export default Homepage;