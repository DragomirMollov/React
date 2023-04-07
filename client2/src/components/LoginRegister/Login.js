import '../styles/login.scss'

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}; 

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
        
    }, onLoginSubmit);

    return (
        
        <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />
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


