import ButtonYellow from "../../components/ButtonYellow"
import ButtonBase from "../../components/ButtonBase";

export interface reserveProp {
    onClick?: () => void
}

function ReservationForm({ onClick }: reserveProp) {

    function handleClick(event): void {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()
        console.log(event)
        onClick && onClick()
    }

    const handleClickReserve = (event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()
        console.log(event)
        console.log('RESERVE')
    }

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()
    }



    return (
        <>
            <section className="ui-section-title-form">
                <h1>Find a table for any occasion</h1>
            </section>
            <section className="ui-section-form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="ui-field-group">
                        <fieldset>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" data-testid="res-date" id="res-date" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="res-time">Choose time</label>
                            <input type="time" data-testid="res-time" id="res-time" />
                        </fieldset>
                    </div>


                    <fieldset>
                        <label htmlFor="guests">Number of Diners</label>
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

                    <fieldset>
                        <label htmlFor="SeatingOptions">Seating options</label>
                        <div className="ui-radio">
                            <input
                                type="radio"
                                name="topping"
                                value="Standard"
                                id="standard"
                            />
                            <label >Standard</label>
                        </div>
                        <div className="ui-radio">  <input
                            type="radio"
                            name="topping"
                            value="Outside"
                            id="Outside"
                        />
                            <label >Outside</label></div>

                    </fieldset>

                    <ButtonYellow ariaLabel="Make Your reservation" name="Make Your reservation" onClick={(event) => handleClickReserve(event)}></ButtonYellow>

                </form>
            </section>
            <div className="ui-back">
                <div>
                    <ButtonBase ariaLabel="Back page" name="Go back" onClick={(event) => handleClick(event)} />
                </div>

            </div>
        </>

    )
}

export default ReservationForm