import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({
        success: true,
        message: "welcome to mbokafiti app"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Mbokafiti API running on PORT ${PORT}`)
})