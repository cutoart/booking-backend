require('dotenv').config()

const express = require('express')
const tableRoutes = require('./routes/tableRoute')
const mongoose = require('mongoose')
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})
//routes
app.get('/',(req,res)=>{
res.json({mssg:' to the app'})
})
app.use('/api/tables',tableRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for request
app.listen(process.env.PORT,()=>{
    console.log('connecting to db and listening on port '+process.env.PORT)
})

})
.catch((error)=>{
console.log(error)
})