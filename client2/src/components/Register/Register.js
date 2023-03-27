// import { useContext } from "react";
import { Link } from "react-router-dom";

import '../styles/login-register.scss'


// import { useForm } from "../../hooks/useForm";
// import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    // const { onRegisterSubmit } = useContext(AuthContext);
    // const { values, changeHandler, onSubmit } = useForm({
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // }, onRegisterSubmit);

    return (
        <section id="register-section" className="content auth">
            <form id="register" method="post" > {/* onSubmit={onSubmit} */}
                <div className="container">
                    <div className="logo-register"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        // value={values.email}
                        // onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        // value={values.password}
                        // onChange={changeHandler}
                    />

                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        // value={values.confirmPassword}
                        // onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
};