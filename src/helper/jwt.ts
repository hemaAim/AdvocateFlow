
import {expressjwt} from 'express-jwt'
export function authJWT(){
    const secret = "TESTE";

    return  expressjwt({

        secret,
        algorithms:['HS256']

    }).unless({path: [
        {url:'/api/v2/token', methods: ['POST']}
    ]})
} 

