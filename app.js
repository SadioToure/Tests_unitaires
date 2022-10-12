const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log('Server running on localhost:3000...')
})

app.get('/', (request, response) => {
    response.status(200).send('Hello World')
})





