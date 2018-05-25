const express = require('express')
const app = express()
const cohorts = require('./cohorts')
const cors = require('cors')
const port = (process.env.PORT || 3000)



function findById(cohorts, id) {
    return cohorts.find(cohort => cohort.id === parseInt(id))


}
app.use(cors())

app.get('/', (req, res) => {
    console.log(cohorts.data)
    res.status(200).json(cohorts)
})

app.get('/:id', (req, res) => {
    let query = findById(cohorts.data, parseInt(req.params.id))
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

app.listen(port, () => console.log('Example app listening somewhere...'))