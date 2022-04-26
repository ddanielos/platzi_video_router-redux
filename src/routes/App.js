import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from '../containers/Register';
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => { 
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes> 
            </Layout>
        </BrowserRouter>
    )
}
export default App;