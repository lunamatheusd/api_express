const express = require('express');

const app = express();
const port = 3000;

const lista = [
    { id: 1, name: 'john doe' },
    { id: 2, name: 'jane doe' }
];
const cors = equire('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send(lista)
});
app.listen(port, () => {
    console.log('Example app')
});