const express = require('express');
const mongoose = require('mongoose');
const { DB_KEYS } = require('./config');
const app = express();

app.use(express.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req,res) => {
    res.send('We are on home');
});


//Connect to DB
mongoose.connect(DB_KEYS, {useNewUrlParser: true,useUnifiedTopology: true,})
 .then(() => console.log('mongodb connected!'))
 .catch(err => console.log(err));
 ;

//Start listening to server
app.listen(3000);