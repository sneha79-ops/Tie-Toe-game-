let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#Reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;// palyer X and Player O)
   const winPatterns =[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
   ];
   const restGame = () =>{
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");

   } ;
   

   boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{//palyer X
            box.innerText="X";
            turnO = true;
        }
        box.Disabled = true;
        CheckWinner();

        
        
    });
   });
   const disableBoxes = () => {
    for (let box of boxes) {
        box.Disabled = true;
        
    }
   }
   const enableBoxes = () => {
    for (let box of boxes) {
        box.enabled = false;
        box.innerText = "";
        
    }
   }

   const showWinner =(winner) => {
    msg.innerText =`Congratulation ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

   }
      const CheckWinner =() =>{
      for (let pattern of winPatterns) {
    
            let pos1Val =  boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != ""&& pos2Val != ""&& pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            

            
        }

        
      }
    }

   };
   newGamebtn.addEventListener("click",restGame);
   ResetBtn.addEventListener("click",restGame);
   