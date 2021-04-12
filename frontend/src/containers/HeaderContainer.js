import React, { Component } from "react";
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
                <div className="header-panel">
                    <span id="header-subtext">stay alert, stay sharp</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="/beans">Coffee</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;
