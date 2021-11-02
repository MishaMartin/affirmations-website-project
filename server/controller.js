const affirmations = require("./affirmations.json")
let globalId = affirmations[affirmations.length -1].id +1

module.exports = {
    addAffirmations: (req, res) => {
        const {affirmation} = req.body
        let newAffirmation = {
            affirmation,
            id: globalId
        }
        affirmations.push(newAffirmation)
        globalId++

        res.status(200).send(affirmations)
    },
    getAffirmations: (req,res) => {
        res.status(200).send(affirmations)
    },
    getRandomAffirmation: (req, res) => {
        const {id} = req.params
        const {affirmation} = req.body
        res.status(200).send(affirmations[id].affirmation)
    }
}