import { useState } from 'react';
import './style.css';
import cities from './city.json';

function Moniter() {

  const [city, setCity] = useState(0);

  return (
    <div className="main_box">
      <div className="sidebar_menu">
        <div className="logo">
          <a href="#">Search Area</a>
        </div>

        <div className="menu">
          <select className="option" onChange={(e) => {changeMap(e.target.value); setCity(e.target.selectedIndex)} }>
            <option value="">Select a location</option>
            <option  value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d71681.09044258056!2d86.93983431272663!3d25.248221822018806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skhalifabagh%20police%20station%20bhagalpur!5e0!3m2!1sen!2sin!4v1725461189193!5m2!1sen!2sin">
              Bhagalpur
            </option>
            <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.512234362515!2d87.01954587400812!3d25.253348629426643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0490f17285dd7%3A0xb624cd3b9129f916!2sZero%20Mile%20Police%20Station!5e0!3m2!1sen!2sin!4v1725460751916!5m2!1sen!2sin">
              Zero Mile
            </option>
            <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.59387671627!2d86.9547163819484!3d25.231923853562986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04a139508ce6b%3A0xd68bb33b2d8fcf85!2sTilkamanjhi%2C%20Bhagalpur%2C%20Bihar%20812002!5e0!3m2!1sen!2sin!4v1725460338030!5m2!1sen!2sin">
              Tilkamanji
            </option>
            <option  value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.133741144518!2d87.04515669999999!3d25.2442182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0481777eed229%3A0x6f39e4fb5ebf8219!2sSabour%2C%20Bihar%20813210!5e0!3m2!1sen!2sin!4v1725460148354!5m2!1sen!2sin">
              Sabour
            </option>
            <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6944128092264!2d86.73927957400791!3d25.247215629675516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1b7fff77425e5%3A0xd1796f0f268ab27f!2sSultanganj%20Police%20Station!5e0!3m2!1sen!2sin!4v1725461358269!5m2!1sen!2sin">
              Sultanganj
            </option>
          </select>
        </div>
        <div className='word'>
            <div>{cities[city].name}</div>
            <div>Police Chowki : {cities[city].Chwoki}</div>
            <div>Police Man : {cities[city].man}</div>
            <div>Police Jeep : {cities[city].jeep}</div>

        </div>
      </div>
      <div className='button'>
<div className='button1'></div>
<div className='button2'></div>
<div className='button3'></div>
</div>
      <div className="map_container">
        <iframe
          id="mapFrame"
          width="926"
          height="300"
          style={{ border: '5', display: 'none' }}
          allowFullScreen=""
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </div>
  );
}

function changeMap(url) {
  var mapFrame = document.getElementById('mapFrame');
  if (url) {
    mapFrame.style.display = 'block'; // Show the map
    mapFrame.src = url;
  } else {
    mapFrame.style.display = 'none'; // Hide the map if no location is selected
  }
}

export default Moniter;
