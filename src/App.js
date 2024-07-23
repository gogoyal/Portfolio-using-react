import "./App.css";
import "bootstrap";
import Weather from "./weather"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Weather/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home/>}></Route> */}
         
               </Routes>
      </BrowserRouter>

    </>
    
    
    
  );
}

export default App;
