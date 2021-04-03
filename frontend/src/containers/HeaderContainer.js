import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../styles/header.css';

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
                <p>stay alert, stay sharp</p>
            </div>
        )
    }
}

export default HeaderContainer;

ReactDOM.render(<HeaderContainer/>, document.getElementById("header"));