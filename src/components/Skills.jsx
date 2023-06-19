/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import htmlIcon from "./image/html-icon.png";
import cssIcon from "./image/css-icon.png";
import jsIcon from "./image/javascript-icon.png";
import reactIcon from "./image/react-icon.png";
const skills = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* flex-wrap:wrap; */
  width:100%;
`;

const disc = css`
  text-align:center;
  font-size:1.1rem;
  margin:10px 0 20px 0;

`
const br = css`
  display:block;
  content:"";
  margin:15px;
`

const h1 = css`
  margin: 100px auto 30px;
  border-bottom: #1919199f solid;
`;

const skillList = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
  width:100%;
  padding:0;


`;

const skill = css`
  width: 150px;
  margin: 0 20px;
  text-decoration: none;
  text-decoration-color: black;
  text-align: center;
  list-style: none;
  
`;

const icon=css`
  height:100px;
  width:100px;
`

const h2 = css`
  margin: 10px auto 5px;
  font-size: 1.5rem;
`;

const Skills = () => {
  return (
    <div css={skills}>

      <h1 css={h1}>Skills</h1>

      <span css={disc}>2022年12月より勉強をスタートし<br css={br}/>以下の言語を修得しています<br css={br}/>（現在も日々勉強中です）</span>
      <ul css={skillList}>
        <li css={skill}>
          <img src={htmlIcon} css={icon} alt="" />
          <h2 css={h2}>HTML</h2>
        </li>

        <li css={skill}>
          <img src={cssIcon} css={icon} alt="" />
          <h2 css={h2}>CSS</h2>
        </li>
        <li css={skill}>
          <img src={jsIcon} css={icon} alt="" />
          <h2 css={h2}>JavaScript</h2>
        </li>

        <li css={skill}>
          <img src={reactIcon} css={icon} alt="" />
          <h2 css={h2}>React</h2>
        </li>

      </ul>
    </div>
  );
};

export default Skills;
