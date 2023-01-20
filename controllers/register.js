import pool from "../db.js";
import { saltNumber } from "../config/index.js";
import bcrypt from 'bcrypt';
const registerController = async(req,res)=>{
    const {username,name,password} = req.body;
    
    try{
        if (username === undefined || password === undefined || name === undefined) {
    
            res.status(404).json({ msg: "Check yor data" });
            return;
          }
        const findByUsername = await pool.query('SELECT * FROM users WHERE username = $1 ;',[username])
        if(findByUsername.rowCount > 0){
            
        res.status(400).json({msg: "Same userName already present "})
        return;
        }
        const salt = await bcrypt.genSaltSync(parseInt(saltNumber, 10));
        const hash = await bcrypt.hashSync(password, salt);
        const newUser = await pool.query('INSERT INTO users (name,username,password) VALUES ($1,$2,$3);',[name,username,hash])
        res.json({msg:`new user ${name} is created`})

    }
    catch(err){
        console.log(err)
    }
};

export default registerController;