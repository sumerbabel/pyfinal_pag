import ButtonYellow from "../ButtonYellow"

function About(){
    function handleClick(): void {
        throw new Error("Function not implemented.")
    }

    return(

    <section className="ui-presentation">
        <div className="ui-contend-presentarion">
        <div className="ui-title-presentacion">
            <div className="ui-title-contend">
            <h1 className="ui-title-presentatiion">Little Lemon</h1>
            <h2 className="ui-subtitle-presentation">Chicago</h2>
            <p className="ui-text-presentation">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <ButtonYellow ariaLabel="Go to reservation table page." name="Reserve a Table" onClick={handleClick}></ButtonYellow>
            </div>
        </div>
        </div>
    </section>

    )
}

export default About