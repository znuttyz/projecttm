const express = require('express')
const helmet = require('helmet')
const next = require('next')
const mysql = require("mysql")
const myParser = require("body-parser")

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('dotenv').config()


app.prepare()
  .then(() => {
    const server = express()

    server.use(helmet())

    // Json Encode
    server.use(myParser.json());

    const con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      socketPath: process.env.DB_SOCKETPATH
    });

    server.post('/getBanner', (req, res) => {
      con.query("SELECT * FROM tbl_banner", (err, rows) => {
        if(err) throw err;
        console.log('Data received from Db(tbl_banner):\n');
        console.log(rows)

        res.send(rows)
      });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })