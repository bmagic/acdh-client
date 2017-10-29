const express = require('express')
const next = require('next')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/robots.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'robots.txt'))
    })

    server.get('/humans.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'humans.txt'))
    })

    server.get('/program/:id', (req, res) => {
      return app.render(req, res, '/program', req.params)
    })

    server.get('/program/edit/:id', (req, res) => {
      return app.render(req, res, '/programEdit', req.params)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
