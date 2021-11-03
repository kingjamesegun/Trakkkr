import { userTypes } from '../actionTypes';
import trakkerapi from '../api'

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));

//         userService.register(user)
//             .then(
//                 user => { 
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(alertActions.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(user) { return { type: userTypes.REGISTER_REQUEST, user } }
//     function success(user) { return { type: userTypes.REGISTER_SUCCESS, user } }
//     function failure(error) { return { type: userTypes.REGISTER_FAILURE, error } }
// }

export const register =()=>{
    return async function(dispatch, getStae){
        const response = await trakkerapi.post('/user/register/');
        try {
            dispatch({
                type: userTypes.REGISTER_SUCCESS,
                payload: response
            })
            
        } catch (error) {
            dispatch({
                type: userTypes.REGISTER_FAILURE,
                payload: response
            })
        }
    }
}

export const userActions = {
    register
}