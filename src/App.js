	/** @jsxImportSource @emotion/react */

  import {css} from "@emotion/react";

  import { Element } from 'react-scroll';

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Header/>
      <div css={main}>
      <Element name="home">
      <Home />
      </Element>
      <Element name="about">
      <About/>
      </Element>

      <Element name="works">
      <Works/>
      </Element>

      <Element name="contact">
      <Contact/>
      </Element>
      </div>
    </div>
  );
}

const main = css`
/* margin-left:200pt; */
margin:0 auto;
`

export default App;
