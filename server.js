const express = require("express");
const app = express();
const PORT = process.env.PORT||2400;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
const employerRoute = require("./routes/employer.route")
const ejs = require('ejs')
const connectionUrl = "mongodb+srv://racheal:racheal@cluster0.kqgbwld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const path=require("path")
mongoose.connect(connectionUrl).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/employer', employerRoute)
app.use(express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.render("index")
});


app.get('/about', (req, res)=>{
    res.render("about")
});



app.get('/service', (req, res)=>{
    res.render("service")
});

app.get('/blog', (req, res)=>{
    res.render("blog")
});
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode
    const message = err.message || 'internal server error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:${PORT}/`)
})