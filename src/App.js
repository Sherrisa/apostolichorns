import * as React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/Navbar";
import FooterComp from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <FooterComp />
    </div>
  );
}

export default App;