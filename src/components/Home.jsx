/** @jsxImportSource @emotion/react */

import React from 'react'
import {css} from "@emotion/react";
import Tennis from './image/tennis.png';
import laptop from './image/laptop.jpg';

const Home = () => {
  return (
    <div css={home}>
      <p css={p}>YOHEIのポートフォリオサイトです</p>
      <img src={laptop} alt="picture" srcset="" css={logo} height="300px" width="700px"/>
      <div>テスト1</div>

    </div>
  )
}

const home = css`
display:flex;
flex-direction:column;
justify-content:space-around;

`

const p =css`
  margin:auto;
`

const logo =css`
/* margin-right: 200px;
margin-left: auto; */


/* display:block; */
margin:auto;
`


export default Home