const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Function to multiply two numbers
const multiplyTwoNumbers = (n1, n2) => {
    return n1 * n2;
};

app.post("/multiply", (req, res) => {
    const { number } = req.body;
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const result = multiplyTwoNumbers(number, randomNumber);
    res.json({ statusCode: 200, data: result });
});

app.get("/Display", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));
});

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
