import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo =() => {
    return(
    <div  id="div1" style={{width:'150px', height:'110px'}}>
    <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} tiltReverse={true} style={{width:'100%', height:'100%'}}>
      <div >
        <img alt='Logo' src={logo}/>
      </div>
    </Tilt>
    </div>
    );
}

export default Logo;