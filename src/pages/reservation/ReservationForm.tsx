import ButtonYellow from "../../components/ButtonYellow"
import ButtonBase from "../../components/ButtonBase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavigateFunction, useNavigate } from "react-router-dom";
export interface reserveProp {
    onClick?: () => void
    contactData?:any
}

function ReservationForm({ onClick, contactData }: reserveProp) {

    const navigate: NavigateFunction = useNavigate();
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: "",
            topping: null
        },
        onSubmit: (values) => {
            console.log('values FORMICK', values)
            const response: boolean = submitAPI(values);
            if (response) {
                console.log({contactData:contactData, reserve:values})
                localStorage.setItem("dataRegister", JSON.stringify({contactData:contactData, reserve:values}));
                navigate("/reservation/ReservationConfirmed");
            }
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Date is required"),
            time: Yup.string().required("Time is required"),
            guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
            occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
            topping: Yup.string().required("Seating options is required")
        }),
    });


    function handleClick(event:any): void {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()
        console.log(event)
        onClick && onClick()
    }

    return (
        <>
            <section className="ui-section-title-form">
                <h1>Find a table for any occasion</h1>
            </section>
            <section className="ui-section-form">
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className="ui-field-group">
                        <fieldset>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" data-testid="res-date" id="res-date"  {...formik.getFieldProps("date")} />
                            <span className="ui-error-form">
                                {formik.touched.date && formik.errors.date}
                            </span>

                        </fieldset>
                        <fieldset>
                            <label htmlFor="res-time">Choose time</label>
                            <input type="time" data-testid="res-time" id="res-time"  {...formik.getFieldProps("time")} />
                            <span className="ui-error-form">
                                {formik.touched.time && formik.errors.time}
                            </span>
                        </fieldset>
                    </div>


                    <fieldset>
                        <label htmlFor="guests">Number of Diners</label>
                        <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="res-guests" {...formik.getFieldProps("guests")} />
                        <span className="ui-error-form">
                            {formik.touched.guests && formik.errors.guests}
                        </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="occasion">Occasion</label>
                        <select data-testid="occasion" id="res-occasion" {...formik.getFieldProps("occasion")}>
                            <option value="" className="opt">Select Occasion</option>
                            <option value="birthday" className="opt">Birthday</option>
                            <option value="engagement" className="opt">Engagement</option>
                            <option value="anniversary" className="opt">Anniversary</option>
                        </select>
                        <span className="ui-error-form">
                            {formik.touched.occasion && formik.errors.occasion}
                        </span>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="SeatingOptions">Seating options</label>
                        <div className="ui-radio">
                            <input
                                type="radio"
                                name="topping"
                                value="Standard"
                                id="standard"
                                onChange={formik.handleChange}
                            />
                            <label >Standard</label>
                        </div>
                        <div className="ui-radio">  <input
                            type="radio"
                            name="topping"
                            value="Outside"
                            id="Outside"
                            onChange={formik.handleChange}
                        />
                            <label >Outside</label></div>

                        <span className="ui-error-form">
                            {formik.touched.topping && formik.errors.topping}
                        </span>

                    </fieldset>

                    <ButtonYellow ariaLabel="Make Your reservation" name="Make Your reservation" type="submit"></ButtonYellow>

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

// eslint-disable-next-line react-refresh/only-export-components
export const submitAPI = (formData: { date: string, time: string, guests: number, occasion: string }): boolean => {
    console.log(formData);
    return true;
};