// LOOPING THROUGH AN ARRAY SNIPPET 
 
 
 
 let counterArray = [1,2,3,4,5,6,7,8,9];


for(let i = 0; i < counterArray.length; i++) {
  
  if(counterArray[i] % 2 == 1) {
    console.log("First Player Turn");
  }
  
  if(counterArray[i] % 2 == 0) {
    console.log("Second Player Turn");
  } 

  if (counterArray[i] == 9) {
      console.log("Game Over");
  }

} 









let cells = document.getElementsByClassName("wrap");

console.log(cells.length);



//Random Number between 1-9 inclusive
 

let randomNumber = Math.ceil(Math.random() * 9); 
let playerOne = "PLAYER 1";
let p1Score = 0;
let p1FinalScore;


let playerTwo = "PLAYER 2";
let p2Score = 0;
let p2FinalScore;




//Adding Click Event Listener to Every Cell in the Table



for(let i = 0; i < cells.length; i++) {

    cells[i].addEventListener("click", () => {

        if(counterArray[i] % 2 == 1) {
            cells[i].style.backgroundColor = "#ff6f5e"; //Odd clicked

            
            p1Score += 5;
            document.getElementsByClassName("p1-score")[0].innerHTML = p1Score;
          }
          
          if(counterArray[i] % 2 == 0) {
            cells[i].style.backgroundColor = "#40bfc1"; //Even clicked

            p2Score += 5;
            document.getElementsByClassName("p2-score")[0].innerHTML = p2Score;
          } 

          if (counterArray[i] == randomNumber) {

            if(randomNumber % 2 == 1) { //P2 wins
                document.getElementsByClassName("p2-wins")[0].style.display = "block";
                p1FinalScore = p1Score - 5;
                p2FinalScore = p2Score + 5;
                document.getElementsByClassName("p1-score")[0].innerHTML = p1FinalScore;
                document.getElementsByClassName("p2-score")[0].innerHTML = p2FinalScore;

                document.body.style.backgroundImage = "url('https://media.giphy.com/media/hvGKQL8lasDvIlWRBC/giphy.gif')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "100vw 100vh";

                
              
                
            } else if(randomNumber % 2 == 0){ //P1 Wins
                
                document.getElementsByClassName("p1-wins")[0].style.display = "block";
                p1FinalScore = p1Score + 5;
                p2FinalScore = p2Score - 5;
                document.getElementsByClassName("p1-score")[0].innerHTML = p1FinalScore;
                document.getElementsByClassName("p2-score")[0].innerHTML = p2FinalScore;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/hvGKQL8lasDvIlWRBC/giphy.gif')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "100vw 100vh";

                   

               


            }

        }

    });

}


