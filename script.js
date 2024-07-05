let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scisoor = document.querySelector(".scissor");
let Message = document.querySelector(".message");
let i = 0;
let l = 0;
let u = 0;
let Won = document.querySelector("#won");
let Lost = document.querySelector("#lost");
let Draw = document.querySelector("#draw");
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
        document.querySelector(".scissor").style.border = "none";
        document.querySelector(".rock").style.border = "none";
        let comp = main();
        if (comp == "scissor") {
            l++;
            console.log("You lost");
            Lost.textContent = `Lost: ${l}`;
            Message.innerText = "Ahhh!! You lost Scissor Beats paper";
            Message.style.backgoundColor = "red";

        } else if (comp == "rock") {
            i++;
            console.log("You won!!");
            Won.textContent = `Won: ${i}`;
            Message.innerText = "Hurray!! You won, Paper Beats Rock";
            Message.style.backgoundColor = "green";
        } else if (comp == "paper") {
            u++;
            console.log("It's a draw");
            Draw.textContent=`Draw: ${u}`;
            Message.innerText = "hun! It's a Draw, You both selected same";
            Message.style.backgoundColor = "Yellow";
        }

    })

    rock.addEventListener("click", () => {
        rock.style.border = "5px solid purple";
        document.querySelector(".paper").style.border = "none";
        document.querySelector(".scissor").style.border = "none";
        let comp = main();
        if (comp == "scissor") {
            i++;
            Won.textContent = `Won: ${i}`;
            console.log("You won!!");
            Message.innerText = "Hurray!! You won, Rock Beats Scissor";
            Message.style.backgoundColor = "green";
        } else if (comp == "rock") {
            u++;
            console.log("It's a draw");
            Draw.textContent=`Draw: ${u}`;
            Message.innerText = "hun! It's a Draw, You both selected same";
            Message.style.backgoundColor = "Yellow";

        } else if (comp == "paper") {
            l++;
            Lost.textContent = `Lost: ${l}`;
            console.log("You lost");
            Message.innerText = "Ahhh!! You lost Scissor Beats paper";
            Message.style.backgoundColor = "red";

        }
    })


    scisoor.addEventListener("click", () => {
        scisoor.style.border = "5px solid purple";
        document.querySelector(".paper").style.border = "none";
        document.querySelector(".rock").style.border = "none";
        let comp = main();
        if (comp == "scissor") {
            u++;
            Draw.textContent=`Draw: ${u}`;
            console.log("It's a draw",u);
            Message.innerText = "hun! It's a Draw, You both selected same";
            Message.style.backgoundColor = "Yellow";

        } else if (comp == "rock") {
            l++;
            console.log("You lost");
            Lost.textContent = `Lost: ${l}`;
            Message.innerText = "Ahhh!! You lost Scissor Beats Rock";
            Message.style.backgoundColor = "red";
        } else if (comp == "paper") {
            i++;
            Won.textContent = `Won: ${i}`;
            console.log("You won!!");
            Message.innerText = "Hurray!! You won, Scissor Beats Paper";
            Message.style.backgoundColor = "green";
        }
    })
}

me();