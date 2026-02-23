import { Instagram, Phone, MessageCircle } from "lucide-react"
import Logo from "../assets/logo/dp.png"

export default function Footer() {
    return (

        <footer className="bg-[#2B2422] py-8">

            <div className="max-w-6xl mx-auto px-6">

                {/* Mantenemos items-start para fijar el logo arriba */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-start text-center md:text-left gap-8">

                    {/* LOGO */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={Logo}
                            alt="Logo Diana Portilla"
                            className="w-44 md:w-52"
                        />
                    </div>

                    {/* CONTACTO */}

                    <div className="flex flex-col items-center md:items-center space-y-2 mt-4 md:mt-10">

                        <h3 className="text-[#C0847A] tracking-[0.3em] text-sm md:text-base uppercase font-semibold">
                            CONTÁCTAME
                        </h3>

                        <div className="flex items-center gap-2 text-white text-lg md:text-xl font-medium tracking-wide">
                            <Phone size={18} className="text-[#C0847A]" />
                            <span>099 638 9748</span>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://www.instagram.com/dianarportilla?igsh=MTdydmV1aW5maGJzOA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C0847A] transition"
                            >
                                <Instagram size={18} className="text-white" />
                            </a>

                            <a
                                href="https://api.whatsapp.com/send?phone=996389748&text=."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C0847A] transition"
                            >
                                <MessageCircle size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* UBICACIÓN */}
                    <div className="flex flex-col items-center md:items-end space-y-2 mt-4 md:mt-10">
                        <h3 className="text-[#C0847A] tracking-[0.3em] text-sm md:text-base uppercase font-semibold">
                            UBICACIÓN
                        </h3>

                        <p className="text-white text-lg md:text-xl font-medium">
                            Quito – Ecuador
                        </p>
                    </div>

                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-gray-400">
                © 2026 Diana Rodriguez P. Todos los derechos reservados. Diseño y Programación Sol León
            </div>

        </footer>

    )
}