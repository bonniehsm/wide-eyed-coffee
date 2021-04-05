import React, { Component } from "react";
import { Bean } from "../components/Bean";

class BeansContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            //holds details fetched from the backend
            data:  [],
        }
    }

    componentDidMount(){
        console.log(`Beans Container component did mount`);
        /*
        axios.get('/beans/list').then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data
            });
        });*/
       
        fetch("/beans/list", {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson.data});
            }
        );
        
    }


    render() {
        const beans = this.state.data;
        let beansComponent;

        if(beans.length > 0){
            beansComponent = beans.map(bean => 
                //model: {"data":{"_id":2,"name":"bean 2","description":"very nice beans","size":"350 g","price":"20","country":"Uganda"}}
                (
                    <Bean
                        key = {`bean-${bean._id}`}
                        data = { bean }
                    />
                )
            );
        }

        return (
            <div className="beans-container">   
                { beansComponent != undefined ? beansComponent : null }
            </div>
        )
    }
}

export default BeansContainer;