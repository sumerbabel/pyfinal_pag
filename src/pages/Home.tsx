
import About from "../components/sections/About"
import Hero from "../components/sections/Hero"
import Highlights from "../components/sections/Highlights"
import Testimonial from "../components/sections/Testimonial"


function Home() {
    return(
        <>
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonial></Testimonial>
            <About></About>
        </>
    )
}

export default Home