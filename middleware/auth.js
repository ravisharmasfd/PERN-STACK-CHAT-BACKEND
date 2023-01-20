import pool from '../db.js';
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/index.js';
const authMiddleWare = async(req,res,next)=>{
    const {authorization} = req.headers;    
    if(authorization){
        try {
            const authorHead = authorization.split(" ");
            if(authorHead[0] !== 'Bearer'){
                res.status(401).json({msg:"You are not authorize"});
                return;
            }
            const token = authorHead[1];
            const {username} = await jwt.verify(token,jwtSecret);
            
            const findByUsername = await pool.query('SELECT * FROM users WHERE username = $1 ;',[username])
            const data = findByUsername.rows[0]
            req.user = data;
            next();
        } catch (error) {
            res.status(401).json({msg:"You are not authorize"});
        }
    }else{
        res.status(401).json({msg:"You are not authorize"})
    }
}
export default authMiddleWare;