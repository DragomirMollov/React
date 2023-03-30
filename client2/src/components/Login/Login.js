import { Link } from "react-router-dom";

import '../styles/login-register.scss'
import '../styles/login.scss'

// import { useAuthContext } from "../../contexts/AuthContext";
// import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = ({
    // auth,
}) => {
    // const { onLoginSubmit } = auth;
    // const { onLoginSubmit } = useAuthContext();
    // const { values, changeHandler, onSubmit } = useForm({
    //     [LoginFormKeys.Email]: '',
    //     [LoginFormKeys.Password]: '',
    // }, onLoginSubmit);

    return (
        // <section id="login-section" classNameName="auth">
        //      <form id="login" method="POST" > {/*onSubmit={onSubmit}*/}
        //         <div classNameName="container">
        //             <div classNameName="logo-login"></div>
        //             <h1>Login</h1>
        //             <label htmlFor="email">Email:</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 placeholder="Sokka@gmail.com"
        //                 name={LoginFormKeys.Email}
        //                 // value={values[LoginFormKeys.Email]}
        //                 // onChange={changeHandler}
        //             />``

        //             <label htmlFor="pass">Password:</label>
        //             <input
        //                 type="password"
        //                 id="login-password"
        //                 name={LoginFormKeys.Password}
        //                 // value={values[LoginFormKeys.Password]}
        //                 // onChange={changeHandler}
        //             />
        //             <input type="submit" classNameName="btn submit" value="Login" />
        //             <p classNameName="field">
        //                 <span>If you don't have profile click <Link to="/register">here</Link></span>
        //             </p>
        //         </div>
        //     </form>
        // </section>


        <div className="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Login</button>
                    </form>
                </div>
	    </div>
    );
}

// export default withAuth(Login);



