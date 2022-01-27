const express = require('express');
const app = express();
require('../src/db/conn')
const MenRanking =require('./models/mens')
const router =require('./routers/rmen')
const port = process.env.PORT || 8002;




app.use(express.json());

app.use(router)


app.listen(port, () => {
  console.log(`connectd successfully at port ${port}`);
});
