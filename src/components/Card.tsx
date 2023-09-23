import iconDelivery from "../assets/Recent.svg"
interface propsCard {
    image: string
    text: string
    footerText: string
}
function Card({ image, text, footerText }: propsCard) {
    return (<div className="ui-card">
        <div className="ui-card-header">
            <img src={image}></img>
        </div>
        <div className="ui-card-main">
            <p>
                {text}
            </p>
        </div>
        <div className="ui-card-footer">
            <span>
                {footerText}
                <img src={iconDelivery}></img>
            </span>
        </div>
    </div>)

}
export default Card