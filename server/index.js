const express = require('express')
const app = express();
const db = require('./models');
const cors = require('cors')
// Routers
app.use(express.json());
app.use(cors());
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);




db.sequelize.sync().then(()=>{
app.listen(3001);
});