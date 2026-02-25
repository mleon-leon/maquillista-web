import { motion } from "framer-motion"
import SEO from "../components/SEO.tsx";

const peinados = [
    {
        nombre: "Recogido bajo",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771879760/pe1_s8uzo2.jpg",
        texto:
            "Recogido bajo con trenzado suave y acabado pulido realzando elegancia y naturalidad.",
    },
    {
        nombre: "Semirrecogido con ondas",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771879761/p2_i7tyy1.jpg",
        texto:
            "Semirrecogido con ondas suaves y volumen natural, un estilo perfecto para novias.",
    },
    {
        nombre: "Semirrecogido con ondas largas",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771879762/p5_us7qsu.jpg",
        texto:
            "Semirrecogido con ondas largas y definidas que caen con naturalidad, un estilo sofisticado para peinado nupcial.",
    },
    {
        nombre: "Recogido bajo elegante con textura",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771879759/p4_h1s0z5.jpg",
        texto:
            "Recogido bajo con textura suave y volumen natural, elaborado con mechones entrelazados que crean un acabado sofisticado y delicado, ideal para un estilo elegante y atemporal.",
    },
    {
        nombre: "Ondas sueltas",
        imagen:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771528570/peinado1_vszsjs.jpg",
        texto:
            "Cabello suelto con ondas suaves y definidas que aportan movimiento, elegancia y naturalidad.",
    },

]

export default function Peinado() {
    return (
        <>
            {/* 🔥 SEO PROFESIONAL */}
            <SEO
                title="Peinados para eventos en Quito | Diana Rodríguez"
                description="Servicio de peinados en Quito para eventos especiales, graduaciones y celebraciones. Looks elegantes, duraderos y personalizados."
                url="PENDIENTE"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1771528571/peinado2_tuf1do.jpg"
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
                        Peinado Profesional
                    </h1>

                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
                        Diseños personalizados que complementan tu maquillaje y realzan tu estilo,
                        logrando armonía, estructura y elegancia en cada detalle.
                    </p>
                </motion.div>

                <div className="w-24 h-[1px] bg-[#C0847A] mx-auto mb-32 opacity-40"></div>

                {/* GALERÍA */}
                <div className="space-y-40">

                    {peinados.map((item, index) => {
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
                                            y: -5, // movimiento sutil hacia arriba
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

                                        {/* Overlay suave */}
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
