import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Contact_Us from "./components/Contact_Us";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <Header/>
     <About/>
     <Shop/>
    <Menu/>
    <Contact_Us/>
    <Footer/>
    </>
  );
}

export default App;
