import React, { Component } from "react";
import ReactDOM from "react-dom";
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
        let id = `bean-${beans._id}`;
        let beansComponents = beans.map((bean, index) => {
            //model: {"data":{"_id":2,"name":"bean 2","description":"very nice beans","size":"350 g","price":"20","country":"Uganda"}}
            return(
                <Bean
                    key = {`${id}`}
                    data = {`${bean}`}
                />
            );
        });
        return (
            <div className="beans-container">    
                { beansComponents }
            </div>
        )
    }
}

export default BeansContainer;

ReactDOM.render(<BeansContainer/>, document.getElementById("beanscontainer"));