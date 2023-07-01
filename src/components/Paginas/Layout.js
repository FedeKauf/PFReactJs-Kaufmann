import { Outlet } from "react-router-dom"
import NavBar from "../Navbar/NavBar"

function Layout() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Layout;