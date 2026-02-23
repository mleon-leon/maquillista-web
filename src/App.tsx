import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/layout/Navbar"
import Footer from "./sections/Footer"

import Home from "./Pages/Home"
import Bodas from "./Pages/Bodas"
import Social from "./Pages/social"
import Peinado from "./Pages/Peinados"
import Portfolio from "./Pages/Portfolio"
import AboutMe from "./Pages/About-me"
import Contact from "./Pages/Contact"
import Artistico from "./Pages/Artistico.tsx";

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    }, [pathname])

    return null
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />

            <div className="bg-[#F8F5F0] min-h-screen">
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bodas" element={<Bodas />} />
                        <Route path="/social" element={<Social />} />
                        <Route path="/peinado" element={<Peinado />} />
                        <Route path="/portafolio" element={<Portfolio />} />
                        <Route path="/sobre-mi" element={<AboutMe />} />
                        <Route path="/contacto" element={<Contact />} />
                        <Route path="/artistico" element={<Artistico />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}