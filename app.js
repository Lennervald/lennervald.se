const express = require('express');
const app = express();

app.get('*',(req,res) => res.send('lennervald.se - just a test'));

app.listen(4001,()=>console.log('lennervald.se listening on port 4001'));
