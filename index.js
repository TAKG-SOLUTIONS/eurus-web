import ReactDom from "react-dom"
import  App from "./App"
import "./index.css"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Register from "./components/register/Register";
import Loging from "./components/header/Loging";
import Signup from "./components/register/Signup";
import {UserAuthContextProvider} from "./components/context/UserAuthContex";
ReactDom.render(
    <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<App/>}/>
          <Route path={"loging"} element={<Loging/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signup"} element={<Signup/>}/>

      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);