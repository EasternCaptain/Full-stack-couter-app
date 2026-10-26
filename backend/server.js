const express = require("express"); 
const { db } = require('./db'); 
const cors = require('cors'); 

const PORT = process.env.PORT || 5000 

const app  = express(); 
app.use(cors()); 

app.post("/api/increment", async (req, res) => {
    try {
        const result = await db.query("UPDATE count SET value = value + 1 RETURNING value") 
        res.status(200).json(result.rows[0]); 
    } catch (error) {
        res.status(500).json({ error: "FAILED TO INCREMENT"})
    }
})

app.post("/api/decrement", async (req, res) => {
    try {
        const result = await db.query("UPDATE count SET value = value - 1 RETURNING value") 
        res.status(200).json(result.rows[0]); 
    } catch (error) {
        res.status(500).json({ error: "FAILED TO DECREMENT"})
    }
})

app.get("/api/count", async (req, res) => {
    try {
        const result = await db.query("SELECT value FROM count"); 
        res.json(result.rows[0]); 
    } catch(error) {
        console.error(error) 
        res.sendStatus(500).json({error: "FAILED TO GET COUNT VALUE"})
    }
    
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);  
})