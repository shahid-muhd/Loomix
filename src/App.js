import "./App.css";
import React from "react";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import AboutPage from "./Pages/About/AboutPage";
import Footer from "./Components/Navbar/Footer/Footer";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    }
  ]);
  
  return (
    <div className="App">
 <Navbar/>
  <RouterProvider router={router} />
        
   <Footer/>
    </div>
  );
}

export default App;
