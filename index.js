

const express = require("express");

const path = require("path");

const app = express();

const port = 4000


// create middelware

// const kushal= (req,res,next)=>{

//     console.log(req);
// next()
// }



app.use(express.static(path.join(__dirname, "public"))) // join to stact web site



//app.use(kushal); call middelware


app.get("/hello", (req, res) => {

    res.send("hello kushal")

})



app.get("/about", (req, res) => {

    //res.send("about express")  just practic

    // res.sendFile(path.join(__dirname,"index.html")); // send file to server

    res.json({ "kushal": 67 })

})

// use paramiter in link

app.get("/page/:name",(req,res)=>{

    res.send("hello" +req.params.name)

})






app.listen(port, () => {
    console.log(`server is online on ${port}`);
})
