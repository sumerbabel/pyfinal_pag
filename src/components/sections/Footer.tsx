import footerImage from "../../assets/restaurant.jpg"

function Footer() {
    return (
        <footer className="ui-presentation-footer">
            <div className="ui-contend-presentarion">
                <div className="ui-image-footer">
                    <img src={footerImage} />
                </div>

                <div className="ui-item-footer">
                    <h4>Little Lemon</h4>
                    <ul><li> <a href="/little-lemon">Home</a> </li>
                    <li> <a href="/little-lemon">Menu</a> </li>
                    <li> <a href="/little-lemon/bookings">Reservations</a> </li>
                    <li> <a href="/little-lemon">Order Online</a> </li>
                    <li> <a href="/little-lemon">Login</a> </li>
                    </ul>
                    </div>
                <div className="ui-item-footer">
                    <h4>Contact</h4>
                <ul><li><address><p>Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois 60602 USA </p></address>
                </li><li> <a href="tel:+551199999999" target="_blank" rel="external">+55 11 9999-9999</a> </li>
                <li> <a href="mailto:contact@littlelemon.com" target="_blank" rel="external">contact@littlelemon.com</a> </li>
                </ul>
                </div>
                <div className="ui-item-footer"><h4>Social Media</h4>
                <ul><li> <a href="https://www.facebook.com/littlelemon" target="_blank" rel="external">Facebook</a> </li>
                <li> <a href="https://www.instagram.com/littlelemon" target="_blank" rel="external">Instagram</a> </li>
                <li> <a href="https://twitter.com/littlelemon" target="_blank" rel="external">Twitter</a> </li></ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer