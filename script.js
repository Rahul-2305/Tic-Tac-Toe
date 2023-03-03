const squares = document.querySelectorAll(".square");
let currentPlayer = "X";

squares.forEach((square) => {
    square.addEventListener("click", handleClick);
});

function handleClick(event) {
    const square = event.target;
    if (square.textContent !== "") return;
    square.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (
            squares[a].textContent !== "" &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent
        ) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
            return;
        }
    }
    if (isTie()) {
        alert("The game is tied !! , Better Luck next time");
        resetBoard();
    }
}

function isTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === "") {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    squares.forEach((square) => {
        square.textContent = "";
    });
    currentPlayer = "X";
}