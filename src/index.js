const express=require('express')
const cors=require('cors')

const app=express()

app.use(cors())

app.get('/live', (req, res)=>{
	res.status(200).send("Backend is live")
})

app.listen(8080,()=>{console.log("App is live")})

