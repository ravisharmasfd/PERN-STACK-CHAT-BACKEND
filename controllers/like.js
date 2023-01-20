import pool from "../db.js";
const likeController = async(req,res)=>{
    try{
        const checkLike =  await pool.query('SELECT * FROM likes WHERE messageId =$1 AND username = $2 ;',[req.params.id,req.user.username]);
        if(checkLike.rowCount == 0){
            const likeMsg = await pool.query("INSERT INTO likes ( messageId, username) VALUES ($1, $2);",[req.params.id,req.user.username])
            res.json({msg : "Done this like process"})
        }
        else{
            const data = checkLike.rows[0];
            const likeMsg = await pool.query("DELETE FROM likes WHERE ID = $1;",[data.id])
            res.json({msg:"already like this so now you dislike"})
        }
    }
    catch(err){
        console.log(err)
    }
};

export default likeController;