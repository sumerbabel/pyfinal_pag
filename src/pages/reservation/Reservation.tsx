import { useState } from "react"
import RegisterForm from "./RegisterForm"
import ReservationForm from "./ReservationForm"

function Reservation() {
    const [inReserve, srtInReserve] = useState(false)
    const [contactData, SetContactData] = useState({})

    const handleClick=()=>{
        srtInReserve((inreserve)=>{return !inreserve})
    }

    const handleClickRegister=(data:any)=>{
        SetContactData(data)
        handleClick()
    }
    return (
        <section className="ui-presentation-about" id="about">
            <div className="ui-contend-reservation">
                {!inReserve && <RegisterForm onClick={(data)=>handleClickRegister(data)}></RegisterForm>}
                {inReserve && <ReservationForm onClick={handleClick} contactData={contactData}></ReservationForm>}
            </div>
        </section>
    )
}

export default Reservation