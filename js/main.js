$(document).ready(function(){

  var user;
  var computer;
  var winner;
  var options = ['rock', 'paper', 'scissors']

  $('.choice').on('click', function(){
    user = this.id;
    $('#userChoice').text('You chose: ' + user)
    getComputerChoice()
  })

 function getComputerChoice(){
   computerChoice = options[Math.floor(Math.random() * options.length)]
   $('#computerChoice').text('Computer chose: ' + computerChoice)
   getResult()
 }

  function getResult() {
    if (user === computerChoice){
      result = 'Tie'
    } else if (user === 'rock' && computerChoice === 'scissors' ||
               user === 'paper' && computerChoice === 'rock' ||
               user === 'scissors' && computerChoice === 'paper'
              ){
                result = 'You win!'
    } else {
      result = 'You lose';
    }
    printResults()
  }
  function printResults(){
    if (result === 'Tie'){
      $('#result').text('You tied. Better luck next time')
    } else if (result === 'You win!'){
      $('#result').text('Congratulations. You win!')
    } else {
      $('#result').text('You lose. Better luck next time')
    }
  }
})
