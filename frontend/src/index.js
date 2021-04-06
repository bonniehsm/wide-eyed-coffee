import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import BeansContainer from "./containers/BeansContainer";
import { Bean } from "./components/Bean";

export default function App() {
    return(
        <BrowserRouter>
            <HeaderContainer/>
            <Route path="/" exact component={HomeContainer}/>
            <Route path="/beans" component={BeansContainer}/>
            <Route path="/replacelater" component={Bean}/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));