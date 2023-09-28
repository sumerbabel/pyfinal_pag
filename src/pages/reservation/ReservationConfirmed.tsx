import { NavigateFunction, useNavigate } from "react-router-dom";
import ButtonYellow from "../../components/ButtonYellow"


function ReservationConfirmed() {
    const navigate: NavigateFunction = useNavigate();

   const data:string =localStorage.getItem('dataRegister')
    const dataRegister = JSON.parse(data);
    function handleGoto(): void {
        navigate("/");
    }

    return (
        <section className="ui-presentation-about" id="about">
            <div className="ui-contend-reservation">
              <div className="ui-card-confirmed">

                <span>First Name:&nbsp; {dataRegister.contactData.firstName}</span>
                <span>Last Name:&nbsp; {dataRegister.contactData.lastName}</span>
                <span>Phone Number:&nbsp;{dataRegister.contactData.phoneNumber}</span>
                <span>Email:&nbsp;{dataRegister.contactData.email}</span>
                <span>Special Request:&nbsp;{dataRegister.contactData.specialRequest}</span>
                <span>Date:&nbsp;{dataRegister.reserve.date}</span>
                <span>Time:&nbsp;{dataRegister.reserve.time}</span>
                <span>Guests:&nbsp;{dataRegister.reserve.guests}</span>
                <span>Occasion: &nbsp;{dataRegister.reserve.occasion}</span>
                <span>Topping: &nbsp;{dataRegister.reserve.topping}</span>
                
                <ButtonYellow ariaLabel="Go to homa" name="Go to Home" type={undefined} onClick={handleGoto}/>
              </div>
            </div>
        </section>
    )
}

export default ReservationConfirmed