// import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout />} />
            </Routes>
        </BrowserRouter>
    )
}

