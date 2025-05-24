import { BrowserRouter, Links, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage/Home";
import { Bootstrap } from "../pages/bootstrap/bootstrap-index";

function Rotas(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/bootstrap" element={<Bootstrap />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas