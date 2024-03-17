import express from "express"

const router = express.Router()

router.get("/",(_req,res)=>{
    res.send("fetching all monsters")
})

router.post("/",(_req,res)=>{
    res.send("Saving a monster")
})