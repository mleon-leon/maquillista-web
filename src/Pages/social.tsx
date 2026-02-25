import { motion } from "framer-motion"
import SEO from "../components/SEO"

const sociales = [
    {
        nombre: "Maquillaje Social",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771884370/social5_b4unim.jpg",
        texto:
            "Maquillaje social diseñado para eventos especiales, resaltando la mirada y adaptando cada detalle al estilo y personalidad de cada mujer.",
    },
    {
        nombre: "Evento Nocturno",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771524482/social2_ilkmkm.jpg",
        texto:
            "Looks sofisticados y duraderos para celebraciones en la noche, con acabados luminosos y elegantes que permanecen impecables toda la noche.",
    },
    {
        nombre: "Glam Natural",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771524482/social4_takh08.jpg",
        texto:
            "Propuestas equilibradas que realzan la belleza natural con técnicas profesionales que aportan frescura y definición.",
    },
    {
        nombre: "Maquillaje Ojos Ahumados",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1772051549/social06_ai0mdl.jpg",
        texto:
            "Maquillaje elegante y sofisticado que destaca unos intensos ojos ahumados en tonos oscuros, combinados con una piel luminosa y labios en tono nude.",
    },
    {
        nombre: "Evento Especial",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771522901/WhatsApp_Image_2026-02-11_at_8.05.50_PM_qssctj.jpg",
        texto:
            "Cada evento merece un look que transmita seguridad y elegancia, adaptado cuidadosamente al vestuario y la ocasión.",
    },
]

export default function Social() {
    return (
        <>
            <SEO
                title="Maquillaje Social en Quito | Diana Rodríguez"
                description="Servicio de maquillaje social profesional en Quito para eventos especiales, graduaciones y celebraciones. Looks elegantes, duraderos y personalizados."
                url="PENDIENTE"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1771524482/social2_ilkmkm.jpg"
            />

            <section className="bg-[#F8F5F0] pt-32 pb-32 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-24"
                    >
                        <p className="text-sm tracking-[0.35em] text-[#C0847A] uppercase mb-6">
                            Servicio
                        </p>

                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
                            Maquillaje Social
                        </h1>

                        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
                            Diseñado para resaltar tu belleza en eventos especiales,
                            creando un look impactante, elegante y perfectamente adaptado a tu estilo.
                        </p>
                    </motion.div>

                    <div className="w-24 h-[1px] bg-[#C0847A] mx-auto mb-32 opacity-40"></div>

                    {/* GALERÍA */}
                    <div className="space-y-40">
                        {sociales.map((item, index) => {
                            const isEven = index % 2 === 0

                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 80, scale: 1.08 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: false }}
                                        className={`${isEven ? "" : "md:order-2"}`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative overflow-hidden rounded-3xl shadow-2xl group"
                                        >
                                            <img
                                                src={item.imagen}
                                                alt={item.nombre}
                                                className="w-full h-[520px] object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: false }}
                                        className="px-4 md:px-8"
                                    >
                                        <h3 className="text-3xl font-serif text-gray-900 mb-6">
                                            {item.nombre}
                                        </h3>

                                        <div className="w-16 h-[1px] bg-[#C0847A] mb-6 opacity-40"></div>

                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            {item.texto}
                                        </p>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}