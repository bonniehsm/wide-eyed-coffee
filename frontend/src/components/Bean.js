import React, { Component } from "react";

class Bean extends Component{
    constructor(props){
        super(props);
    }


    render() {
        
        let bean = this.props.data;
        let link = bean._id 
                    + "-" 
                    + bean.name.toString()
                                .toLowerCase()
                                .replace(" ", "-");

        console.log(link);


        return (
            <div className="beans-data">
                <a href="#"> 
                    <div>
                        <p>
                            {bean.name}
                        </p>
                        <p>
                            {bean.description}
                        </p>
                        <p>
                            {bean.size}
                        </p>
                        <p>
                            {bean.price}
                        </p>
                        <p>
                            {bean.country}
                        </p>
                    </div>
                </a>               
            </div>
        )
    }
}

export { Bean };