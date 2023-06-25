const main_container = document.getElementById("main__container");
const start_game_btn = document.getElementById("start-game-btn");

const game_container = document.getElementById("game__container");
const player_turn = document.getElementById("player-turn");
const tic_tac_toe_btns = document.querySelectorAll(".tic-tac-toe__btns");
let player_turn_count = 0;
let tic_tac_toe_arr = new Array(9);

const winner_container = document.getElementById("winner__container");
const winner_title = document.getElementById("winner__title");
const winner_description = document.getElementById("winner__description");
const main_page_btn = document.getElementById("main-page-btn");

/* Main Page */
start_game_btn.addEventListener("click", function(){
    main_container.style.display = "none";
    game_container.style.display = "block";
})

/* Game Page */
for (let i = 0; i < tic_tac_toe_btns.length; i++) {
    tic_tac_toe_btns[i].addEventListener("click", function(){
        /* Player 1 */
        if (player_turn_count % 2 === 0) {
            /* If the tic tac toe buttons textContent is empty */
            if (tic_tac_toe_btns[i].textContent === "") {
                /* Player 1's tic tac toe "O" and background color change to red */
                tic_tac_toe_btns[i].textContent = "O";
                tic_tac_toe_btns[i].style.backgroundColor = "rgb(255, 0, 0)";
                /* Update tic tac toe array */
                tic_tac_toe_arr[i] = tic_tac_toe_btns[i].textContent;
                /* Change text, increment, etc */
                player_turn_count++;
                player_turn.textContent = "Turn " + (player_turn_count + 1) + ": Player 2's turn";

                /* If player get either one of the line */
                if (
                    /* Horizontal */
                    (tic_tac_toe_arr[0] === "O" && tic_tac_toe_arr[1] === "O" && tic_tac_toe_arr[2] === "O") || 
                    (tic_tac_toe_arr[3] === "O" && tic_tac_toe_arr[4] === "O" && tic_tac_toe_arr[5] === "O") || 
                    (tic_tac_toe_arr[6] === "O" && tic_tac_toe_arr[7] === "O" && tic_tac_toe_arr[8] === "O") ||
                    /* Vertical */
                    (tic_tac_toe_arr[0] === "O" && tic_tac_toe_arr[3] === "O" && tic_tac_toe_arr[6] === "O") ||
                    (tic_tac_toe_arr[1] === "O" && tic_tac_toe_arr[4] === "O" && tic_tac_toe_arr[7] === "O") ||
                    (tic_tac_toe_arr[2] === "O" && tic_tac_toe_arr[5] === "O" && tic_tac_toe_arr[8] === "O") ||
                    /* Others */
                    (tic_tac_toe_arr[0] === "O" && tic_tac_toe_arr[4] === "O" && tic_tac_toe_arr[8] === "O") ||
                    (tic_tac_toe_arr[2] === "O" && tic_tac_toe_arr[4] === "O" && tic_tac_toe_arr[6] === "O")
                ) 
                {
                    winner_container.style.display = "flex";
                    winner_title.textContent = "Congratulations!";
                    winner_description.textContent = "Player 1 Win!";
                }
                /* Else if tic tac toe is full board */
                else if (
                    tic_tac_toe_arr[0] !== undefined && tic_tac_toe_arr[1] !== undefined && tic_tac_toe_arr[2] !== undefined && 
                    tic_tac_toe_arr[3] !== undefined && tic_tac_toe_arr[4] !== undefined && tic_tac_toe_arr[5] !== undefined &&
                    tic_tac_toe_arr[6] !== undefined && tic_tac_toe_arr[7] !== undefined && tic_tac_toe_arr[8] !== undefined
                ) 
                {
                    winner_container.style.display = "flex";
                    winner_title.textContent = "Draw!";
                    winner_description.textContent = "None of the player win!"
                }
            }
        }
        /* Player 2 */
        else {
            /* If the tic tac toe buttons textContent is empty */
            if (tic_tac_toe_btns[i].textContent === "") {
                /* Player 2's tic tac toe "X" and background color change to blue */
                tic_tac_toe_btns[i].textContent = "X";
                tic_tac_toe_btns[i].style.backgroundColor = "rgb(0, 0, 255)";
                /* Update tic tac toe array */
                tic_tac_toe_arr[i] = tic_tac_toe_btns[i].textContent;
                /* Change text, increment, etc */
                player_turn_count++;
                player_turn.textContent = "Turn " + (player_turn_count + 1) + ": Player 1's turn";

                /* If player get either one of the line */
                if (
                    /* Horizontal */
                    (tic_tac_toe_arr[0] === "X" && tic_tac_toe_arr[1] === "X" && tic_tac_toe_arr[2] === "X") || 
                    (tic_tac_toe_arr[3] === "X" && tic_tac_toe_arr[4] === "X" && tic_tac_toe_arr[5] === "X") || 
                    (tic_tac_toe_arr[6] === "X" && tic_tac_toe_arr[7] === "X" && tic_tac_toe_arr[8] === "X") ||
                    /* Vertical */
                    (tic_tac_toe_arr[0] === "X" && tic_tac_toe_arr[3] === "X" && tic_tac_toe_arr[6] === "X") ||
                    (tic_tac_toe_arr[1] === "X" && tic_tac_toe_arr[4] === "X" && tic_tac_toe_arr[7] === "X") ||
                    (tic_tac_toe_arr[2] === "X" && tic_tac_toe_arr[5] === "X" && tic_tac_toe_arr[8] === "X") ||
                    /* Others */
                    (tic_tac_toe_arr[0] === "X" && tic_tac_toe_arr[4] === "X" && tic_tac_toe_arr[8] === "X") ||
                    (tic_tac_toe_arr[2] === "X" && tic_tac_toe_arr[4] === "X" && tic_tac_toe_arr[6] === "X")
                ) 
                {
                    winner_container.style.display = "flex";
                    winner_title.textContent = "Congratulations!";
                    winner_description.textContent = "Player 2 Win!";
                }
                /* Else if tic tac toe is full board */
                else if (
                    tic_tac_toe_arr[0] !== undefined && tic_tac_toe_arr[1] !== undefined && tic_tac_toe_arr[2] !== undefined && 
                    tic_tac_toe_arr[3] !== undefined && tic_tac_toe_arr[4] !== undefined && tic_tac_toe_arr[5] !== undefined &&
                    tic_tac_toe_arr[6] !== undefined && tic_tac_toe_arr[7] !== undefined && tic_tac_toe_arr[8] !== undefined
                ) 
                {
                    winner_container.style.display = "flex";
                    winner_title.textContent = "Draw!";
                    winner_description.textContent = "None of the player win!"
                }
            }
        }
    })
}

/* Winner Page */
main_page_btn.addEventListener("click", function(){
    winner_container.style.display = "none";
    game_container.style.display = "none";
    main_container.style.display = "block";

    /* Reset everything after back to main page */
    for (let i = 0; i < tic_tac_toe_btns.length; i++) {
        tic_tac_toe_btns[i].textContent = "";
        tic_tac_toe_btns[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
    player_turn_count = 0;
    player_turn.textContent = "Turn " + (player_turn_count + 1) + ": Player 1's turn";
    tic_tac_toe_arr = new Array(9);
})
