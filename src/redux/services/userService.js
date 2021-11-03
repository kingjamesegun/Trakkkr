
import { authHeader } from '../_helpers';

export const userService = {
    register,
};



const register= (user) =>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const user =  await axios.get(`https://trakkkr.herokuapp.com/user/register/`)
    return user;
}
