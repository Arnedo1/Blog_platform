const {Pool} = require('pg')

const pool = new Pool({
    user:'josearnedo',
    host:'localhost',
    database:'blog_platform',
    port:5432
})

module.exports = pool