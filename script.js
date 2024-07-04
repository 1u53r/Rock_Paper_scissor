let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scisoor = document.querySelector(".scissor");

function computer(random){
    let computerSelect = "";
    if(random<3){
        computerSelect = "paper";
    } else if(random>3 && random<6){
        computerSelect = "rock";
    } else{
        computerSelect = "scissor";
    }
    return computerSelect;
}

function main(){
    let random = Math.floor(Math.random() * 10);
    let valueComputed = computer(random);
    return valueComputed;
}

function me(){
    paper.addEventListener("click",()=>{
        paper.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        let i=0;
        let l=0;
        let u=0;
        let comp = main();
        if(comp=="scissor"){
            console.log("YOu lost");
            l++;
        }else if(comp=="rock"){
            console.log("You won!!");
            i++;
        }else if(comp=="paper"){
            console.log("It's a draw");
            u++;
        }
        
    })

    rock.addEventListener("click",()=>{
        rock.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        let i=0;
        let l=0;
        let u=0;
        let comp = main();
        if(comp=="scissor"){
            console.log("You lost");
            l++;
        }else if(comp=="rock"){
            console.log("It's a draw");
            u++;
        }else if(comp=="paper"){
            console.log("You won!!");
            i++;
        }
    })
    
    scisoor.addEventListener("click",()=>{
        scisoor.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        let i=0;
        let l=0;
        let u=0;
        let comp = main();
        if(comp=="scissor"){
            console.log("It's a draw");
            u++;
        }else if(comp=="rock"){
            console.log("You lost");
            l++;
        }else if(comp=="paper"){
            console.log("You won!!");
            i++;
        }    })
}

me();