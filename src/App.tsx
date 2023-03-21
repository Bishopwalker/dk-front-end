import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderTop from "./components/headerTop/HeaderTop";
import Navbar from "./components/navbar/Navbar";
import NavBottom from "./components/navBottom/NavBottom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {useAppSelector} from "./redux/hooks";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
// @ts-ignore
import ClassAppointments from "./components/appointment/ClassAppointments.jsx";

function App() {
const screenTitle = useAppSelector(state => state.title)

	React.useEffect(() => {
		document.title = screenTitle.title? screenTitle.title : 'NNGC'
	}, [screenTitle])
  return (
    <div className="App">
		<HeaderTop />
		<Navbar />
		<NavBottom />
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/appointment" element={<ClassAppointments/>} />
			</Routes>
	    </BrowserRouter>
		<Footer />
    </div>
  )
}

export default App
