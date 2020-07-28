import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('Listagem de Usuários')

  response.json([
    "Sandro",
    "Patrícia",
    "Gabriela",
    "Isabela",
    "Rafael"
  ])
})

app.listen(3333)