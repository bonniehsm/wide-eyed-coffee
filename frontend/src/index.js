import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer"
import BeansContainer from "./containers/BeansContainer";

export default function App() {
    return(
        <BrowserRouter>
            <HeaderContainer/>
            <Route path="/beans" component={BeansContainer}/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));