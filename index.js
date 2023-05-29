const express = require('express')
var cors=require('cors')
const apiRoute = require('./src/routes')
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())


app.use('/api', apiRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})