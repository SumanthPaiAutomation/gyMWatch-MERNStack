const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Sumanthdb:fastnet%4092@firstcluster-vxgae.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
.then(()=>{
  console.log('Db connected Successfully')
})
.catch((err)=>{
  console.log('Db not connected Successfully :',err)
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
