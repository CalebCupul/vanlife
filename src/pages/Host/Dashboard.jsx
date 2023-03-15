import { Outlet } from "react-router-dom"

function Dashboard(){
    return (
        <div>
            <h1>Dashbord</h1>
            <Outlet/>
        </div>
    )
}

export default Dashboard