import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//import { response } from "express";

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
        /*
        axios.get('http://localhost:4000/beans/list').then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data
            });
        });*/
       
        fetch("http://localhost:4000/beans/list")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson.data});
            }
        );
        
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
                                <div key={data._id}>
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
                                </div>
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