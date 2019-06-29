const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('nutritionV4.html', {root: __dirname });
});


var trashData = [1,2,3];

app.get('/get', (req, res) => {
    res.send(trashData);
});

app.post('/post', (req, res) => {
    console.log(req.body);

    trashData.push(req.body);
});

app.listen(3000, console.log('listening'));