import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Beans extends Component{
    constructor(props){
        super(props);
        this.state = {
            //holds details fetched from the backend
            data:  [],
            //display data when the button is clicked
            buttonClicked: false
        }
        this.getDetails = this.getDetails.bind(this);
    }

    componentDidMount(){
        console.log(`Beans component did mount`);
        axios.get('http://localhost:4000/getData').then((res) => {
            console.log(`got data`);
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }

    getDetails(){
        if(!this.state.buttonClicked){
            console.log(`Button Clicked!`);
            this.setState({
                buttonClicked: true
            })
        }
    }

    render() {
        return (
            <div className="beans-container">         
                <button
                    onClick={this.getDetails}>
                        Click
                </button>
                <div id="data">
                    {this.state.buttonClicked
                        ? this.state.data.map(data => {
                            console.log("data: " + data);
                            return (
                                <React.Fragment>
                                    <p>
                                        {data.name}
                                    </p>
                                    <p>
                                        {data.description}
                                    </p>
                                    <p>
                                        {data.size}
                                    </p>
                                    <p>
                                        {data.price}
                                    </p>
                                    <p>
                                        {data.country}
                                    </p>
                                </React.Fragment>
                            );
                        })
                    : null }
                </div>
            </div>
        )
    }
}

export default Beans;

ReactDOM.render(<Beans/>, document.getElementById("beans"));