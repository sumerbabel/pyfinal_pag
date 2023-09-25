import marioAdrianA from "../../assets/Mario_and_Adrian_A.jpg"
import marioAdrianB from "../../assets/Mario_and_Adrian_b.jpg"
function About() {
    return (
        <section className="ui-presentation-about">
            <div className="ui-contend-about">
                <section className="ui-section-title">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                </section>
                <section className="ui-section-text">
                    <p>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to
                        the United States to pursue their shared dream of owning a restaurant.
                    </p>
                    <p>To craft the menu, Mario relies on family recipes and his experience as a chef
                        in Italy. Adrian does all the marketing for the restaurant and led the effort to
                        expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                </section>
                <section >
                    <div className="ui-section-img">
                        <div className="ui-conten-img">
                            <img src={marioAdrianA} />
                            <img src={marioAdrianB} />
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default About