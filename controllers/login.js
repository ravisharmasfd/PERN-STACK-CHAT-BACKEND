import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/index.js';
const loginController = async(req,res)=>{
    const {username,password} = req.body;
    const userExist = await pool.query('SELECT * FROM users WHERE username = $1 ;',[username])
    if(userExist.rowCount > 0){
        const data = userExist.rows[0];
        const match = await bcrypt.compare(password, data.password);
        if(match){
            const payLoad = {
                username : data.username,
                id : data.id,
              }
              const token = jwt.sign(payLoad, jwtSecret);
              delete data.password;
              res.json({ message: "All Ok", token, user:data});
        }else{
            res.status(401).json({msg : "check your details"})
        }
    }else{
        res.status(400).json({msg: "check your details"})
    }
}
export default loginController;