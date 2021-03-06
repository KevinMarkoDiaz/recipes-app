import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const startLogin =  (email, password)=>{

    return async (dispatch)=>{

        

        const resp = await fetchSinToken('auth', {email, password}, 'POST');
        const body = await resp.json();

        if(body.ok){

            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch(login({
                uid:body.uid,
                name:body.name
            }))

        
        }else{
            Swal.fire('Error', body.msg, 'error')
        }
    }
};


export const StartRegister = (name, email, password)=>{
    return async(dispatch)=>{

        const resp = await fetchSinToken('auth/register', {name, email, password}, 'POST');
        const body = await resp.json();

        if(body.ok){

            localStorage.setItem('token', body.token); 
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch(register({
                uid:body.uid,
                name:body.name
            }))

        
        }else{
            Swal.fire('Error', body.msg, 'error')
        }




    }


};



export const startCheking = ()=>{

    return async (dispatch)=>{

        const resp = await fetchConToken('auth/renew' );
        const body = await resp.json();

        if(body.ok){

            localStorage.setItem('token', body.token); 
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch(register({
                uid:body.uid,
                name:body.name
            }))

        
        }else{
            Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        }


    }


}

const checkingFinish = ()=>({

    type: types.authCheckingFinish

}
)

const register = (user)=>({

    type: types.authRegister,
    payload: user

})

const login = (user)=>({
    type: types.authLogin,
    payload: user

})