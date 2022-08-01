const choiceButtons = document.querySelectorAll('[data-choice]')
const column = document.querySelector('[data-column]')
var computerPoints = document.querySelector('[data-computer-points]')
let yourPoints = document.querySelector('[data-your-points]')

const Choices = [
  {
    name: 'Rock',
    beats: 'Scissors'
  },
  {
    name: 'Paper',
    beats: 'Rock'
  },
  {
    name: 'Scissors',
    beats: 'Paper'
  }
]

choiceButtons.forEach(choiceButton => {
  choiceButton.addEventListener('click', e => {
    let choiceName = choiceButton.dataset.choice
    let choice = Choices.find(choice => choice.name === choiceName)
    choose(choice)
  })
})

function choose(choice) {
  const computerChoice = randomChoice()
  const youWin = theWinner(choice, computerChoice)
  const computerWin = theWinner(computerChoice, choice)

  choiceScore(computerChoice, computerWin)
  choiceScore(choice, youWin)

  if (youWin) {
    onePoint(yourPoints);
  }
  if (computerWin) {
onePoint(computerPoints);
  }
}

function onePoint(Points) {
  Points.innerText = parseInt(Points.innerText) + 1
}

function choiceScore(choice, win) {
    const select = document.createElement('div')
    select.innerText = choice.name
    if (win) select.classList.add('win')
    column.after(select)
}

function theWinner(choice, competingChoice) {
  return choice.beats === competingChoice.name
}

function randomChoice() {
  const randomInteger = Math.floor(Math.random() * Choices.length)
  return Choices[randomInteger]
}


