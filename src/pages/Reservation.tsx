import ButtonYellow from "../components/ButtonYellow"


function Reservation() {
    function handleClick(): void {
        throw new Error("Function not implemented.")
    }

    return (
        <section className="ui-presentation-about" id="about">
            <div className="ui-contend-reservation">
                <section className="ui-section-title-form">
                    <h1>Book Now</h1>
                </section>
                <section className="ui-section-form">
                    <form>

                        <fieldset>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" data-testid="res-date" id="res-date" />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="res-time">Choose time</label>
                            <select data-testid="occasion" id="occasion">
                                <option value="birthday" className="opt">Birthday</option>
                                <option value="engagement" className="opt">Engagement</option>
                                <option value="anniversary" className="opt">Anniversary</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="guests">Number of guests</label>

                            <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="occasion">Occasion</label>
                            <select data-testid="occasion" id="occasion">
                                <option value="birthday" className="opt">Birthday</option>
                                <option value="engagement" className="opt">Engagement</option>
                                <option value="anniversary" className="opt">Anniversary</option>
                            </select>
                        </fieldset>
                        <ButtonYellow ariaLabel="Make Your reservation" name="Make Your reservation" onClick={handleClick}></ButtonYellow>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Reservation