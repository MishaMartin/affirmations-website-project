console.log("Hello World!")

const baseUrl = "https://i-am-affirmations.herokuapp.com"

const affirmationBtn = document.getElementById("affirmation")
const addAffirmations = document.getElementById("addAffirmation")
const addBtn = document.getElementById("addBtn")
const themes = document.getElementById("themes")
const addForm = document.querySelector("form")
const affirmationsCtr = document.querySelector('#affirmations-container')
const affCallback = ({ data: affirmation }) => displayAffirmation(affirmation)

function getAffirmation(aff) {
    const affirmationCard = document.createElement('div')
    affirmationCard.classList.add('affirmation-card')

    affirmationCard.innerHTML = `<p${aff.affirmation}/>`
    affirmationsCtr.appendChild(affirmationCard)

    let id = Math.floor(Math.random() * 4)
    console.log(id)
    //`${aff.id}`

    axios.get(`${baseUrl}/affirmations/${id}`)
    .then(res => {
        console.log(res.data)
        return affCallback(res.data)
    })
}

function addAffirmation(event) {
    // event.preventDefault()

    let body = {
        affirmation: affirmation.value
    }
    
    axios.post(`${baseUrl}/affirmations`, body)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

function displayAffirmation() {
    console.log()
    affirmationsCtr.innerHTML = ``
        getAffirmation()
    

}


addForm.addEventListener('submit', addAffirmation)
affirmationBtn.addEventListener('click', getAffirmation)



