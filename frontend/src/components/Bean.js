import React, { Component } from "react";

class Bean extends Component{
    constructor(props){
        super(props);
    }


    render() {
        
        let data = this.props.data;
        
        return (
            <div className="beans-data">
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
            </div>
        )
    }
}

export { Bean };