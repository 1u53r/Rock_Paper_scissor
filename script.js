let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scisoor = document.querySelector(".scissor");
let Message = document.querySelector(".message");

function computer(random) {
    let computerSelect = "";
    if (random < 3) {
        computerSelect = "paper";
    } else if (random > 3 && random < 6) {
        computerSelect = "rock";
    } else {
        computerSelect = "scissor";
    }
    return computerSelect;
}

function main() {
    let random = Math.floor(Math.random() * 10);
    let valueComputed = computer(random);
    return valueComputed;
}

function me() {
    paper.addEventListener("click", () => {
        paper.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        document.querySelector(".scissor").style.border = "none";
        document.querySelector(".rock").style.border = "none";
        let i = 0;
        let l = 0;
        let u = 0;
        let comp = main();
        if (comp == "scissor") {
            console.log("YOu lost");
            l++;
            Message.innerText = "Ahhh!! You lost Scissor Beats paper";
        } else if (comp == "rock") {
            console.log("You won!!");
            i++;
            Message.innerText = "Hurray!! You won, Paper Beats Rock";
        } else if (comp == "paper") {
            console.log("It's a draw");
            u++;
            Message.innerText = "hun! It's a Draw, You both selected same";
        }

    })

    rock.addEventListener("click", () => {
        rock.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        document.querySelector(".paper").style.border = "none";
        document.querySelector(".scissor").style.border = "none";
        let i = 0;
        let l = 0;
        let u = 0;
        let comp = main();
        if (comp == "scissor") {
            console.log("You won!!");
            i++;
            Message.innerText = "Hurray!! You won, Rock Beats Scissor";
        } else if (comp == "rock") {
            console.log("It's a draw");
            u++;
            Message.innerText = "hun! It's a Draw, You both selected same";
        } else if (comp == "paper") {
            console.log("You lost");
            l++;
            Message.innerText = "Ahhh!! You lost Scissor Beats paper";
        }
    })

    scisoor.addEventListener("click", () => {
        scisoor.style.border = "5px solid purple";
        let won = document.querySelector(".won");
        let lost = document.querySelector(".lost");
        let draw = document.querySelector(".draw");
        document.querySelector(".paper").style.border = "none";
        document.querySelector(".rock").style.border = "none";
        let i = 0;
        let l = 0;
        let u = 0;
        let comp = main();
        if (comp == "scissor") {
            console.log("It's a draw");
            u++;
            Message.innerText = "hun! It's a Draw, You both selected same"
        } else if (comp == "rock") {
            console.log("You lost");
            l++;
        } else if (comp == "paper") {
            console.log("You won!!");
            i++;
            Message.innerText = "Hurray!! You won, Scissor Beats Paper";
        }
    })
}

me();