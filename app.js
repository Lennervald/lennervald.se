const express = require('express');
const app = express();

app.get('*',(req,res) => res.send('lennervald.se'));

app.listen(3000,()=>console.log('lennervald.se listening on port 3000'));
