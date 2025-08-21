import "./App.css";
import VarUpdate from "./components/VarUpdate";
import ArrayUpdate from "./components/ArrayUpdate";
import ObjectUpdate from "./components/ObjectUpdate";
import ArrayOfObj from "./components/ArrayOfObj";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>  

      <Navbar />
      
      <Routes>
        <Route path="/" element={<VarUpdate />} />
        <Route path="/arrayupdate" element={<ArrayUpdate />} />
        <Route path="/objectupdate" element={<ObjectUpdate />} />
        <Route path="/arrayofobject" element={<ArrayOfObj />} />

      </Routes>
    </Router>
  );
}

export default App;
