import { useFormik } from "formik";
import ButtonYellow from "../../components/ButtonYellow"
import * as Yup from "yup";
export interface propRegister{
    onClick:(contactData:any)=>void

}

function RegisterForm({onClick}:propRegister) {

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
            console.log('entraaa')
            onClick(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            phoneNumber: Yup.string().min(9, "Must be at least 1").max(10, "Must be at most 10").required("Phone number is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().min(4, "Must be at least 4").required("Password is required")
        }),
    });
    

    return (
        <>
            <section className="ui-section-title-form">
                <h1>Sign in to collect points</h1>
            </section>
            <section className="ui-section-form">
                <form onSubmit={formik.handleSubmit} >
                    <fieldset>
                        <label htmlFor="FirstName">*First name</label>
                        <input type="text" data-testid="First name"  placeholder="Enter your first name" {...formik.getFieldProps("firstName")}  />
                        <span className="ui-error-form">
                                {formik.touched.firstName && formik.errors.firstName}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="LastName">*Last name</label>
                        <input type="text"  data-testid="LastName"  placeholder="Enter your last name" {...formik.getFieldProps("lastName")}/>
                        <span className="ui-error-form">
                                {formik.touched.lastName && formik.errors.lastName}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="PhoneNumber">*Phone Number</label>
                        <input type="text"  data-testid="guests"  placeholder="Enter your phone number" {...formik.getFieldProps("phoneNumber")}/>
                        <span className="ui-error-form">
                                {formik.touched.phoneNumber && formik.errors.phoneNumber}
                            </span>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="Email"> * Email</label>
                        <input type="text"  data-testid="Email"  placeholder="Enter your email" {...formik.getFieldProps("email")}/>
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
                    <ButtonYellow ariaLabel="Continue to reservation" name="Continue" type='submit'></ButtonYellow>
                </form>
            </section>
        </>
    )
}

export default RegisterForm