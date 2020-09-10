import express, { json } from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    const users = [
        { name: 'Fabio', age: 29 },
        { name: 'Fabiola', age: 25 }
    ]
    return response.json(users);
});

app.post('/users', (request, response) => {
    const users = [
        { name: 'Fabio', age: 29 },
        { name: 'Fabiola', age: 25 }
    ]
    return response.json(users);
});

app.listen(3333);