import axios from "axios";
import {GET_AUTH} from '../actions/types'

const initialState = {
    isAdmin: false,
    isLogged: false,
    isChecked: false
};

const auth = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'SET_LOGIN':
            console.log(action.payload)
            axios.post('http://localhost:3001/login', { login: action.payload.login, password: action.payload.password}
            ).then(res => {
                if (!res.data.token) {
                    alert("Nie poprawne dane")
                }
                else{
                    localStorage.setItem('jwtToken', res.data.token)
                    window.location.reload();
                }
            })
            return state

        case GET_AUTH:
          if(action.payload.islogin === true){
              if(action.payload.User_Type.User_Type_id === 1){
                  return {
                      ...state,
                      isAdmin: true,
                      isLogged: true,
                      isChecked: true
                  }  }
              if(action.payload.User_Type.User_Type_id === 2){
                  return {
                      ...state,
                      isAdmin: false,
                      isLogged: true,
                      isChecked: true
                  }  }
          }

                  else return{
              ...state,
              isChecked: true
          }


                  break;
        default: return state;
    }
}



export default auth