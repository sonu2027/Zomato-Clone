import { Routes, Route } from "react-router-dom"
import HomePage from "../routecomponent/homepage/HomePage"
import LoginPage from "../routecomponent/loginpage/LoginPage"

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/login/loggedin/:status" element={<HomePage/>} />
        </Routes>
    )
}
export default CustomRoutes