import Presentation from "../components/Pesentation"
import About from "../components/sections/About"
import Menu from "../components/sections/Menu"
import Testimonial from "../components/sections/Testimonial"


function Home() {
    return(
        <>
            <Presentation></Presentation>
            <About></About>
            <Testimonial></Testimonial>
            <Menu></Menu>
        </>
    )
}

export default Home