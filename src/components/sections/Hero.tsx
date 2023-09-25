import imageRestaurantFood from "../../assets/restauranfood.jpg";
import ButtonYellow from "../ButtonYellow";

function Hero() {
    const handleClick =() =>{
console.log('clikrr')
    }
    return (
    <section className="ui-presentation" id="hero">
        <div className="ui-contend-presentarion">
        <div className="ui-title-presentacion">
            <div className="ui-title-contend">
            <h1 className="ui-title-presentatiion">Little Lemon</h1>
            <h2 className="ui-subtitle-presentation">Chicago</h2>
            <p className="ui-text-presentation">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <ButtonYellow ariaLabel="Go to reservation table page." name="Reserve a Table" onClick={handleClick}></ButtonYellow>
            </div>
        </div>
        <div className="ui-image" >
            <img src={imageRestaurantFood} alt="Restaurant Food" />
        </div>
        </div>
      
    </section>
    )
}

export default Hero
