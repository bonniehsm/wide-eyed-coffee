import React, { Component } from "react";
import ReactDOM from "react-dom";

class HeaderContainer extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(`HeaderContainer did mount`);
    }
    render(){
        return(
            <div className="header-container">
                <h1>Wide-Eyed Coffee</h1>
            </div>
        )
    }
}

export default HeaderContainer;

ReactDOM.render(<HeaderContainer/>, document.getElementById("headercontainer"))