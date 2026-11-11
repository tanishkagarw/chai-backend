// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env' 
})

connectDB()







/*
import express from "express";
const app  = express();

;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // kayi br ye hota hai ki database is connected pr express ki app baat ni kr
        // paati hai... so hum ye niche app.on wala code likhte hai

        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})
*/