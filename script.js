let Oname= window.prompt("Player-O, Please Enter Your Name");
let Xname = window.prompt("Player-X, Please Enter Your Name");

let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset");
let startbtn = document.querySelector("#start");
let winCont= document.querySelector(".win");
let msg = document.querySelector("#msg");

// ther are two players Player-O and Player- X
let turnO=true;
let remainingMoves = 9; 

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        box.style.animation='none';
        box.disabled=false;
    });
    remainingMoves=9;
    winCont.classList.add("hide")
    btn.classList.remove("hide");
}
startbtn.addEventListener("click",()=>{
    turnO=true;
    resetGame();
});
btn.addEventListener("click",()=>{
    turnO=true;
    resetGame();
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
           if(box.innerText===''){
                if(turnO){
                    box.innerHTML = '<span style="font-size: 3rem;">O</span>';
                    turnO=false;

                }else{
                    box.innerHTML = '<span style="font-size: 3rem;">X</span>';
                    turnO=true;
                }
                remainingMoves--;
           }
        box.Disabled = true;  
        checkWinner();  
    });
});
    const btnDisable =()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const showWinner=(winner)=>{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        winCont.classList.remove("hide");
        btn.classList.add("hide")
        btnDisable();
    }
    
    const checkWinner=()=>{
        let draw =true;
        for(pattern of winPattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 !="" && pos2!="" & pos3 !=""){
                if(pos1 === pos2 && pos2 === pos3){
                    draw=false;
                    console.log("Winner Winner !!");
                    
                    if(pos1==='O'){
                        showWinner(Oname);
                    }else{
                        showWinner(Xname);
                    }
                    // showWinner(pos1);
                }
            }
        }
        if (draw && remainingMoves===0) {
            msg.innerText = "It's a draw! No one wins.";
            winCont.classList.remove("hide");
            btn.classList.add("hide");
            btnDisable();
        }
    }

