import { useContext } from "react";

import '../styles/login.scss'

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
        userName: '',
    }, onRegisterSubmit);

    return (

        <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form method="POST" onSubmit={onSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input 
                        type="text" 
                        name="userName" 
                        placeholder="User name" 
                        value={values.userName}
                        onChange={changeHandler}
                        />

                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"  
                        value={values.email}
                        onChange={changeHandler}
                        />

                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={values.pswd}
                        onChange={changeHandler} 
                        />
                        
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        value={values.confirmPassword}
                        onChange={changeHandler}
                        />
                        <button>Sign up</button>
                    </form>
                </div>
        </div>  
    );
};