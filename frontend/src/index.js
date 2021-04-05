import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer"
import BeansContainer from "./containers/BeansContainer";

export default function App() {
    return(
        <BrowserRouter>
            <HeaderContainer/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));