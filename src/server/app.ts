import express from 'express';

const app = express();
const port = 8001;

const path = __dirname + "/../../dist/client";
app.use(express.static(path));

app.listen(port, () => {
    console.log(`Example app listening @ http://localhost:${port}`);
});