const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: __dirname + '/.env'});



const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());

require('./config/mongoose.config');

const userRoutes = require('./routes/users.routes');
userRoutes(app);

app.listen(8000, () => console.log('listening now!'));