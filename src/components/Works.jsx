/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import comingsoon from "./image/comingsoon.png";
import todoList from "./image/todoList.png";

const Works = () => {
  return (
    <div css={works}>
      <h1 css={h1}>Works</h1>

      <div css={workList}>
        <a
          href="https://yoheiyamashita.github.io/todolist-react-portfolio/"
          css={work1}
        >
          <img
            src={todoList}
            alt="todoList"
            width="300"
            height="200"
            css={picWork1}
          />
          <h2 css={h2}>Todoリスト</h2>
          <p css={p}>Reactで作成しました</p>
        </a>

        <div css={work1}>
          <img
            src={comingsoon}
            alt="comingsoon"
            width="300"
            height="200"
            css={picWork1}
          />
          <h2 css={h2}>現在作成中</h2>
          <p css={p}>現在作成中</p>
        </div>
      </div>
    </div>
  );
};

const works = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const workList = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
`;

const work1 = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 50px;
  text-decoration: none;
  text-decoration-color: black;
`;
const picWork1 = css`
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid black;
`;

const h1 = css`
  margin: 100px auto 40px;
  border-bottom: #1919199f solid;
`;

const h2 = css`
  margin: 10px auto 5px;
  font-size: 1.5rem;
`;
const p = css`
  margin: auto;
`;
export default Works;
