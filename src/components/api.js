import axios from "axios";



export const  instance = ()=>axios.create({
    baseURL: 'https://trakkkr.herokuapp.com/',
    timeout: 1000,
    headers: {
        "Authorization" : "Token b90f2dda637140eb06590b6773f0fe68002",
        'X-Custom-Header': 'foobar',
    }
  })    