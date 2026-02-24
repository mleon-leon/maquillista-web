import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const servicios = [
    {
        titulo: "Bodas",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4/v1770916698/bodas-diana_w92eg4.jpg",
        link: "/bodas",
    },
    {
        titulo: "Social",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771874356/WhatsApp_Image_2026-02-22_at_2.29.56_PM_1_fsijnl.jpg",
        link: "/social",
    },
    {
        titulo: "Peinado",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771954947/peina1_z9frv0.jpg",
        link: "/peinado",
    },
    {
        titulo: "Artistico",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771875816/art1_jzxpzs.jpg",
        link: "/artistico",
    },
]

export default function Servicios() {
    return (
        <section
            id="servicios"
            className="bg-[#F5F3EF] py-20 md:py-32 px-5 md:px-8"
        >
            {/* Título */}
            <div className="text-center mb-14 md:mb-20">
                <h2 className="text-3xl md:text-6xl font-serif text-gray-700">
                    Servicios
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicios.map((servicio, index) => (
                    <Link key={index} to={servicio.link}>

                        <motion.div
                            className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-none aspect-[3/4]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Imagen */}
                            <motion.img
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Overlay centrado elegante */}
                            <div
                                className="
      absolute inset-0 flex items-center justify-center
      bg-black/20 sm:bg-black/0
      sm:group-hover:bg-black/50
      transition duration-500
    "
                            >
    <span
        className="
        text-white text-2xl md:text-3xl font-serif tracking-wide
        opacity-100 sm:opacity-0
        sm:group-hover:opacity-100
        transition duration-500
      "
    >
      {servicio.titulo}
    </span>
                            </div>
                        </motion.div>

                    </Link>
                ))}
            </div>
        </section>
    )
}