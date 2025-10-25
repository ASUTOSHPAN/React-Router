import { Link, Outlet } from "react-router";

function College() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>College</h1>
            <div className="nav2">
                <Link className="stud" to="student">Students</Link>
                <Link className="depart" to="department">Department</Link>     
            </div>
            <Outlet/>

        </div>
    )
}
export default College;