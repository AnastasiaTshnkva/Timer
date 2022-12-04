import React from "react";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    font-family: 'open sans', arial, helvetica, sans-serif;
    font-weight: 400;
    font-size: 18/20px;
    background: linear-gradient(30deg, rgb(1, 1, 98), rgba(0, 0, 255, 0) 75%),
    linear-gradient(90deg, rgba(66, 1, 166, 0.8), rgba(0, 0, 255, 0) 75%),
    linear-gradient(130deg, rgba(255, 0, 98, 0.93), rgba(255, 0, 0, 0) 75%),
    linear-gradient(190deg, rgb(255, 170, 42), rgba(255, 0, 0, 0) 50%),
    linear-gradient(210deg, rgb(250, 250, 250), rgba(255, 0, 0, 0) 75%),
    linear-gradient(240deg, rgba(0, 253, 221, 0.8), rgba(255, 0, 0, 0) 75%);
    color: white;
  }
`

const GlobalStyleWrapper = (props) => {
    return (
        <React.Fragment>
                <GlobalStyle/>
                {props.children}
        </React.Fragment>
    )
}

export default GlobalStyleWrapper;