import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/sections/Footer"

interface propContainer {
    children: JSX.Element | JSX.Element[]
}
function PrincipalConteiner({ children }: propContainer) {
    return (<div className="ui-principal-container" >
        <Header />
        <Main>{children}</Main>
        <Footer />
    </div>)
}

export default PrincipalConteiner