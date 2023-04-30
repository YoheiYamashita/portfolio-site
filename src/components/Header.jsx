
	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";
import React from 'react'

const macondoSwashCaps =css`
@import url('https://fonts.googleapis.com/css?family=Macondo+Swash+Caps');`

const menu=css`
font-family:'Macondo+Swash+Caps';

font-size:20px;
list-style:none;


`;

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

`

const Header = () => {
  return (
      <div css={header}className='header'>
          {/* <style>{macondoSwashCaps}</style> */}
        <ul css={headerList}className='headerList'>    
            <li css={logo}className='logo'>YOHEI</li>
            <li css={menu} className='menu'>Home</li>
            <li css={menu} className='menu'>About</li>
            <li css={menu} className='menu'>Works</li>
            <li css={menu} className='menu'>Contact</li>
        </ul>
    </div>
  )
}




export default Header