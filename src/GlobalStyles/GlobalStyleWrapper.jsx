import React from "react";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    body {
      margin: 0 auto;
      min-height: 100vh;
      font-family: 'open sans',arial,helvetica,sans-serif;
      font-weight: 400;
      font-size: 18/20px;
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