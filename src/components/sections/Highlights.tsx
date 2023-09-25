import ButtonYellow from "../ButtonYellow"
import Card from "../Card"

import image1 from "../../assets/bruchetta.svg"

function Highlights() {
    function handleClick(): void {
        throw new Error("Function not implemented.")
    }
    return (
        <>
        <div id="highlights"></div>
        <section className="ui-presentation-two" >
            <div className="ui-contend-presentarion">
            
                <div className="ui-title-contend-about">
                    <h1>This weeks specials!</h1>
                    <div style={{ width: '12rem' }}><ButtonYellow ariaLabel="Go to Online Menu page." name="Online Menu" onClick={handleClick}></ButtonYellow></div>
                </div>
                <div className="iu-card-container-about">
                    <Card image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        footerText="Order a delivery " ></Card>
                    <Card image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        footerText="Order a delivery " ></Card>
                    <Card image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        footerText="Order a delivery " ></Card>
                </div>
            </div>
        </section>
        </>
       
    )
}

export default Highlights