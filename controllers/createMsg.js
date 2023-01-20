import pool from "../db.js";
const createMsgController = async(req,res)=>{
    try{
        const createMsg = await pool.query("INSERT INTO messages (message, createdBy) VALUES ($1 , $2);",[req.body.message,req.user.username])
        res.json({msg:"create msg successfully",})
    }
    catch(err){
        console.log(err)
    }
};

export default createMsgController;