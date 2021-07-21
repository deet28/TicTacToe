const gameContainer = document.querySelector('.game-container');
const gameUpdates = document.querySelector('.game-updates');


const gamePlay = (() =>{
  
  let waitingForSecond = false;
  var oneTurn = function(e){
    const { target } = e;
      if (waitingForSecond == false){
      if(target.classList.contains("square") && target.textContent == ""){
        target.textContent = "X";
        waitingForSecond = true; 
        turnTeller();
        checkWinner();
      }
    }
  }
  var twoTurn = function(e){
    const { target } = e
    if (waitingForSecond == true){
      if (target.classList.contains("square") && target.textContent == ""){
        target.textContent = "O";
        waitingForSecond = false;
        turnTeller();
        checkWinner();
      }
    }
  }
  var turnTeller = function(){
    if (waitingForSecond == false){
      gameUpdates.textContent = "Player 1's turn!";
    } else if (waitingForSecond == true) {
      gameUpdates.textContent = "Player 2's turn!";
    }
  }
  function checkWinner (){
    if (gameContainer.childNodes[0].textContent == gameContainer.childNodes[1].textContent 
      && gameContainer.childNodes[1].textContent == gameContainer.childNodes[2].textContent
      &&!gameContainer.childNodes[0].textContent==""){
        if (gameContainer.childNodes[0].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        }else{
          gameUpdates.textContent = "Player 2 has won!"
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[3].textContent == gameContainer.childNodes[4].textContent 
      && gameContainer.childNodes[4].textContent == gameContainer.childNodes[5].textContent
      &&!gameContainer.childNodes[3].textContent==""){
        if (gameContainer.childNodes[3].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[6].textContent == gameContainer.childNodes[7].textContent 
      && gameContainer.childNodes[7].textContent == gameContainer.childNodes[8].textContent
      &&!gameContainer.childNodes[6].textContent==""){
        if (gameContainer.childNodes[6].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[0].textContent == gameContainer.childNodes[4].textContent 
      && gameContainer.childNodes[4].textContent == gameContainer.childNodes[8].textContent
      &&!gameContainer.childNodes[0].textContent==""){
        if (gameContainer.childNodes[0].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[2].textContent == gameContainer.childNodes[4].textContent 
      && gameContainer.childNodes[4].textContent == gameContainer.childNodes[6].textContent
      &&!gameContainer.childNodes[2].textContent==""){
        if (gameContainer.childNodes[2].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[0].textContent == gameContainer.childNodes[3].textContent 
      && gameContainer.childNodes[3].textContent == gameContainer.childNodes[6].textContent
      &&!gameContainer.childNodes[0].textContent==""){
        if (gameContainer.childNodes[0].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[1].textContent == gameContainer.childNodes[4].textContent 
      && gameContainer.childNodes[4].textContent == gameContainer.childNodes[7].textContent
      &&!gameContainer.childNodes[1].textContent==""){
        if (gameContainer.childNodes[1].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    
    } else if (gameContainer.childNodes[2].textContent == gameContainer.childNodes[5].textContent 
      && gameContainer.childNodes[5].textContent == gameContainer.childNodes[8].textContent
      &&!gameContainer.childNodes[2].textContent==""){
        if (gameContainer.childNodes[2].textContent == "X"){
          gameUpdates.textContent = "Player 1 has won!";
        } else {
          gameUpdates.textContent = "Player 2 has won!";
        }
          gameContainer.classList.add("disabled");
    }
    }
    function changeWaiting(){
      waitingForSecond = false;
    }

    return {
      oneTurn:oneTurn,
      twoTurn:twoTurn,
      changeWaiting:changeWaiting
    }
})();



const gameBoard = (() => {
  const startButton = document.querySelector('#button');
  startButton.textContent = "Start";
  startButton.classList.add("start");
  gameUpdates.textContent = "Press start to play!";
  gameContainer.classList.add("disabled");
  
  function _makeSquares(){
   for (let i = 0; i < 9; i++){
    if (gameContainer.childElementCount < 9){
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click',gamePlay.oneTurn);
    square.addEventListener('click',gamePlay.twoTurn);
    gameContainer.appendChild(square);
     }
    }
  }

  function makeBoard(){
    _makeSquares();
  }

  function startGame(e){
   const { target } = e;
      if (target.classList.contains("start")){
        gamePlay.changeWaiting();
        gameContainer.classList.remove("disabled");
        gameUpdates.textContent = "Player 1's turn!"
        startButton.textContent = "Restart"
        startButton.classList.remove("start");
        startButton.classList.add("restart");
      }
      else if (target.textContent = "Restart"){
        for(let i = 0; i < gameContainer.childElementCount; i++){
          gameContainer.childNodes[i].textContent = "";
        }
        gameContainer.classList.add("disabled");
        gameUpdates.textContent = "Press start to play!";
        startButton.textContent = "Start";
        startButton.classList.remove("restart");
        startButton.classList.add("start");
      }
   }
      startButton.addEventListener('click',startGame);

      return {
      makeBoard:makeBoard,
      startGame:startGame,
  };
})();

gameBoard.makeBoard();




