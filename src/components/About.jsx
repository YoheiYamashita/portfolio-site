	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";


import React from 'react'
import aboutBrain from "./image/aboutBrain.jpg"
import aboutParm from "./image/aboutParm.png"



const About = () => {
  return (
    <div css={about}>
    <h1 css={h1}>ABOUT YOHEI</h1>
    <p css={p}>大学では脳科学を研究してました</p>
    <img src={aboutBrain} alt="" width="500px"css={brainPic}/>
    <p css={p}>現在は製薬会社に勤務しています</p>
    <img src={aboutParm} alt="" width="500px"css={parmPic}/>
    </div>
  )
}

const about =css`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:30px
`

const h1 = css`
    margin:100px auto 0;
    border-bottom: #1919199f solid;
`
const p = css`
    margin : 40px auto 5px;
`

const brainPic=css`
    margin:auto;
    max-width:100%;
max-height: 100%;


`

const parmPic=css`
    margin:auto;
    max-width:100%;
max-height: 100%;

`
export default About