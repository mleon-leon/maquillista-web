import { motion } from "framer-motion"
import Logo from "../assets/logo/dp.png"
import VideoHero from "../assets/video/hero.mp4"
import SEO from "../components/SEO.tsx";

export default function Hero() {
    return (
        <>
            <SEO
                title="Diana R. Portilla | Maquillaje Profesional en Quito"
                description="Servicio de maquillaje profesional en Quito para todo tipo de eventos."
                url="https://dkrpmakeup.com/"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1772202352/favicon_sizzkm.png"
            />

        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center bg-[#F8F5F0]"
        >

            {/* Video */}
            <div className="absolute inset-0 rounded-none md:mx-6 md:rounded-3xl overflow-hidden">
                <video
                    src={VideoHero}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />

                {/* Overlay oscuro elegante */}
                <div className="absolute inset-0 bg-black/65"></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 text-center px-6 max-w-5xl">

                {/* Logo */}
                <motion.img
                    src={Logo}
                    alt="Logo Diana Portilla"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{
                        scale: { type: "tween", duration: 0.2 }
                    }}
                    className="mx-auto
                               w-40 sm:w-56 md:w-80 lg:w-96
                               mb-4 cursor-pointer"
                />

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-xl sm:text-3xl md:text-5xl lg:text-6xl
                               tracking-[0.12em] md:tracking-[0.15em]
                               leading-tight
                               text-white uppercase font-medium font-serif"
                >
                    ARTISTA DE MAQUILLAJE PROFESIONAL
                </motion.h1>

                {/* Subtexto */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="mt-6
                               text-sm sm:text-base md:text-lg
                               text-gray-300
                               font-semibold tracking-wide
                               max-w-md sm:max-w-xl md:max-w-3xl
                               mx-auto"
                >
                    Diana, especialista en maquillaje para bodas,
                    sesiones de fotos, modelos y todo tipo de evento.
                </motion.p>

                {/* Botón */}
                <motion.a
                    href="https://api.whatsapp.com/send?phone=996389748&text=."
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block mt-10 sm:mt-12
                               px-8 sm:px-10
                               py-3 sm:py-4
                               bg-[#C0847A] text-white
                               tracking-[0.2em] text-xs sm:text-sm
                               rounded-full transition duration-300
                               hover:bg-[#b3746b]"
                >
                    RESERVAR AHORA
                </motion.a>
            </div>
        </section>
            </>
    )
}
