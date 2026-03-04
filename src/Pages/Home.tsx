import Hero from "../sections/Hero"
import Servicios from "../sections/Servicios"
import About from "../sections/About"
import Reviews from "../sections/Reviews"
import SEO from "../components/SEO.tsx";

export default function Home() {
    return (
        <>
            <SEO
                title="Diana R. Portilla | Maquillaje Profesional en Quito"
                description="Servicio de maquillaje profesional en Quito para eventos especiales, graduaciones y celebraciones. Looks elegantes, duraderos y personalizados."
                url="https://dkrpmakeup.com/"
                image="https://res.cloudinary.com/dzzdheubl/image/upload/v1772655361/logorosa-01_nj0y8o.jpg"
            />

            <Hero />
            <Servicios />
            <About />
            <Reviews />
        </>
    )
}