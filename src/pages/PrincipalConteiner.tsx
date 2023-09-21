import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

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