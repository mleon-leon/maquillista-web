import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"

const reviews = [
    {
        text: "Dianita me emocionó ver las fotos de la boda, gracias por su cariño y trabajo ! Mi familia quedó encantada con el maquillaje y su profesionalismo! Gracias por el cariño 🥰",
        name: "Glenda Benavides",
    },
    {
        text: "Quería agradecerle por todo lo que hizo por nosotros, créame que me sentí fascinada con sus servicios. 100% recomendada, le juro que me enamoré. Gracias por todo, siga adelante que es una excelente profesional!",
        name: "J. Alvarado",
    },
    {
        text: "Estimada Diana le agradezco el maquillaje y peinado, sé que son horas de trabajo y nos encantó, mi familia está consultando su contacto para un evento para el mes de diciembre!",
        name: "Tatiana Navas",
    },
    {
        text: "Muchas gracias mi Dianita por todo, que Dios te bendiga siempre. Se que puse a mi hija en manos de una persona muy especial para nosotras y lo hiciste con todo el amor, y con un gran profesionalismo. Mi maquillaje me encantó 💕",
        name: "Diana Gómez y Allison Montesdeoca",
    },
    {
        text: "Mi Diana bella, te escribo para agradecerte por todo lo que hiciste por mí de verdad estoy feliz todos miraban y decían estas hermosa, les encantó tu maquillaje. Definitivamente 👌 una gran profesional",
        name: "Janeth",
    },
    {
        text: "Hola Dianita buenos días! muchas gracias por toda tu ayuda el día de ayer la verdad que el maquillaje estuvo excelente, no tuve ningún problema y me duró todas las horas que nunca imaginé!... Un gusto conocerte Dianita, muy profesional como te dije y ya voy a recomendarte con todas mis amigas, un abrazo!",
        name: "Ana Vila",
    },
    {
        text: "No quería dejar pasar mi agradecimiento hacia usted y su impecable trabajo!! Estuve hermosa toda la noche, el peinado y maquillaje quedaron intactos a pesar de que lloré y que todos me abrazaban, no sabe cuán agradecida estoy con usted, todas las novias en su día especial deberían tener una cómplice tan linda y profesional! Gracias por darme paz en todo momento! le mando un abrazo gigantesco.",
        name: "Cami Vizcaino",
    },
]

export default function Reviews() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-24 bg-[#F3EFEA] overflow-hidden">

            {/* Header */}
            <div className="text-center mb-16 px-6">
                <p className="text-sm tracking-[0.3em] text-[#C0847A] uppercase mb-4 font-[Inter]">
                    Reviews
                </p>
                <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
                    Mis clientes
                </h2>
            </div>

            <div className="relative w-full">

                {/* Flecha izquierda (Desktop) */}
                <button
                    onClick={scrollPrev}
                    className="hidden md:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-30
                               w-14 h-14 items-center justify-center
                               rounded-full bg-white shadow-xl
                               text-2xl text-[#C0847A]
                               hover:scale-110 transition"
                >
                    ‹
                </button>

                {/* Flecha derecha (Desktop) */}
                <button
                    onClick={scrollNext}
                    className="hidden md:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-30
                               w-14 h-14 items-center justify-center
                               rounded-full bg-white shadow-xl
                               text-2xl text-[#C0847A]
                               hover:scale-110 transition"
                >
                    ›
                </button>

                <div className="max-w-7xl mx-auto px-6 md:px-20">

                    <div className="overflow-hidden py-16" ref={emblaRef}>
                        <div className="flex gap-6 md:gap-10">

                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex-[0_0_100%]
                                        sm:flex-[0_0_80%]
                                        md:flex-[0_0_45%]
                                        lg:flex-[0_0_30%]
                                    "
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.04 }}
                                        transition={{ duration: 0.3 }}
                                        className="
                                            h-[380px]
                                            md:h-[420px]
                                            bg-white/60 backdrop-blur-md
                                            border border-white/30
                                            p-8 md:p-10
                                            rounded-3xl
                                            shadow-md
                                            flex flex-col justify-between text-center
                                        "
                                    >
                                        {/* Estrellas */}
                                        <div className="flex justify-center gap-1 text-[#C0847A]">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 leading-relaxed font-[Inter] mt-6 text-sm md:text-base line-clamp-6">
                                            “{review.text}”
                                        </p>

                                        <p className="font-semibold text-gray-900 font-[Inter] mt-6 text-sm md:text-base">
                                            {review.name}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Flechas Mobile debajo */}
                <div className="flex justify-center gap-6 mt-6 md:hidden">
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full bg-white shadow-md text-xl text-[#C0847A]"
                    >
                        ‹
                    </button>

                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full bg-white shadow-md text-xl text-[#C0847A]"
                    >
                        ›
                    </button>
                </div>

            </div>
        </section>
    )
}