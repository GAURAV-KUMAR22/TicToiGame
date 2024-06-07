let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGame = document.querySelector("#btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let dialog = document.querySelector('.myDialog')


let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "x";
            turnO = false;
        } else {
            box.innerText = "o";
            turnO = true
        }
        box.disabled = true;
        checkwinner();

    })
})

const showWinner = (winner) => {
    function showModel() {
        dialog.classList.remove("hide");
        dialog.show();
    }
    showModel(dialog.innerText = `Congratulations, Winner is ${winner}`);
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkwinner = () => {
    for (let pattern of winPatterns) {
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("winner", post1Val);
                showWinner(post1Val);
            }
        }
    }
}

