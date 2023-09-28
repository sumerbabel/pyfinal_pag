import { useFormik } from "formik";
import ButtonYellow from "../../components/ButtonYellow"
import * as Yup from "yup";
export interface propRegister{
    onClick:()=>void
    onClickNext?:(contactData:any)=>void
}

function RegisterForm({onClick, onClickNext}:propRegister) {

    const formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            password:'',
            specialRequest:'',
        },
        onSubmit: (values) => {
            console.log('values FORMICK', values)
            handleClickNext(values)
            onClick()
        },
        validationSchema: Yup.object({
            firstName: Yup.date().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            phoneNumber: Yup.string().min(9, "Must be at least 1").max(10, "Must be at most 10").required("Phone number is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().min(4, "Must be at least 4").required("Password is required")
        }),
    });
    
    function handleClickNext(values:any): void {
        onClickNext && onClickNext(values)
    }

    return (
        <>
            <section className="ui-section-title-form">
                <h1>Sign in to collect points</h1>
            </section>
            <section className="ui-section-form">
                <form onSubmit={formik.handleSubmit} >
                    <fieldset>
                        <label htmlFor="FirstName">*First name</label>
                        <input type="text" data-testid="First name"  placeholder="First name" {...formik.getFieldProps("firstName")}  />
                        <span className="ui-error-form">
                                {formik.touched.firstName && formik.errors.firstName}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="LastName">*Last name</label>
                        <input type="text"  data-testid="LastName"  placeholder="Last name" {...formik.getFieldProps("lastName")}/>
                        <span className="ui-error-form">
                                {formik.touched.lastName && formik.errors.lastName}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="PhoneNumber">*Phone Number</label>
                        <input type="text"  data-testid="guests"  placeholder="Phone Number" {...formik.getFieldProps("phoneNumber")}/>
                        <span className="ui-error-form">
                                {formik.touched.phoneNumber && formik.errors.phoneNumber}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="Email"> * Email</label>
                        <input type="text"  data-testid="Email"  placeholder="Email" {...formik.getFieldProps("email")}/>
                        <span className="ui-error-form">
                                {formik.touched.email && formik.errors.email}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="Password"> * Password</label>
                        <input type="password" data-testid="Password" {...formik.getFieldProps("password")} />
                        <span className="ui-error-form">
                                {formik.touched.password && formik.errors.password}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-date">Add a special request (optional)</label>
                        <textarea data-testid="specialRequest" {...formik.getFieldProps("specialRequest")}/>
                    </fieldset>
                    <ButtonYellow ariaLabel="Continue to reservation" name="Continue"></ButtonYellow>
                </form>
            </section>
        </>
    )
}

export default RegisterForm