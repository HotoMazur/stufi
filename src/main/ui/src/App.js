import './App.css';
import Registration from "./pages/Registration";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendsList from "./pages/FriendsList";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
    return (
        <div className="App">
            <Router location={{pathname: "/"}}>
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path={"/friendList"} element={<FriendsList/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;