let playerText = document.getElementById('heading')
let restartBtn = document.getElementById('restart')

let boxes =Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
let c=0;
const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces =new Array(9).fill(null)
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerHasWon() {
    for (let condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

function boxClicked(e) {
    if(c!=1){
    let id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if(currentPlayer!=X_TEXT)
        {
            document.getElementById("plr").innerHTML="Player 1's Turn"
        }
        else{
            document.getElementById("plr").innerHTML="Player 2's Turn"
        }
        if(playerHasWon() !== false){
            let winning_blocks = playerHasWon()
            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator)
            c=1
            if(currentPlayer==X_TEXT)
            {
                document.getElementById("winner1").innerHTML="&#127942;Player 1 WIN&#127942;"
                document.getElementById("winner2").innerHTML="&#127942;Player 1 WIN&#127942;"
            }
            else{
                document.getElementById("winner1").innerHTML="&#127942;Player 2 WIN&#127942;"
                document.getElementById("winner2").innerHTML="&#127942;Player 2 WIN&#127942;"
            }
            document.getElementById("plr").innerHTML="Tic Tac Toe"
            return 
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
    }
    else{
        return
    }
}

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

startGame()




function restart() {
    spaces.fill(null)
    c=0;
    boxes.forEach( box => {
        box.innerText =""
        box.style.backgroundColor=""
    })
    document.getElementById("winner1").innerHTML=""
    document.getElementById("winner2").innerHTML=""
    currentPlayer = X_TEXT
}
restartBtn.addEventListener('click', restart)






