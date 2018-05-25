const express = require('express')
const app = express()
const cohorts = require('./cohorts')
const cors = require('cors')


function findById(cohorts, id) {
    return cohorts.data.find(cohort => cohort.id === parseInt(id))
}
app.use(cors())

app.get('/', (req, res) => res.status(200).json(cohorts))

app.get('/:id', (req, res) => {
    let query = findById(cohort.data, parseInt(req.params.id))
    if (query === undefined) {
        res.status(404).json({
            error: {
                message: "Nothing Found!"
            }
        })
    } else {
        res.status(200).json(query)
    }

    res.json(findById(cohorts, req.params.id))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))