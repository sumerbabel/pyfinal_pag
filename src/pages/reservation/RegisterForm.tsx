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
                        <label htmlFor="FirstName">*First name</label>
                        <input type="text" data-testid="First name"  placeholder="First name"  />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="LastName">*Last name</label>
                        <input type="text"  data-testid="LastName"  placeholder="Last name" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="PhoneNumber">*Phone Number</label>
                        <input type="text"  data-testid="guests"  placeholder="Phone Number" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="Email"> * Email</label>
                        <input type="text"  data-testid="Email"  placeholder="Email" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="Password"> * Password</label>
                        <input type="password" data-testid="Password"  />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-date">Add a special request (optional)</label>
                        <textarea data-testid="specialRequest"/>
                    </fieldset>
                    <ButtonYellow ariaLabel="Continue to reservation" name="Continue" onClick={handleClick}></ButtonYellow>
                </form>
            </section>
        </>
    )
}

export default RegisterForm