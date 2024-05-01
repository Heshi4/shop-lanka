const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const reviewRoutes=require("./routes/review.js");

app.listen(5000, () => console.log('Server listening on port 5000'));
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://heshani03123:0JeXqyOs8gfvJ1Ud@heshani.zqdpgyr.mongodb.net/Heshani', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));//conect momgo 


app.use('/review',reviewRoutes);

mongoose.connection.on('error', (error) => console.error('Error connecting to MongoDB:', error))
