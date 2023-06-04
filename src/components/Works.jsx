	/** @jsxImportSource @emotion/react */

    import {css} from "@emotion/react";


import React from 'react'
import Work1 from './image/work1.png'

const Works = () => {
  return (
    <div css={works}>
        <h1 css={h1}>Works</h1>
        <div css={work1}>
            <img src={Work1} alt="picture" width="300" css={picWork1}/>
        <h2 css={h2}>現在作成中</h2>
        <p css={p}>現在作成中</p>
        </div>

    </div>
  )
}

const  works = css`
    display:flex;
    justify-content:center;
    flex-direction: column;
`


const work1=css`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
margin:auto;
`
const picWork1 =css`
    margin:auto;
    max-width:100%;
max-height: 100%;

`

const h1 =css`
    margin:100px auto 30px;
    border-bottom: #1919199f solid;

`

const h2 =css`
    margin:10px auto 5px;
    font-size:1.5rem;
`
const p =css`
    margin:auto;
`
export default Works