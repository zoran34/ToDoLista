import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    render() {
        return (<h1>Hello from React, Webpack and Babel!</h1>);
    }

}

ReactDOM.render(<App />, document.getElementById("app"));