require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);

//Deployment
if(process.env.NODE_ENV === 'production'){
    const buildPath = path.join(_dirname, './client/dist');
    app.use(express.static(buildPath));

    app.get('*', (req,res) => res.sendFile(path.join(buildPath, 'index.html')));
    
}

connectDB().then(() => {
    console.log("welcome to connected DB @@@££")
    app.listen(PORT, () => console.log('🚀 ~ file: index.js:11 ~ PORT:', PORT));
});