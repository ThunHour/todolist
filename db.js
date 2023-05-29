const Pool=require('pg').Pool

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"todolist",
    password:"seak1812002",
    post:5432
})

module.exports = pool;