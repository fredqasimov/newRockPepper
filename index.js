const winnerMessage = document.querySelector('.winnerMessage');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore')
const pcScore = document.querySelector('.pcScore')
const header = document.querySelector('.header')
const pSelect = document.querySelector('.pSelect')
const cSelect = document.querySelector('.cSelect')


let player=0
let comp=0
let compSelect

function compSelecion(){
    let randomNum = Math.floor(Math.random()*3)+1
    if(randomNum === 1){
        compSelect = rock
    }
    if(randomNum === 2){
        compSelect = paper
    }
    if(randomNum === 3){
        compSelect = scissors
    }

}


function playRock(){
    compSelecion()
    if (compSelect === rock){
        winnerMessage.innerHTML = 'Tie :/'
        cSelect.innerHTML = '🪨'
    }
    if (compSelect === paper){
        winnerMessage.innerHTML = 'You Lose :('
        comp = comp + 1
        pcScore.innerHTML = `PC:${comp}`
        cSelect.innerHTML = '📝'

    }
    if (compSelect === scissors){
        winnerMessage.innerHTML = 'You Win !!!'
        player = player +1
        playerScore.innerHTML = `Player:${player}`
        cSelect.innerHTML = '✂️'

    }
    pSelect.innerHTML = '🪨'
    header.innerHTML = '<p>Choose Again</p>'
}



function playPaper(){
    compSelecion()
    if (compSelect === rock){
        winnerMessage.innerHTML = 'You Win !!!'
        player = player +1
        playerScore.innerHTML = `Player:${player}`
        cSelect.innerHTML = '🪨'

    }
    if (compSelect === paper){
        winnerMessage.innerHTML = 'Tie :/'
        cSelect.innerHTML = '📝'

        
    }
    if (compSelect === scissors){
        winnerMessage.innerHTML = 'You Lose :('
        comp = comp + 1
        pcScore.innerHTML = `PC:${comp}`
        cSelect.innerHTML = '✂️'

    }
    pSelect.innerHTML = '📝'
    header.innerHTML = '<p>Choose Again</p>'


}
function playScissors(){
    compSelecion()
    if (compSelect === rock){
        winnerMessage.innerHTML = 'You Lose :('
        comp = comp + 1
        pcScore.innerHTML = `PC:${comp}`
        cSelect.innerHTML = '🪨'

    }
    if (compSelect === paper){
        winnerMessage.innerHTML = 'You Win !!!'
        player = player +1
        playerScore.innerHTML = `Player:${player}`
        cSelect.innerHTML = '📝'

    }
    if (compSelect === scissors){
        winnerMessage.innerHTML = 'Tie :/'
        cSelect.innerHTML = '✂️'

        
    }
    pSelect.innerHTML = '✂️'
    header.innerHTML = '<p>Choose Again</p>'


}

rock.addEventListener('click', playRock)
paper.addEventListener('click', playPaper)
scissors.addEventListener('click', playScissors)