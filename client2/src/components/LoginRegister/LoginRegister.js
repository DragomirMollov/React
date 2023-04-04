import '../styles/login.scss'

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const LoginRegister = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        
        <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form method="POST">
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name"  />
                        <input type="email" name="email" placeholder="Email"  />
                        <input type="password" name="pswd" placeholder="Password"  />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                        <button onClick={onSubmit}>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form method="POST">
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input 
                        type="email"
                        placeholder="Email" 
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                        />
                        <input 
                        type="password"
                        placeholder="Password" 
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                        />
                        <button onClick={onSubmit}>Login</button>
                    </form>
                </div>
        </div>
       
       
    );
}


