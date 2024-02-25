import mysql from 'mysql2'
const sql =mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'project'
})
export default sql