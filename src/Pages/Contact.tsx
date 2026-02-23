import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import Logo from "../assets/logo/dpn.png"

export default function Contact() {

    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="bg-[#F8F5F0]">

            {/* ================= HERO ================= */}
            <div className="relative h-[75vh] w-full overflow-hidden">

                {/* Imagen con parallax */}
                <div
                    style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://res.cloudinary.com/dzzdheubl/image/upload/v1771542061/make1_p4cdgl.jpg"
                        alt="Maquillaje artístico"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                {/* Overlay suave */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* Logo más arriba + parallax más lento */}
                <div className="relative h-full flex items-start justify-center pt-12 md:pt-16">

                    <motion.img
                        src={Logo}
                        alt="Logo Diana Portilla"
                        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-72 md:w-[420px]"
                    />

                </div>
            </div>

            {/* ================= TITULO ================= */}
            <div className="py-20 px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-serif text-gray-900"
                >
                    CONTACTO
                </motion.h1>

                <div className="w-24 h-[1px] bg-[#C0847A] mx-auto mt-6"></div>

            </div>

            {/* ================= BLOQUE INFO ================= */}
            <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-16 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Phone className="mx-auto text-[#C0847A]" size={38} />
                    <h3 className="mt-6 text-sm tracking-[0.3em] uppercase text-gray-900">
                        Teléfono
                    </h3>
                    <p className="mt-4 text-gray-600">
                        +593 99 638 9748
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Mail className="mx-auto text-[#C0847A]" size={38} />
                    <h3 className="mt-6 text-sm tracking-[0.3em] uppercase text-gray-900">
                        Email
                    </h3>
                    <p className="mt-4 text-gray-600">
                        contacto@dianaportilla.com
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <MapPin className="mx-auto text-[#C0847A]" size={38} />
                    <h3 className="mt-6 text-sm tracking-[0.3em] uppercase text-gray-900">
                        Ubicación
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Quito – Ecuador
                    </p>
                </motion.div>

            </div>

            {/* ================= FORM ================= */}
            <div className="pb-32 px-6">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl font-serif text-center text-gray-900 mb-16">
                        Reserva tu experiencia
                    </h2>

                    <form className="grid md:grid-cols-2 gap-8">

                        <input
                            type="text"
                            placeholder="Nombre"
                            className="border-b border-gray-400 text-gray-800 placeholder-gray-400 py-3 bg-transparent outline-none focus:border-[#C0847A] focus:placeholder-[#C0847A]/60 transition"
                        />

                        <input
                            type="text"
                            placeholder="Teléfono"
                            className="border-b border-gray-400 text-gray-800 placeholder-gray-400 py-3 bg-transparent outline-none focus:border-[#C0847A] focus:placeholder-[#C0847A]/60 transition"
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="border-b border-gray-400 text-gray-800 placeholder-gray-400 py-3 bg-transparent outline-none focus:border-[#C0847A] focus:placeholder-[#C0847A]/60 transition md:col-span-2"
                        />

                        <textarea
                            placeholder="Mensaje"
                            rows={5}
                            className="border-b border-gray-400 text-gray-800 placeholder-gray-400 py-3 bg-transparent outline-none focus:border-[#C0847A] focus:placeholder-[#C0847A]/60 transition md:col-span-2 resize-none"
                        />

                        <div className="md:col-span-2 text-center mt-12">
                            <button
                                type="submit"
                                className="bg-[#C0847A] text-white px-14 py-4 rounded-full tracking-[0.25em] text-sm hover:bg-[#b3746b] transition duration-300"
                            >
                                ENVIAR
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </section>
    )
}