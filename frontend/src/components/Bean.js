import React, { Component } from "react";

class Bean extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="beans-data">
                return (
                    <div>
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
            </div>
        )
    }
}

export default Bean;