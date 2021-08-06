import Cookies from 'js-cookie';

const protect = e =>{
    let access = Cookies.get("user");

    accessToken = await hasAccess(access)
}