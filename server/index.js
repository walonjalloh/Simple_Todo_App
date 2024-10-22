import { config }  from 'dotenv'
import express from 'express'
import fs from 'fs'

const data = fs.readFileSync('./templates/index.html', 'utf8')

const app = express()

//middleware
app.use(express.static('./templates'))

config()

//default route
app.get('/', (req,res)=> {
    res.send(data)
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})