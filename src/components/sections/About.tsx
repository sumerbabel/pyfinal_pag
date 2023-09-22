import ButtonYellow from "../ButtonYellow"
import Card from "../Card"



function About() {
    function handleClick(): void {
        throw new Error("Function not implemented.")
    }

    return (

        <section className="ui-presentation-two">
            <div className="ui-contend-presentarion">

                <div className="ui-title-contend-about">
                    <h1>This weeks specials!</h1>
                    <div style={{ width: '12rem' }}><ButtonYellow ariaLabel="Go to Online Menu page." name="Online Menu" onClick={handleClick}></ButtonYellow></div>

                </div>
                <div className="iu-card-container-about">
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                </div>

            </div>
        </section>

    )
}

export default About