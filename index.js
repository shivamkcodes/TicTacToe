console.log('tic tac toe');
//constants
const gameStart = 0;
const gameEnd = 0;
//html elements
const player = document.getElementById('player');
const table = document.getElementById('table');

const game = {
    state: gameStart,
    turn: 'X',
    move: 0,

}

function endGame(winner) {
    if (winner) {
        alert('Game Over | winner ' + winner);
        Array.from(document.getElementsByTagName('td')).forEach(cell => {
            cell.textContent = '';
        });
        game.move = 0;
        // endGame(game.turn);
    } else {
        alert('Game Over | Draw');
        Array.from(document.getElementsByTagName('td')).forEach(cell => {
            cell.textContent = '';
        });
        // endGame(game.turn);
        game.move = 0;
    }

    game.state = gameEnd;
}

function restartGame() {
    if (Math.random > 0.5) {
        game.turn = 'O';
    } else {
        game.turn = 'X'
    }

    game.state = gameStart;
    game.move = 0;

    Array.from(document.getElementsByTagName('td')).forEach(cell => {
        cell.textContent = '';
    });
}

function isSequenceCaptured(arrayof3cells) {
    let winningCombo = game.turn + game.turn + game.turn;
    if (arrayof3cells.map(i => i.textContent).join('') === winningCombo) {
        // alert('Game Over | winner ' + game.turn);
        // window.location.reload();
        endGame(game.turn);
    }
}

function isRowCaptured(row) {
    let tblrow = Array.from(table.children[0].children[row - 1].children);
    isSequenceCaptured(tblrow);

}

function isColCaptured(col) {
    let tblcol = [
        table.children[0].children[0].children[col - 1],
        table.children[0].children[1].children[col - 1],
        table.children[0].children[2].children[col - 1]
    ];
    isSequenceCaptured(tblcol);

}

function isDiaCaptured(row, col) {
    if (row != col && row + col != 4) {
        return
    }
    let dia1 = [
        table.children[0].children[0].children[0],
        table.children[0].children[1].children[1],
        table.children[0].children[2].children[2]
    ]
    let dia2 = [
        table.children[0].children[0].children[2],
        table.children[0].children[1].children[1],
        table.children[0].children[2].children[0]
    ]

    isSequenceCaptured(dia1);
    isSequenceCaptured(dia2);

}

function nextTurn() {
    game.move++;
    if (game.turn === 'X') {
        game.turn = 'O';
    } else {
        game.turn = 'X';
    }
    if (game.move == 9) {
        // alert('Game Over ');
        endGame();

    }
    player.textContent = game.turn;
}


function boxClicked(row, col) {
    if (game.state = gameEnd) {
        alert('Game Ended | ReStart to play Again');
    }
    console.log("box clicked", row, col);

    let clickBox = table.children[0].children[row - 1].children[col - 1];
    clickBox.innerHTML = game.turn;
    isRowCaptured(row);
    isColCaptured(col);
    isDiaCaptured(row, col);
    nextTurn();
}