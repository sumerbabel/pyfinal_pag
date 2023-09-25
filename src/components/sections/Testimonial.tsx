import image1 from "../../assets/bruchetta.svg"
import CardTestimonial from "../CardTestimonial"

function Testimonial() {
    return (
        <section className="ui-presentation-testimonial" id="testimonial">
            <div className="ui-contend-presentarion">
                <div className="ui-title-contend-testimonial">
                    <h2>What ours customers say!</h2>
                </div>
                <div className="iu-card-container-about">
                    <CardTestimonial image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        stars="★★★☆☆"
                        name="Jhonn"
                    ></CardTestimonial>
                    <CardTestimonial image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."

                        stars="★★★☆☆"
                        name="Dooer sd"
                    ></CardTestimonial>
                    <CardTestimonial image={image1}
                        text="   The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        name='Hoptiks'
                        stars="★★★☆☆"
                    ></CardTestimonial>
                </div>
            </div>
        </section>
    )
}

export default Testimonial