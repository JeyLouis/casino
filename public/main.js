// var button = document.querySelector('button').addEventListener('click', bet)

//Player's Bet
var bet =  0

//Put an event listener on all poker chips.
document.querySelectorAll('.pokerchips').forEach(num => num.addEventListener('click', addChips))

function addChips(e){
  var chip = Number(e.target.getAttribute('data-value'))

  if(chip == 1){
    bet += 1
  }else if (chip === 10) {
    bet += 10
  }else if (chip === 50) {
    bet += 50
  }else if (chip === 100) {
    bet += 100
  }
  // return bet
  console.log(bet);

  document.querySelector('h2').innerText = bet

}

//Print the player's bet amount to the DOM.
var betAmount = document.querySelector('h2');

//Player clicks 'BET' button and the wheel spins and generates a result.

document.querySelector('#submitBet').addEventListener('click', spinWheel);

  function spinWheel() {
    const casinoWon = "casino won!"
    const playerWon = "player won!"

    console.log("works?");
    fetch('profile', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'casinoWon': casinoWon,
        'playerWon': playerWon

      })
    })
    .then(response => {
      if (response.ok) return response.json()
        // Add some stylying to notify the client that item has been selected
        // window.location.reload()
    })
    
    betAmount.innerText

    console.log(betAmount.innerText);

    // fetch(`/api?betAmount=${bet}`)
    //   //the ? is the parimeter for the bet being place
    //   .then(response => response.json())
    //   .then(data =>{
    //
    //
    //     //this is the data for the winner and results will be returned with console.log below
    //     console.log(data.winner);
    //     console.log(data.spinResults);
    //
    //   })

      winnerComparison(playerChoice)
    }

//Event listeners are added on each square on the table and the player's choice is recorded (thanks to the 'getPlayerChoice' function)

var num = document.getElementsByClassName("num");

  Array.from(num).forEach(function(element) {

      element.addEventListener('click', getPlayerChoice)

  });

//Record the player's choice AKA the square they clicked on.

let playerChoice

  function getPlayerChoice(e){

    const betNumber = e.target.innerText
    const betColor = e.target.parentNode.getAttribute('data-value')
    playerChoice = `${betNumber} ${betColor}`

    document.querySelector('.h2PlayerChoice').innerText = `You bet on ${playerChoice}`
    console.log(playerChoice)


}
//This is an object for the roulette game.

  // let rouletteGame = {
  //   player:{
  //    betColor: "betColor", //Need an option for the player to select the color they are betting their money on will update with client side team this will correspond to the data-values on the index.ejs file
  //    betNumber: "betNumber",
  //    betAmount: "betAmount"//Storing the amount of money the player is betting
  //   },
  //
  //   casino:{
  //     total: 0, //net profits
  //     losses: "losses",
  //     wins: "wins",
  //     amountLost: 0,
  //     amountWon: 0
  //   }
  // }
//object casino and player info


//this function picks randomly between 2 options red or black can expand on this later

  // function randomColor(){
  //   let random = Math.floor(Math.random())
  //   if(random <= .5){
  //     return "red"
  //   }else{
  //     return "black"
  //   }
  // }

  //This function generates a random computer choice

  function randomComputerChoice(){
    let randomColor = Math.floor(Math.random())
    let computerColor
    let computerNumber = Math.floor(Math.random() * 37)

      if(randomColor <= .5){
        computerColor = "red"
      }else{
        computerColor = "black"
      }

      let computerChoice = `${computerNumber} ${computerColor}`
      return computerChoice

  }

//This function checks who has won.

  function winnerComparison(playerChoice){
    computerChoice = randomComputerChoice()

    printComputerChoice(computerChoice)

    if(playerChoice === computerChoice){
      //let playerBank = bet * 10  -->pseudo code to add winnings to player's bank that they'll be able to "witdraw"
      //total = total - playerBank -->pseudo that subracts the winnings from the casino total
      console.log("player wins");//don't know what will happen when wins occur just yet
      let result = "player wins"
      let winner = "player"
      printResults(result)
      updatePlayerTotal(winner)

    }else{
      console.log("casino wins");//don't know what will happen when wins occur just yet
      let result = "casino wins"
      let winner = "casino"
      printResults(result)
      updatePlayerTotal(winner)
    }



  }


  function updatePlayerTotal(winner){
    let playerTotal = Number(document.querySelector('.h3PlayerTotal').innerText)

    console.log(playerTotal)
    console.log(Number(document.querySelector('.h2BetAmount').innerText))

    if(winner = "player") {
      playerTotal.innerText += Number(document.querySelector('.h2BetAmount').innerText)
    } else {
      playerTotal.innerText -= Number(document.querySelector('.h2BetAmount').innerText)
    }
  }


  //Prints computer choice.

  function printComputerChoice(computerChoice) {
    document.querySelector('.h2ComputerChoice').innerText = `Roulette ball stopped on ${computerChoice}.`
  }

   //Prints the result of the spin.

  function printResults(result) {
    document.querySelector('.h2Results').innerText = result
  }


//   function profitCheck(){
//
//     const casinoWon = "casino won!"
//     const playerWon = "player won!"
//
//     console.log("works?");
//     fetch('profile', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'casinoWon': casinoWon,
//         'playerWon': playerWon
//
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//         // Add some stylying to notify the client that item has been selected
//         // window.location.reload()
//     })
// }
