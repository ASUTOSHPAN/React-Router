import { Route, Routes } from "react-router";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Navbar from "./navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
export default App;