import express from 'express';
import proxy from 'express-http-proxy';

const app = express();
const port = 8001;

const path = __dirname + "/../../dist/client";
app.use(express.static(path));

app.use('/apiproxy/client_test_remote', proxy('localhost:8000'));

app.listen(port, () => {
    console.log(`Example app listening @ http://localhost:${port}`);
});