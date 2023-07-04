import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUsers from "./CRUD/CreateUsers";
import Anisraj from "./Components/Anisraj";
import HomeCrud from "./CRUD/HomeCrud";
import Users from "./CRUD/Users";
import EditUsers from "./CRUD/EditUsers";
import NavBar from "./Singlepageweb/NavBar";
import Explore from "./Singlepageweb/Explore";
import Menu from "./Singlepageweb/Menu";
import HireTalents from "./Singlepageweb/HireTalents";
import Challenges from "./Singlepageweb/Challenges";
import Button from "./Singlepageweb/Button";
import Logo from "./Singlepageweb/Logo";

const App=()=> {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Button/>
            <Menu/>
            <Logo/>
            <Routes>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/hire" element={<HireTalents/>}/>
                <Route path="/challenge" element={<Challenges/>}/>
            </Routes>
            </BrowserRouter>
            {/* <Anisraj/> */}
            {/* <BrowserRouter>
            <HomeCrud/>
            <Routes>
                <Route path="/createuser" element={<CreateUsers/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path='/editusers/:index' element={<EditUsers/>}/>
            </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default App
