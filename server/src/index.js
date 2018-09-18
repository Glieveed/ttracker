const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(history())
app.use(express.static(path.resolve('..', 'client', 'dist')))
app.use(express.static(path.resolve('..', 'client', 'public')))

app.get('/', (req, res) => {
  res.status(200).sendFile('index.html')
})

const boardData = [
  {
    id: 1,
    name: 'Планы/Идеи',
    cards: [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1'
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2'
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'Description 3'
      }
    ]
  },
  {
    name: 'Очередь в работу',
    id: 2,
    cards: [
      {
        id: 4,
        title: 'Title 1',
        description: 'Description 1'
      }
    ]
  },
  {
    name: 'В работе',
    id: 3,
    cards: [
      {
        id: 5,
        title: 'Title 1',
        description: 'Description 1'
      }
    ]
  }
]

app.get('/board', (req, res) => {
  res.status(200).send(boardData)
})

app.get('/board/addColumn', (req, res) => {
  console.log('ADD COLUMN: ' + req)
})

app.post('/board/addCard', (req, res) => {
  res.status(200).json(req.body)
  //res.status(200).send(boardData)
})

app.listen(8081, () => {
  console.log('Server start...')
})