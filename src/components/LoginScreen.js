import React from 'react';
import { startLogin, StartRegister } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2';




export const LoginScreen = () => {


    const [ formLoginValues, handleLoginInputChange ] = useForm( {

        lEmail: 'kevin95@gmail.com',
        lPassword: '123456'

    } );
    
    const { lEmail, lPassword} = formLoginValues;


const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
    
    rName:'marko',
    rEmail: 'marko95@gmail.com',
    rPassword: '123456',
    rPassword2:'123456'
} );

    const {rName, rEmail, rPassword, rPassword2 } = formRegisterValues



const dispatch = useDispatch()

const hadleLogin = (e)=>{
    e.preventDefault();

  //  console.log(lEmail)
    dispatch(startLogin( lEmail, lPassword))
};

const handleRegister = (e)=>{
    e.preventDefault();
   // console.log(rName, rEmail, rPassword, rPassword2)

   if(rPassword!==rPassword2){
       Swal.fire('Error','Las contraseñas no coinciden','error')
   }else{
    dispatch(StartRegister(rName, rEmail, rPassword))
   }

   
}







    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={hadleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword"
                                value={rPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}