import { motion } from "framer-motion"
import SEO from "../components/SEO"

const artistico = [
    {
        nombre: "Maquillaje Artístico Editorial",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771883675/art5_zoq9sg.jpg",
        texto:
            "Propuesta artística con enfoque editorial, donde el color y la expresión se fusionan para crear una imagen impactante y llena de personalidad, ideal para sesiones creativas y producciones visuales.",
    },
    {
        nombre: "Maquillaje Fantasía Creativa",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771883674/art4_ijtgwc.jpg",
        texto:
            "Diseño de maquillaje fantasía con detalles cuidadosamente elaborados, combinando técnica, precisión y creatividad para lograr un acabado visualmente poderoso y original.",
    },
    {
        nombre: "Maquillaje artístico Sombrerero Loco",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771883672/art3_y8ts3h.jpg",
        texto:
            "Maquillaje artístico inspirado en el Sombrerero Loco, con piel porcelana, contrastes de color en los ojos y detalles teatrales que crean un personaje fantástico, expresivo y lleno de personalidad.",
    },
    {
        nombre: "Caracterización Artística",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771883671/art6_l5eenw.jpg",
        texto:
            "Trabajo de caracterización que transforma y redefine el rostro mediante técnicas profesionales, logrando un resultado creativo ideal para fotografía, eventos temáticos o producciones especiales.",
    },
    {
        nombre: "Maquillaje vikingo artístico",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771883670/art2_u49uzj.jpg",
        texto:
            "Maquillaje de inspiración vikinga con ojos intensos en tonos oscuros, detalles gráficos y puntos decorativos que evocan la estética guerrera nórdica, creando un look fuerte, místico y lleno de carácter.",
    },
]

export default function Artistico() {
    return (
        <>
            {/* 🔥 SEO PROFESIONAL */}
            <SEO
                title="Maquillaje Artístico en Quito | Diana Rodríguez"
                description="Servicio de maquillaje artístico y creativo en Quito para producciones editoriales, sesiones fotográficas y eventos temáticos. Propuestas únicas y de alto impacto visual."
                url="PENDIENTE"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1771883675/art5_zoq9sg.jpg"
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
                            Maquillaje Artístico
                        </h1>

                        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
                            Propuestas creativas que transforman el maquillaje en arte,
                            combinando técnica profesional, expresión visual y detalles únicos
                            para lograr resultados impactantes.
                        </p>
                    </motion.div>

                    <div className="w-24 h-[1px] bg-[#C0847A] mx-auto mb-32 opacity-40"></div>

                    {/* GALERÍA */}
                    <div className="space-y-40">
                        {artistico.map((item, index) => {
                            const isEven = index % 2 === 0

                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >

                                    {/* IMAGEN */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 80, scale: 1.05 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: false }}
                                        className={`${isEven ? "" : "md:order-2"}`}
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.03,
                                                y: -5,
                                            }}
                                            transition={{ duration: 0.6 }}
                                            className="relative overflow-hidden rounded-3xl shadow-2xl group"
                                        >
                                            <img
                                                src={item.imagen}
                                                alt={item.nombre}
                                                className="w-full h-[520px] object-cover"
                                            />

                                            {/* Light Sweep */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: "-120%" },
                                                    hover: { x: "120%" },
                                                }}
                                                initial="rest"
                                                whileHover="hover"
                                                transition={{ duration: 0.9, ease: "easeInOut" }}
                                                className="absolute inset-0 bg-gradient-to-r
                                                    from-transparent
                                                    via-white/25
                                                    to-transparent
                                                    rotate-12"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                        </motion.div>
                                    </motion.div>

                                    {/* TEXTO */}
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