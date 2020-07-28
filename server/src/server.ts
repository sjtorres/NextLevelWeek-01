import express from 'express'

const app = express()

app.use(express.json())

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informação do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

const users = [
  "Sandro",   //0
  "Patrícia", //1
  "Gabriela", //2
  "Isabela",  //3
  "Rafael"    //4
]

app.get('/users', (request, response) => {
  const search = String(request.query.search)

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users

  return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)

  const user = users[id]

  return response.json(user)
})

app.post('/users', (request, response) => {
  const data = request.body

  console.log(data)

  const user = {
    name: data.name,
    email: data.email,
  }

  return response.json(user)
})

app.listen(3333)