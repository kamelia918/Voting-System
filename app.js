require("dotenv").config();
const express=require("express");
const connectDB = require("./config/dbConnection");
const errHandler = require("./middlewares/ErrorHandler");

const app=express();
const port=5000;

//connect the data base

// connectDB();

//parsser to parss the data that we recieved from the client to the server side 
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.json("get is working");
// })
app.use("/api/candidate",require("./routes/candidateRoute"));
app.use("/api/users",require("./routes/userRoute"));

app.use(errHandler);


// app.listen(port, () => {
//     console.log(`server running on ${port}`);
// });


// Connect the database and start the server
connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  }).catch((error) => {
    console.error('Failed to connect to the database:', error);
  });