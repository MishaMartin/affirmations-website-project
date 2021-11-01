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

        res.status(200).send(motorcycles)
    }
}