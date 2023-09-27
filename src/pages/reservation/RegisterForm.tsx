import ButtonYellow from "../../components/ButtonYellow"

export interface propRegister{
    onClick:()=>void
}

function RegisterForm({onClick}:propRegister) {
    function handleClick(): void {
        onClick()
    }

    return (
        <>
            <section className="ui-section-title-form">
                <h1>Sign in to collect points</h1>
            </section>
            <section className="ui-section-form">
                <form>
                    <fieldset>
                        <label htmlFor="First name">*First name</label>
                        <input data-testid="First name"  placeholder="First name"  />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guests">*Last name</label>
                        <input data-testid="guests"  placeholder="1" min="1" max="10" id="guests" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guests">*Phone Numbe</label>
                        <input data-testid="guests"  placeholder="1" min="1" max="10" id="guests" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guests"> * Email</label>
                        <input data-testid="guests"  placeholder="1" min="1" max="10" id="guests" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-date"> * Password</label>
                        <input type="password" data-testid="res-date" id="res-date" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-date">Add a special request (optional)</label>
                        <textarea data-testid="res-date" id="res-date" />
                    </fieldset>
                    <ButtonYellow ariaLabel="Continue to reservation" name="Continue" onClick={handleClick}></ButtonYellow>
                </form>
            </section>
        </>
    )
}

export default RegisterForm