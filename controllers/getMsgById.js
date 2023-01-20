import pool from "../db.js"

const getMsgByIdController =async(req,res)=>{
    try {
        const messagesQuery = await pool.query('SELECT messages.id, messages.message, messages.createdBy, messages.createdAt, COUNT(likes.id) AS like_count FROM messages LEFT JOIN likes ON messages.id = likes.messageId WHERE messages.id = $1 GROUP BY messages.id, messages.message, messages.createdBy, messages.createdAt;',[req.params.id]);
        res.json({
            messages: messagesQuery.rows
        })
    } catch (error) {
        
    }
}
export default getMsgByIdController