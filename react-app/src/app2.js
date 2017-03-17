import React from 'react';
import { render } from 'react-dom';

import { About } from "./about";
import Contact from "./contact";

//render(<About />, document.getElementById("root"));

class App extends React.Component {
    render() {

        return ( < div > < About / >
            < Contact / >

            < /div>

        )
    }
}

render( < App / > , document.getElementById("root"));
