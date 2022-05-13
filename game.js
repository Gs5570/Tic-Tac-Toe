//player text
let playerText = document.querySelector("#playerText");
// reset button
let retartBtn = document.getElementById("restartBtn");

// 9 div tags ( create an array form an array like object(collection of 9boxes))
let boxes = Array.from(document.getElementsByClassName("box"));        


// define style that indicate when the user win
let winnerIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks"); 
console.log(boxes);



const O_TEXT = "O";
const X_TEXT = "X";

// define X as the first letter that will be played.
// define the player who ia currently playing.
let currentPlayer = X_TEXT;

// keep track of which was clicked block clicked
let spaces = Array(9).fill(null);  //create an array of nine indexes or space and fill them with null.
console.log(spaces);



/**start game
 * loop over the boxes array.
 * add an event listener to all  each the boxes clicked
*/
const startgame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked) )
}



// function totalScore(){}

/**save each box clicked 
 * collect events generated when boxes are clicked
 * save them by id.
 * check if the space array fill with null doesn't contain the ID
 * define the player wh who
*/
function boxClicked(e) {
    console.log(e.target)
    const id = e.target.id  // logged the target box clicked box

    // check if the spaces array(which is full of null), does not contain the specific Id logged when the box was click. 
    if(!spaces[id]){
        spaces[id] = currentPlayer; // fill the space if it does not

        //change the value or inner text of the div clicked to the currentPlayer value ( either x or o) so user see feedback
        e.target.innerText = currentPlayer;  
        
        //alternate the value between Xs and Os.
        if(playerHasWon() !== false){
            playerText.textContent = `${currentPlayer} has won!`;
            console.log(playerText);
            
            //log the winning combinaison returned by 
            let winningBlocks = playerHasWon();
            console.log(winningBlocks);
            // map each block of the winning combinaison to winnerIndicator. it goes thru he indexes of the box array and a background style
            winningBlocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            // return
        }
        // else{
            
        //     playerText.textContent=`no winner play again`;
        // }
        else if(playerHasWon() == false && spaces[0,1,2,3,4,5,6,7,8] !== null) {
            playerText.textContent=`no winner play again`;
        }
        else{
            playerText.textContent = `Tic Tac Toe`;
            
        }
        currentPlayer = currentPlayer == X_TEXT? O_TEXT : X_TEXT  // alternate between Xs and Os.(when clicking)

    }

}

//store winning combinaision
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function playerHasWon(){
    for(const condition of winningCombos){
        // save each value of winningCombos index inside the indexes of condition
        let[a,b,c] =condition;
        
        //evaluate if eac combos is true thenm return the winnig combo.
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a,b,c];  // return wining combinaison array that the player has won from.
        }
    }
    return false;
}

//monitor clicking activity on the 
resetBtn.addEventListener("click", reset )


/**clears every Xs and Os  */
function reset () {
    spaces.fill(null)
    boxes.forEach(box => {
        //change the text in the box to blank
        box.innerText = ``;
        box.style.backgroundColor= ``
    })

    playerText.textContent = `Tic Tac Toe`

    currentPlayer = X_TEXT;
}

startgame();


