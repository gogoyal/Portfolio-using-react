import "./App.css";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
// import Home from "./home"
import Landing from "./landing";


function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/landing" element={<Landing />}></Route>

        </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
