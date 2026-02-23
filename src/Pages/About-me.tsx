import { motion } from "framer-motion"

export default function AboutMe() {
    return (
        <section className="relative bg-[#F8F5F0] pt-32 pb-32 px-6 overflow-hidden">

            {/* Luz radial decorativa */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C0847A]/10 rounded-full blur-[120px] opacity-60"></div>

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-28 items-center">

                {/* IMAGEN */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: false }}
                    className="relative flex justify-center"
                >
                    {/* Blob elegante */}
                    <div className="absolute w-[320px] h-[420px] md:w-[420px] md:h-[520px] bg-[#C0847A]/20 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] blur-sm"></div>

                    {/* Imagen flotante */}
                    <motion.img
                        src="https://res.cloudinary.com/dzzdheubl/image/upload/v1771539261/WhatsApp_Image_2026-02-11_at_9.32.39_PM_qb5flo.jpg"
                        alt="Diana Portilla maquilladora profesional"
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-[280px] md:w-[380px] lg:w-[420px] h-[380px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                </motion.div>

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: false }}
                    className="relative"
                >
                    {/* Línea vertical editorial */}
                    <div className="hidden md:block absolute -left-10 top-0 w-[1px] h-full bg-[#C0847A]/30"></div>

                    <p className="text-sm tracking-[0.35em] text-[#C0847A] uppercase mb-6">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-10 leading-tight">
                        SOY DIANA RODRIGUEZ PORTILLA
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg text-justify">

                        <p>
                            Maquilladora profesional especializada en maquillaje social y de novias,
                            con una propuesta estética que combina técnica, armonía y presencia.
                        </p>

                        <p>
                            Mi enfoque se basa en resaltar la belleza individual de cada mujer
                            a través de un maquillaje cuidadosamente estructurado,
                            donde la piel, la luz y la definición se trabajan con precisión y equilibrio.
                            Creo firmemente que el maquillaje no debe pasar desapercibido,
                            sino expresar elegancia, carácter y seguridad,
                            siempre respetando la esencia de quien lo lleva.
                        </p>

                        <p>
                            Me caracterizo por la responsabilidad, el profesionalismo
                            y la atención minuciosa a los detalles.
                            Comprendo que, especialmente en el caso de una novia,
                            el maquillaje forma parte de uno de los momentos más significativos de su vida;
                            por ello, cada servicio es realizado con dedicación,
                            escucha activa y compromiso absoluto con la excelencia.
                        </p>

                        <p>
                            Mi objetivo es que cada clienta se vea y se sienta en su mejor versión:
                            auténtica, sofisticada y segura.
                        </p>
                    </div>

                    {/* Firma manuscrita sutil */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: false }}
                        className="mt-12"
                    >
                        <p className="font-serif text-2xl text-[#C0847A]/70 italic">
                            Con amor, Diana...
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}