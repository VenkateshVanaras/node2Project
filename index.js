const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Venkatesh");
})

app.get('/about', (req, res) => {
    res.send("Nothing to say about  him");
})

app.listen(3000, (request,response) => {
    console.log(' Server is running at Port no.3000');
})
