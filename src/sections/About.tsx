import { motion } from "framer-motion"


export default function About() {
    return (


        <section className="relative bg-[#F8F5F0] py-24 md:py-36 px-5 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="order-2 md:order-1"
                >
                    <p className="text-xs md:text-sm tracking-[0.3em] text-[#C0847A] uppercase mb-4 md:mb-6 font-[Inter]">
                        Maquilladora Profesional
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 md:mb-8 leading-tight">
                        Belleza que realza tu esencia natural
                    </h2>

                    <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed font-[Inter] text-sm md:text-base">
                        Mi pasión por el maquillaje nace del deseo de resaltar la belleza auténtica
                        de cada mujer. Cada rostro es único, y mi trabajo consiste en crear un look
                        que refleje tu personalidad, elegancia y estilo.
                    </p>

                    <p className="text-gray-600 leading-relaxed font-[Inter] text-sm md:text-base">
                        Desde bodas hasta sesiones editoriales y eventos especiales, ofrezco una
                        experiencia personalizada, cuidando cada detalle para que te sientas
                        segura, radiante y completamente tú.
                    </p>
                </motion.div>


                {/* IMAGEN DESTACADA */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="relative flex justify-center order-1 md:order-2"
                >

                    {/* Blob decorativo RESPONSIVE */}
                    <div className="
                        absolute
                        w-[320px] h-[420px]
                        md:w-[520px] md:h-[620px]
                        bg-[#C0847A]/20
                        rounded-[60%_40%_50%_50%/50%_60%_40%_50%]
                        -rotate-6
                        blur-sm
                    "></div>

                    {/* Imagen principal RESPONSIVE */}
                    <motion.img
                        src="https://res.cloudinary.com/dzzdheubl/image/upload/v1771876495/WhatsApp_Image_2026-02-22_at_2.54.25_PM_2_y87mz8.jpg"
                        alt="Diana Portilla maquilladora profesional"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="
                            relative
                            w-[280px] h-[380px]
                            md:w-[450px] md:h-[600px]
                            object-cover
                            rounded-[60%_40%_50%_50%/50%_60%_40%_50%]
                            shadow-2xl
                        "
                    />

                    {/* Ondas decorativas RESPONSIVE */}
                    <div className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 opacity-40 scale-75 md:scale-100">
                        <svg width="160" height="160" viewBox="0 0 100 100">
                            <path
                                d="M10 60 Q 30 20, 50 60 T 90 60"
                                stroke="#C0847A"
                                strokeWidth="2"
                                fill="transparent"
                            />
                            <path
                                d="M10 70 Q 30 30, 50 70 T 90 70"
                                stroke="#C0847A"
                                strokeWidth="2"
                                fill="transparent"
                            />
                            <path
                                d="M10 80 Q 30 40, 50 80 T 90 80"
                                stroke="#C0847A"
                                strokeWidth="2"
                                fill="transparent"
                            />
                        </svg>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
