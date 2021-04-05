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
                <p id="header-subtext">stay alert, stay sharp</p>
                <nav>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Coffee</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;
