import pool from "../db.js"

const getMsgController =async(req,res)=>{
    try {
        const messagesQuery = await pool.query('SELECT messages.id, messages.message, messages.createdBy, messages.createdAt, COUNT(likes.id) AS like_count FROM messages LEFT JOIN likes ON messages.id = likes.messageId GROUP BY messages.id, messages.message, messages.createdBy, messages.createdAt ORDER BY messages.createdAt DESC;');
        res.json({
            messages: messagesQuery.rows
        })
    } catch (error) {
        
    }
}
export default getMsgController