import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771524483/social3_lbikwi.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771524482/social2_ilkmkm.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771528571/peinado2_tuf1do.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771528570/peinado1_vszsjs.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771454621/novia1desp_s938rw.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771454624/novia4desp_frcwrl.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538458/WhatsApp_Image_2026-02-11_at_8.05.56_PM_2_nmmfvc.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538456/WhatsApp_Image_2026-02-11_at_8.05.56_PM_1_i8ul6n.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538455/WhatsApp_Image_2026-02-11_at_8.05.55_PM_xdugn2.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538452/WhatsApp_Image_2026-02-11_at_8.05.54_PM_3_z7kafn.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538450/WhatsApp_Image_2026-02-11_at_8.05.59_PM_3_cco4lk.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538450/WhatsApp_Image_2026-02-11_at_8.05.56_PM_3_kd6dkm.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538450/WhatsApp_Image_2026-02-11_at_8.05.57_PM_fpz3ga.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538055/WhatsApp_Image_2026-02-11_at_8.05.44_PM_4_erjm2w.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538054/WhatsApp_Image_2026-02-11_at_8.05.44_PM_3_a5o4vo.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538053/WhatsApp_Image_2026-02-11_at_8.05.43_PM66_gjfgnt.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538051/WhatsApp_Image_2026-02-11_at_8.05.42_PM_p4lu6a.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538050/WhatsApp_Image_2026-02-11_at_7.58.20_PM99_gdpqlv.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538049/novia4antes_t5nxqo.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538049/WhatsApp_Image_2026-02-11_at_7.58.20_PM88_ineihf.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538047/novia3desp_q0zvot.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538047/novia3.3_vtbfej.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538045/novia2desp_d0xucp.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538046/WhatsApp_Image_2026-02-11_at_8.05.45_PM_1_eaalgk.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538044/novia2antes_d876hr.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538043/novia1antes_zxdrmj.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771538042/bodas-diana_xsyo6r.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537969/WhatsApp_Image_2026-02-11_at_8.05.52_PM_3_tdzhr0.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537969/WhatsApp_Image_2026-02-11_at_8.05.57_PM_2_toq3ze.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537968/WhatsApp_Image_2026-02-11_at_7.58.17_PM4_u93liv.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537967/WhatsApp_Image_2026-02-11_at_7.58.14_PM_roga4f.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537946/self-diana_gf1fm9.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537930/WhatsApp_Image_2026-02-11_at_8.05.53_PM_1_hyy6ou.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771537930/peinado3_vyegnq.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965210/p4_vfehfa.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965210/p5_ktp75x.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965210/p3_igdnfj.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965210/peinado1_p9etax.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965211/p2_jeiuhd.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965211/peina1_wtjy7u.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965211/pe1_r8iefo.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965249/WhatsApp_Image_2026-02-22_at_2.29.55_PM_pzs44k.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965249/WhatsApp_Image_2026-02-22_at_2.41.27_PM_5_hlq8gy.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965249/social2_zjjt2f.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965279/art6_xkzsao.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965280/art2_dadqcm.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965280/art3_szo9rv.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965280/art1_uchhhn.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965282/art4_phpruj.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965291/art5_cwlfpc.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965340/WhatsApp_Image_2026-02-22_at_2.18.52_PM_2_j4azff.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965392/WhatsApp_Image_2026-02-22_at_2.30.05_PM_1_jxluba.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965392/WhatsApp_Image_2026-02-22_at_2.22.09_PM_m2ixx9.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965393/WhatsApp_Image_2026-02-22_at_2.22.11_PM_2_ia6bac.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965395/WhatsApp_Image_2026-02-22_at_2.30.05_PM_2_yqcocm.jpg",
    "https://res.cloudinary.com/dzzdheubl/image/upload/v1771965395/WhatsApp_Image_2026-02-22_at_2.22.12_PM_1_prhntf.jpg"


]

export default function Portfolio() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const nextImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex + 1) % images.length)
    }

    const prevImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex(
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
        )
    }

    return (
        <section className="bg-[#F8F5F0] pt-32 pb-32 px-6">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
                        Portafolio
                    </h1>
                </div>

                {/* GRID COLLAGE */}
                <div className="columns-2 md:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            onClick={() => setSelectedIndex(index)}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                            className="w-full rounded-2xl cursor-pointer shadow-md break-inside-avoid"
                        />
                    ))}
                </div>

            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {/* Close */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-6 right-6 text-white"
                        >
                            <X size={32} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={prevImage}
                            className="absolute left-6 text-white"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={images[selectedIndex]}
                            src={images[selectedIndex]}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                        />

                        {/* Next */}
                        <button
                            onClick={nextImage}
                            className="absolute right-6 text-white"
                        >
                            <ChevronRight size={40} />
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}