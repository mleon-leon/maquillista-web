import { motion } from "framer-motion"
import { useState } from "react"
import SEO from "../components/SEO.tsx";
import TapIcon from "../assets/icons/tap.png"

const novias = [
    {
        nombre: "Glenda",
        antes:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454621/novia1antes_ftbuhi.jpg",
        despues:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454621/novia1desp_s938rw.jpg",
        texto:
            "Glenda eligió un maquillaje en tonos café con sombra satinada dorada y transición cobre, complementado con un elegante recogido con trenza y un delicado tocado. Su historia de propuesta fue tan emotiva como original, y su boda fue la oportunidad perfecta para revivir ese momento tan especial con recuerdos inolvidables.",
    },
    {
        nombre: "Gaby",
        antes:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454621/novia2antes_nef0rc.jpg",
        despues:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454621/novia2desp_tglt6k.jpg",
        texto:
            "Con Gaby el proceso fue mágico desde la prueba. Cuando se vio con tonos lavanda supo que ese era su color. Su peinado recogido, acompañado de un tocado colocado como delicada diadema, completó un look romántico y perfectamente armonizado.",
    },
    {
        nombre: "Dianita",
        antes:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771455832/novia333_ryg0pm.jpg",
        despues:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454622/novia3desp_zktpxg.jpg",
        texto:
            "Con Dianita exploramos dos propuestas durante la prueba: tonos rosados y tonos tierra. Aunque los rosados eran su zona cómoda, decidió apostar por los tierra. El resultado fue un sofisticado cut crease que realzó su mirada y transformó completamente su estilo.",
    },
    {
        nombre: "Estefy",
        antes:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454622/novia4antes_ksltyq.jpg",
        despues:
            "https://res.cloudinary.com/dzzdheubl/image/upload/f_auto,q_auto,c_fill,ar_3:4,g_auto/v1771454624/novia4desp_frcwrl.jpg",
        texto:
            "Momentos antes de su boda, Estefy lució un maquillaje sutil y atemporal que resaltó la frescura y luminosidad de su piel. Las ondas sueltas con semirrecogido y un delicado tocado enmarcaron su cabello rubio, logrando un look elegante y natural.",
    },
    {
        nombre: "Vane",
        antes:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771881801/novia_rosa1_rl025t.jpg",
        despues:
            "https://res.cloudinary.com/dzzdheubl/image/upload/v1771881802/novia_rosa_yje4jc.jpg",
        texto:
            "Ella es la hermosa y admirable, Vane me encantó conocerla no solo porque ama los animales sino porque es una mujer inteligente que trabaja las Fuerza Aérea del Ecuador. Durante la prueba de maquillaje y peinado conversamos de todos sus gustos hasta llegar al estilo perfecto para su boda.",
    },
]

export default function Bodas() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [touchedIndex, setTouchedIndex] = useState<number | null>(null)

    return (
        <>
            <SEO
                title="Maquillaje de Novias en Quito | Diana Rodríguez"
                description="Servicio de maquillaje para novias profesional en Quito. maquillajes elegantes, duraderos y personalizados."
                url="https://dkrpmakeup.com/"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1772202352/favicon_sizzkm.png"
            />

            <section className="bg-[#F8F5F0] pt-32 pb-32 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1 }}
                        className="text-center mb-24"
                    >
                        <p className="text-sm tracking-[0.35em] text-[#C0847A] uppercase mb-6">
                            Servicio
                        </p>

                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
                            Maquillaje para Bodas
                        </h1>

                        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
                            Cada novia tiene una historia única. Mi misión es interpretar esa esencia
                            y convertirla en un estilo que la haga sentirse segura, radiante y auténtica
                            en uno de los días más importantes de su vida.
                        </p>
                    </motion.div>

                    <div className="w-24 h-[1px] bg-[#C0847A] mx-auto mb-32 opacity-40"></div>

                    {/* GALERÍA */}
                    <div className="space-y-40">

                        {novias.map((novia, index) => {
                            const isEven = index % 2 === 0
                            const isHovered = hoveredIndex === index

                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >
                                    {/* IMAGEN BEFORE/AFTER */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: false }}
                                        className={`${isEven ? "" : "md:order-2"}`}
                                    >
                                        <div
                                            className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            onClick={() => {
                                                setHoveredIndex(isHovered ? null : index)
                                                setTouchedIndex(index)
                                            }}
                                        >
                                            <motion.img
                                                src={novia.antes}
                                                alt={`${novia.nombre} antes`}
                                                animate={{ opacity: isHovered ? 0 : 1 }}
                                                transition={{ duration: 0.6 }}
                                                className="absolute inset-0 w-full h-[520px] object-cover"
                                            />

                                            <motion.img
                                                src={novia.despues}
                                                alt={`${novia.nombre} después`}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-full h-[520px] object-cover"
                                            />

                                            {/* Indicador Mobile con Ícono */}
                                            {touchedIndex !== index && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none"
                                                >
                                                    <motion.img
                                                        src={TapIcon}
                                                        alt="Tocar imagen"
                                                        animate={{ scale: [1, 1.1, 1] }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                        className="w-14 h-14 opacity-80"
                                                    />
                                                </motion.div>
                                            )}

                                        </div>
                                    </motion.div>

                                    {/* TEXTO */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: false }}
                                        className="px-4 md:px-8"
                                    >
                                        <h3 className="text-3xl font-serif text-gray-900 mb-6">
                                            {novia.nombre}
                                        </h3>

                                        <div className="w-16 h-[1px] bg-[#C0847A] mb-6 opacity-40"></div>

                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            {novia.texto}
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