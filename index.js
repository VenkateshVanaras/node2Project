const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Venkatesh");
})

app.listen(3000, (request,response) => {
    console.log(' Server is running at Port no.3000');
})
