import { config }  from 'dotenv'
import express from 'express'
import fs from 'fs'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import corsOptions from './configs/corsOptions.js'

const data = fs.readFileSync('./templates/index.html', 'utf8')

const app = express()

//middleware
app.use(express.json())
app.use(express.static('./templates'))
app.use(cookieParser())
app.use(cors(corsOptions))


config()

//default route
app.get('/', (req,res)=> {
    res.send(data)
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})