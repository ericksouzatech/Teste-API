const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/citacoes', (request, response) => {
    quotes = [
        "'A educação é a arma mais poderosa que você pode usar para mudar o mundo.' -Nelson Mandela",
        "'O maior erro que um homem pode cometer é sacrificar a sua saúde a qualquer outra vantagem.' -Arthur Schopenhauer",
        "'A violência, seja qual for a maneira como ela se manifesta, é sempre uma derrota.' -Jean-Paul Sartre",
        "'Nenhuma qualidade humana é mais intolerável do que a intolerância.' -Giacomo Leopard"
    ];

    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

    response.send(randomQuotes);
})

app.listen(3000, () => {
    console.log('Rodando na porta: 3000')
})