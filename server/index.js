const express = require("express")
const app =  express()
const session = require("express-session")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const port = 4000

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
// app.use(
//   cors({
//     origin: *,
//     methods: ["GET","POST", "OPTION", "PUT"],
//     credentials: true
//   })
// ) // client주소를 origin에 넣을 필요가 있다.

app.use(
  session({
    secret : "safuproject",
    resave: false,
    saveUninitialized: true
  })
)

app.get("/", function(req,res){
  res.send("sucess")
})

app.listen(port, () =>{
  console.log(`server listening on ${port}`)
})