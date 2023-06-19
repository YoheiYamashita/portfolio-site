/** @jsxImportSource @emotion/react */

import { useRef, useState,  useMemo } from "react";
import emailjs from "@emailjs/browser";
import { css } from "@emotion/react";
import { runes } from "runes2";

const Contact = () => {
  const nameRef = useRef();

  const [value, setValue] = useState();

  const [input, setInput] = useState("");

  //本文の文字数をカウント
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const inputCount = useMemo(() => {
    return runes(input).length;
  }, [input]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_973kswm",
        "template_5bj0kh1",
        nameRef.current,
        "rYrIwGzHVNa3t6g5d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // nameRef.current = "";

    setValue("");

    console.log(nameRef);
  };

  return (
    <div css={contact}>
      <h1 css={h1}>Contact</h1>

      <form ref={nameRef} onSubmit={sendEmail} css={form}>
        <label for="name" css={contTitle}>
          名前
        </label>
        <input type="text" name="name" value={value} />
        <label for="email" css={contTitle}>
          メールアドレス
        </label>
        <input type="email" name="from_email" value={value} />
        <label for="message" css={contTitle}>
          本文
        </label>
        <textarea
          name="message"
          value={input}
          css={messageInput}
          onChange={onChangeInput}
        />
        <div css={Count}>{inputCount}/300</div>
        <div css={submitArea}>
          <button css={submit} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

const contact = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const h1 = css`
  margin: 100px auto 20px;
  border-bottom: #1919199f solid;
`;

const form = css`
  display: flex;
  /* flex-flow: column; */
  flex-direction: column;
  width: 300px;
  justify-content: center;
  margin: 10px auto;
  max-width: 100%;
  max-height: 100%;
`;

const messageInput = css`
  height: 150px;
  /* margin:auto; */
  resize: none;
`;
const submitArea = css`
  text-align: center;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
`;

const submit = css`
  width: 100px;
  text-align: center;
  background-color: #fdf6e9;
  cursor: pointer;
  color: black;
  border: 1px solid #14120e;
  border-radius: 5% / 20%;
  /* &:hover{
        transform: scale(1.1,1.1);
        background-color:#0c0c0c9f;
        color:white;
    } */
`;

const contTitle = css`
  padding: 15px 0 5px 0;
`;
const Count = css`
  margin-bottom: 20px;
  text-align: right;
`;
export default Contact;
