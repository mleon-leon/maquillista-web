import Hero from "../sections/Hero"
import Servicios from "../sections/Servicios"
import About from "../sections/About"
import Reviews from "../sections/Reviews"
import SEO from "../components/SEO.tsx";

export default function Home() {
    return (
        <>
            <SEO
                title="Diana R. Portilla Makeup"
                description="Maquillaje profesional para novias y eventos sociales en Quito. Elegancia, duración y estilo personalizado."
            />

            <Hero />
            <Servicios />
            <About />
            <Reviews />
        </>
    )
}