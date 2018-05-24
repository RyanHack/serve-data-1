const express = require('express')
const app = express()
const cohorts = require('./cohorts')


app.get('/', (req, res) => res.json(cohorts))

app.listen(3000, () => console.log('Example app listening on port 3000!'))