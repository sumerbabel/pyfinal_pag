interface propsCard {
    image: string
    text: string
    stars: string
    name: string
}
function CardTestimonial({ image, text, stars, name }: propsCard) {
    return (<div className="ui-card-testimonial">
        <span className="ui-text-card-testimonial">{stars}</span>
        <div className="ui-card-circular">
            <img src={image}></img>
            <span className="ui-text-card-testimonial"><b>{name}</b></span>
        </div>
        <div className="ui-card-main-testimonial">
            <p>
                {text}
            </p>
            </div>
    </div>)

}
export default CardTestimonial