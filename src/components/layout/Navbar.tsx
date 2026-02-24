import { useEffect, useState } from "react"
import {Link} from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // 🔥 NUEVO: cerrar menú al hacer scroll
            if (menuOpen) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [menuOpen])


    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-black/95 backdrop-blur-md border-b border-white/10"
                    : "bg-black/80 backdrop-blur-md"
            }`}
        >
            <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">

                {/* Marca */}
                <div className="font-serif text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.35em] text-white font-medium whitespace-nowrap">
                    DIANA RODRIGUEZ PORTILLA{" "}
                    <span className="hidden sm:inline text-gray-400">
                        | MAQUILLAJE & PEINADO
                    </span>
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex gap-10 lg:gap-12 font-sans text-sm tracking-[0.15em] text-gray-200">

                    <Link
                        to="/"
                        className="hover:text-[#C0847A] transition duration-300"
                    >
                        INICIO
                    </Link>

                    <Link
                        to="/portafolio"
                        className="hover:text-[#C0847A] transition duration-300"
                    >
                        PORTAFOLIO
                    </Link>

                    <Link
                        to="/sobre-mi"
                        className="hover:text-[#C0847A] transition duration-300"
                    >
                        SOBRE MÍ
                    </Link>

                    <Link
                        to="/contacto"
                        className="hover:text-[#C0847A] transition duration-300"
                    >
                        CONTACTO
                    </Link>

                </nav>


                {/* Botón hamburguesa Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className="w-6 h-[2px] bg-white"></span>
                    <span className="w-6 h-[2px] bg-white"></span>
                    <span className="w-6 h-[2px] bg-white"></span>
                </button>
            </div>

            {/* Menú Mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center gap-6 py-6 bg-black/95 backdrop-blur-md text-gray-200 tracking-[0.15em] text-sm">

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#C0847A] transition"
                    >
                        INICIO
                    </Link>

                    <Link
                        to="/portafolio"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#C0847A] transition"
                    >
                        PORTAFOLIO
                    </Link>

                    <Link
                        to="/sobre-mi"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#C0847A] transition"
                    >
                        SOBRE MÍ
                    </Link>

                    <Link
                        to="/contacto"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#C0847A] transition"
                    >
                        CONTACTO
                    </Link>

                </div>
            </div>
        </header>
    )
}
