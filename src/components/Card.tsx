import image1 from "../assets/bruchetta.svg"
import iconDelivery from "../assets/Recent.svg"

function Card() {
    return(  <div className="ui-card">
    <div className="ui-card-header">
        <img src={image1}></img>
    </div>
    <div className="ui-card-main">
        <p>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
        </p>

    </div>
    <div className="ui-card-footer">
        <span>
            Order a delivery <img src={iconDelivery}></img>
        </span>
    </div>
</div>)

}
export default Card