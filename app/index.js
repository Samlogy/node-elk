import express from "express";
import logger from "./logger.js"

const PORT = process.env.PORT || 3002;

const  app = express()

app.get('/health', (req,res) =>{
    logger.info(" OK! ")
    res.send(" OK! ")
})
app.get('/v1', (req,res) =>{
    logger.info(" Log V1 ")
        res.send(" Log V1 ")
})
app.get('/v2', (req,res) =>{
    logger.info(" Log V2 ")
    res.send(" Log V2 ")
})

app.listen(PORT,() => {
    console.log("Node Logging => ", PORT)
})