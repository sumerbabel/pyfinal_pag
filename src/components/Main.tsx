
interface propMain {
    children:JSX.Element|JSX.Element[] 
}

function Main({children}:propMain){

    return(<main className="ui-main">
        {children}
    </main>)
}
export default Main