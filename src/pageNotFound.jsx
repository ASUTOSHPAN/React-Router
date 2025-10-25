import { Link } from "react-router";

function PageNotFound(){
    return(
        <div style={{textAlign:"center"}}>
            <h1>Page Not Found</h1>
            <Link to="/home" >Go To Home Page</Link>
        </div>
    )
}
export default PageNotFound;