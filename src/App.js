	/** @jsxImportSource @emotion/react */

  import {css} from "@emotion/react";


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

      <Home />
      <About/>
      <Works/>
      <Contact/>
      </div>
    </div>
  );
}

const main = css`
/* margin-left:200pt; */
margin:0 auto;
`

export default App;
