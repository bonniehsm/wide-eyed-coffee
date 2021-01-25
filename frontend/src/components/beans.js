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

    coponentDidMount(){
        axios.get('http://localhost:4000/getData').then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    getDetails(){
        if(!this.state.buttonClicked){
            this.setState({
                buttonClicked: true
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <button
                            onClick={this.getDetails}>
                                Click
                        </button>
                        <div>
                            {this.state.buttonClicked
                                ? this.state.data.map(data => {
                                    return (
                                        <React.Fragment>
                                            <p>
                                                {data.name}
                                            </p>
                                            <p>
                                                {data.description}
                                            </p>
                                        </React.Fragment>
                                    );
                                })
                            : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beans;

ReactDOM.render(<Beans/>, document.getElementById("root"));