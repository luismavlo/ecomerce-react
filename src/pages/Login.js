import React, { useState } from "react";
import { useForm } from "react-hook-form";
import anillos from '../assets/anillos.png';
import { useDispatch } from "react-redux";
import { doLoginThunk } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState("");
    const [ changeLog, setChangeLog] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeLogIn = () => setChangeLog(false);

    const handleChangeLogUp = () => setChangeLog(true);

    const submit = (data) => {
        dispatch(doLoginThunk(data))
            .then(res => {
                navigate('/shop');
            })
            .catch(() => setLoginError("Creadenciales Incorrectas"));    
      };

  return (
      <div className="container-login">
          <div className="content-login">
              <div className="content-motto">
                <p>"No es solo moda, es acompañarte con una buena joya"</p>
                <img src={anillos} alt="img de anillos" />
              </div>
              <div className="content-form-login">
                <div className="option-log">
                    <input type="button" value="Sign In" className="btn-signIn" onClick={handleChangeLogIn}/>
                    <input type="button" value="Sign Up" className="btn-signUp" onClick={handleChangeLogUp}/>
                </div> 
                {
                    changeLog ? (
                        
                        <form action="" onSubmit={handleSubmit(submit)} className="form-login">
                            <div className='input-container'>
                                <label htmlFor="name">NAME</label>
                                <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        {...register("name")}  
                                        required
                                />
                            </div>

                            <div className='input-container'>
                                <label htmlFor="surname">SURNAME</label>
                                <input 
                                        type="text" 
                                        name="surname" 
                                        id="surname" 
                                        {...register("surname")}  
                                        required
                                />
                            </div>
                            
                            <div className='input-container'>
                                <label htmlFor="email">EMAIL</label>
                                <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        {...register("email")}  
                                        required
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="password">PASSWORD</label>
                                <input 
                                    type="password" 
                                    id='password' 
                                    name='password' 
                                    {...register("password")} 
                                    required 
                                />
                            </div>
                            {loginError}
                            <input type="submit" value={'Sign Up'}/>
                        </form>
                    ):(
                        <form action="" onSubmit={handleSubmit(submit)} className="form-login">
                            <div className='input-container'>
                            <label htmlFor="email">EMAIL</label>
                            <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    {...register("email")}  
                                    required
                            />
                            </div>
                            <div className="input-container">
                                <label htmlFor="password">PASSWORD</label>
                                <input 
                                    type="password" 
                                    id='password' 
                                    name='password' 
                                    {...register("password")} 
                                    required 
                                />
                            </div>
                            {loginError}
                            <input type="submit" value={'Sign In'}/>
                        </form>
                    )
                }
              </div>
          </div>
      </div>
      
  );
};

export default Login;
