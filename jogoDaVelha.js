// Initializing components

let
    first = true,
    player1 = 0,
    player2 = 0,
    velha = 0,

    listOfSpots = [],
function fillLists() {
    for (let i = 1; i < 10; i++) {
        listOfSpots.push(0);
    }
    return listOfSpots;
} fillLists();

// Methods

function whitchPlayer(position) {
    if (first) player = 'x';
    else player = 'o';
    play(player, position - 1);
    first = !first;
}

function play(player, position) {
    updateBoard(player, position);
    check(player, position);
}

function updateBoard(player, position) {
    updateColors();
    updateReferences(position + 1);
    updatePlay(player);
}

function updateColors() {
    Xcolor = document.getElementById("corX").value;
    Ocolor = document.getElementById("corO").value;
}

function updateReferences(position) {
    square = document.getElementById(position);
    button = document.getElementById('boto' + position);
    who = document.getElementById('quem');
}

function updatePlay(player) {
    square.innerHTML = player.toUpperCase();
    square.style.color = 'white';
    button.disabled = true;
    button.style.cursor = "default";
    if (player == 'x') {
        button.style.backgroundColor = Xcolor;
        who.innerHTML = "Vez de: O";
    } else {
        button.style.backgroundColor = Ocolor;
        who.innerHTML = "Vez de: X";
    }
}

function check(player, position) {
    markPlay(player, position);
    var possibilities = checkAll()
    if (possibilities == true) {
        win(player);
    }
    if (possibilities == 'velha') {
        win('velha');
    }

}

function markPlay(player, position) {
    mark = defineMark(player);
    for (let i = 0; i < listOfSpots.length; i++) {
        if (i == position) {
            listOfSpots[i] = mark;
        }
    }
}

function defineMark(player) {
    if (player == 'x') {
        return 1;
    }
    return 2;
}

function checkAll() {
    // horizontal

    for (let i = 0; i < 9; i += 3) {
        test = (listOfSpots[i] == listOfSpots[i + 1] && listOfSpots[i + 1] == listOfSpots[i + 2] && listOfSpots[i] != 0);
        if (test) {
            return true;
        }
    }

    // vertical

    for (let i = 0; i < 9; i++) {
        test = (listOfSpots[i] == listOfSpots[i + 3] && listOfSpots[i + 3] == listOfSpots[i + 6] && listOfSpots[i] != 0);
        if (test) {
            return true;
        }
    }

    // diagonal
    let
        control1 = 0;
        control2 = 8;

    for (let i = 0; i < 2; i++) {
        test = (listOfSpots[control1] == listOfSpots[4] && listOfSpots[4] == listOfSpots[control2] && listOfSpots[control1] != 0);
        control1 += 2;
        control2 -= 2;
        if (test) {
            return true;
        }
    }

    // velha 
    if (!listOfSpots.includes(0)) {
        return 'velha';
    }
}

function win(player) {
    document.getElementById('quemUltimo').innerHTML = `Ganhador(a) da última foi: ${player}`;
    incrementScore(player);
    updateScores();
    reset();
}

function incrementScore(player) {
    if (player == 'x') player1++;
    if (player == 'o') player2++;
    if (player == 'velha') velha++;
}

function updateScores() {
    document.getElementById('cabecalho-div').style.height = "80px";
    xScore = document.getElementById('placarX');
    oScore = document.getElementById('placarO');
    vScore = document.getElementById('placarV');
    xScore.innerHTML = player1;
    oScore.innerHTML = player2;
    vScore.innerHTML = velha;
}

function reset() {
    for (let i = 1; i < 10; i++) {
        updateReferences(i);
        resetBoard();
    }
    who.innerHTML = "Vez de: X";
    first = true;
    listOfSpots = [];
    fillLists();
}

function changeBackgroundColor() {
    updateColors()
    header = document.getElementById('cabeca');
    header.style.backgroundImage = `linear-gradient(45deg, ${Xcolor}, ${Ocolor})`;
}

function resetScores() {
    document.getElementById('quemUltimo').innerHTML = "";
    player1 = 0;
    player2 = 0;
    velha = 0;
    updateScores();
    reset();
}

function resetBoard() {
    button.style.cursor = "pointer";
    square.innerHTML = "+";
    square.style.color = "black";
    button.disabled = false;
    button.style.backgroundColor = "rgb(239, 239, 239)";
}
