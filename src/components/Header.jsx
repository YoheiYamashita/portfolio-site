
	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";
import React from 'react'
import './style.css';
import { Link } from 'react-scroll';
import {useRef} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";


const macondoSwashCaps =css`
@import url('https://fonts.googleapis.com/css?family=Macondo+Swash+Caps');`



const Header = () => {
  
const breakPoint = 830;

const headerList=css`
  display:flex;
  justify-content:space-between;
`

const menuList=css`
margin:0px 0px 0px 200px;
padding:0 ;
display:flex  ;
flex-direction:row;
justify-content:space-around;
align-items:end;
max-width:500pz;


@media  screen and (max-width:${breakPoint}px){
  
    position: fixed;  
    margin:0;
    top: 0vh;
		right:-100%;
		height: 100%;
    max-width:none;
		width:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
    background-color: rgb(213, 177, 129);
    transition:1s;

  &.responsive_nav{
    right:0%;

  } 

  li.menu{
    margin:0;
  }
}
;
`


const navCloseBtn=css`
  visibility:hidden;
  opacity: 0;
  color:#eee;
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

    @media screen and (max-width:${breakPoint}px){
      opacity: 1;
      visibility:visible;
      color:black;
      
      }
`
const navBtn=css`
  visibility:hidden;
  opacity: 0;
  color:#eee;
  padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
  

    @media screen and (max-width:${breakPoint}px){
      opacity: 1;
      visibility:visible;
      color:black;
      
      }
`

const header = css`
background-color: rgb(222, 194, 157);
position:sticky;
top:0;
line-height:50px;
width:100%;
align-items:center;
`
const logo = css`
list-style:none;
font-size:1.5rem ;
font-weight: 650;
text-decoration: underline;
text-decoration-color: #ffffff;
text-underline-offset:0.5rem;
padding:0px 5px 0px 0px;
color: #ffffff;
font-family:Verdana		;
`

  const navRef = useRef();

	const showNavbar = () => {
    navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
   return (
      
      <div css={header}className='header'>   
        
        <ul >   
           <div css={headerList}className='headerList'>
            
            <li css={logo}className='logo'>YOHEI</li>
            
            <div css={menuList}　ref={navRef}>
              
              <button className="nav-btn nav-close-btn" css={navCloseBtn}
              onClick={showNavbar}>
                <FaTimes/>
              </button>
              <li className='menu'><Link to="home" smooth={true} duration={700} offset={-70} onClick={showNavbar}>Home</Link></li>
              <li  className='menu'><Link to="about" smooth={true} duration={700}onClick={showNavbar}>About</Link></li>
              <li  className='menu'><Link to="works" smooth={true} duration={700} onClick={showNavbar}>Works</Link></li>
              <li  className='menu'><Link to="contact" smooth={true} duration={700} onClick={showNavbar}>Contact</Link></li>
                        
            </div>

            <button
              className="nav-btn" css={navBtn}
              onClick={showNavbar}>
              <FaBars />
			      </button>
            
            </div>

        </ul>
 

    </div>
  )
}





export default Header