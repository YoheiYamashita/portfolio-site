/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import laptop from "./image/laptop.jpg";

const Home = () => {
  return (
    <div css={home}>
      <p css={p}>YOHEIのポートフォリオサイトです<br css={br}/>是非楽しんでいってください</p>
      <img src={laptop} alt="laptop" srcset="" css={logo} />
    </div>
  );
};

const home = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const p = css`
  margin: auto;
  padding-bottom: 30px;
  text-align:center;
`;

const br = css`
  display:block;
  content:"";
  margin:10px;
`

const logo = css`
  margin: auto;
  width: 700px;
  height: 300px;
  max-width: 100%;
  max-height: 100%;
`;

export default Home;
