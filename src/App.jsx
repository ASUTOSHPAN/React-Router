import { Route, Routes } from "react-router";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Navbar from "./navbar";
import PageNotFound from "./pageNotFound";
import College from "./college";
import Student from "./student";
import Department from "./department";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PageNotFound />} />
                <Route path="/college" element={<College />}>
                    <Route path="student" element={<Student />} />
                    <Route path="department" element={<Department />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App;