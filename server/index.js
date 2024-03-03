const express = require('express')
const app = express();
const db = require('./models');

// Routers
app.use(express.json());

const postRouter = require('./routes/Posts')
app.use("/post", postRouter);




db.sequelize.sync().then(()=>{
app.listen(3001);
});