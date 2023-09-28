import { useState } from "react"
import RegisterForm from "./RegisterForm"
import ReservationForm from "./ReservationForm"

function ReservationConfirmed() {
    const [inReserve, srtInReserve] = useState(false)
    const [contactData, setContactData] = useState(null)

    const handleClick=()=>{
        srtInReserve((inreserve)=>{return !inreserve})
    }

    return (
        <section className="ui-presentation-about" id="about">
            <div className="ui-contend-reservation">
                {!inReserve && <RegisterForm onClick={handleClick}></RegisterForm>}
                {inReserve && <ReservationForm onClick={handleClick} contactData={contactData}></ReservationForm>}
            </div>
        </section>
    )
}

export default ReservationConfirmed