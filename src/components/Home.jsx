/** @jsxImportSource @emotion/react */

import React from 'react'
import {css} from "@emotion/react";
import Tennis from './image/tennis.png';
import laptop from './image/laptop.jpg';

const Home = () => {
  return (
    <div css={home}>
      
      <p css={p}>YOHEIのポートフォリオサイトです</p>
      <img src={laptop} alt="picture" srcset="" css={logo}  />


    </div>
  )
}

const home = css`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:100px;
 
`

const p =css`
  margin:auto;
  padding-bottom:20px;
`

const logo =css`
/* margin-right: 200px;
margin-left: auto; */


/* display:block; */
margin:auto;
width:700px;
height:300px;
max-width:100%;
max-height: 100%;
`


export default Home