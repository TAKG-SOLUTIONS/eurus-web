import ReactDom from "react-dom/client"
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
import SignIn from "./components/register/SignIn";
import Trade from "./components/trade/Trade";
import CoinTrade from "./components/candlestick/CoinTrade";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<App/>}/>
          <Route path={"loging"} element={<Loging/>}/>
          <Route path={"register"} element={<Register/>}/>
          <Route path={"signup"} element={<Signup/>}/>
          <Route path={"signin"} element={<SignIn/>}/>
          <Route path={"trade"} element={<Trade/>}/>
          <Route path={"chart"} element={<CoinTrade/>}/>
      </Routes>
    </BrowserRouter>,
    //document.getElementById('root')
);