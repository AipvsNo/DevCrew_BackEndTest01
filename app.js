const express = require('express');
const app = express();
const PORT = 5000;
const router = require("./router/router");

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Yak pen Intern laew krub <3');
});

app.use('/app', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
