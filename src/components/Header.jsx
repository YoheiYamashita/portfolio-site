
	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";
import React from 'react'
import './style.css';
import { Link } from 'react-scroll';


const macondoSwashCaps =css`
@import url('https://fonts.googleapis.com/css?family=Macondo+Swash+Caps');`


const headerList=css`
margin:0 auto;
padding:0;
display:flex  ;
flex-direction:row;
justify-content:space-around;
width:500px;

@media  (max-width:500px){
  //500px以下になったら
  width:100%;
}
width:500px;


;
`
const header = css`
background-color: rgb(220, 191, 154);
position:sticky;
top:0;
line-height:50px;
width:100%;

`
const logo = css`
list-style:none;
font-size:20px ;
font-weight: 650;
/* display:inline-block; */
/* border-bottom: 1px solid; */
text-decoration: underline;
text-decoration-color: #362b01;
text-underline-offset:0.5rem;
padding:0px 5px 5px 20px;





`

const Header = () => {
  return (
      <div css={header}className='header'>
          {/* <style>{macondoSwashCaps}</style> */}
        <ul css={headerList}className='headerList'>    
            <li css={logo}className='logo'>YOHEI</li>
            <li className='menu'><Link to="home" smooth={true} duration={700} offset={-70}>Home</Link></li>
            <li  className='menu'><Link to="about" smooth={true} duration={700} >About</Link></li>
            <li  className='menu'><Link to="works" smooth={true} duration={700} >Works</Link></li>
            <li  className='menu'><Link to="contact" smooth={true} duration={700} >Contact</Link></li>
        </ul>
    </div>
  )
}




export default Header