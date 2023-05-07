
	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";
import React from 'react'
import './style.css';
import { Link } from 'react-scroll';


const macondoSwashCaps =css`
@import url('https://fonts.googleapis.com/css?family=Macondo+Swash+Caps');`

// const menu=css`
// font-family:'Macondo+Swash+Caps';

// font-size:20px;
// list-style:none;


// `;

const headerList=css`
display:flex;
justify-content: space-around;

`
const header = css`
background-color: rgb(220, 191, 154);
position:sticky;
top:0;
line-height:50px;
`
const logo = css`
list-style:none;
font-size:30px
font

`

const Header = () => {
  return (
      <div css={header}className='header'>
          {/* <style>{macondoSwashCaps}</style> */}
        <ul css={headerList}className='headerList'>    
            <li css={logo}className='logo'>YOHEI</li>
            <li className='menu'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li  className='menu'>About</li>
            <li  className='menu'>Works</li>
            <li  className='menu'>Contact</li>
        </ul>
    </div>
  )
}




export default Header