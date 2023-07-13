//This variable keeps track of whose turn it is.
let activePlayer = "x";
//This array stores an array of moves. we use this to determine win conditions.
let selectedSquares =  [];

//This function is for placing an x or in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a squres a square hasn't been selected already.
    //The .some() method is used to check each elemen of the selectSquare array
    //to se if it contains the square number clicked on.
    if (!selectedSquares.some(Element=> Element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === "x") {
            //If activePlayer is equal to "x", the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be "x" or "o" so, if not "x" it must be "o"
        }else {
            //If acivePlayer is equal to "o", the o.png is placed in html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activatePlayer are concattenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === "x") {
            //If active player is "x" change it to "o".
            activePlayer = "o";
            //If active player is anything other than "x"
        }else {
            //Change the activePlayer to "x"
            activePlayer = "x";
        }
        //This function plays placement sound.
        Audio("./media/place.mp3");
        //This condition checks to see if it is the computers turn.
        if (activePlayer === "o") {
            //This function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function() {computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
   
        while (!success) {
        //A random number between 0 and 8 is selected.
         pickASquare = string(Math.floor(Math.random() * 9));
        //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
        //This line calls the function.
        placeXOrO(pickASquare);
        //This changes our boolean and ends the loop.
        success = true;
            };
        }
    }
}
//This function parses the selectedSquarese array to search for win conditions.
//drawLine() function is colled to draw a line on the screen if the condition is met.
function chechkWinConditions() {
    // x 0, 1, 2 condition.
    if (arrayIncludes("0x", "1x", "2x")) {drawWinLine(50, 100, 558, 100)}
    //x 3, 4, 5 condition.
    else if (arrayIncludes("3x", "4x", "5x")) {drawWinLine(50, 304, 558, 304)}
    //x 6, 7, 8 condition.
    else if (arrayIncludes("6x", "7x", "8x")) {drawWinLine(50, 508, 558, 508)}
    // x 0, 3, 6 condition.
    else if (arrayIncludes("0x", "3x", "6x")) {drawWinLine(100, 50, 100, 558)}
    // x 1, 4, 7 condition.
    else if (arrayIncludes("1x", "4x", "7x")) {drawWinLine(304, 50, 304, 558)}
    // x 2, 5, 8 condition.
    else if (arrayIncludes("2x", "5x", "8x")) {drawWinLine(508, 50, 304, 558)}
    // x 6, 4, 2 condition.
    else if (arrayIncludes("6x", "4x", "2x")) {drawWinLine(100, 508, 510, 90)}
    // x 0, 4, 8 condition.
    else if (arrayIncludes("0x", "4x", "8x")) {drawWinLine(100, 100, 520, 520)}
    // o 0, 1, 2 condition.
    else if (arrayIncludes("00", "10", "20")) {drawWinLine(50, 100, 558, 100)}
    // o 3, 4, 5 condition.
    else if (arrayIncludes("30", "40", "50")) {drawWinLine(50, 304, 558, 304)}
    // o 6, 7, 8 condition.
    else if (arrayIncludes("60", "70", "80")) {drawWinLine(50, 504, 558, 508)}
    // o 0, 3, 6 condition.
    else if (arrayIncludes("00", "30", "60")) {drawWinLine(100, 50, 100, 558)}
    // o 1, 4, 7 condition.
    else if (arrayIncludes("10", "40", "70")) {drawWinLine(304, 50, 304, 558)}
    // o 2, 5, 8 condition.
    else if (arrayIncludes("20", "50", "80")) {drawWinLine(508, 50, 508, 558)}
    // o 6, 4, 2 condition.
    else if (arrayIncludes("60", "40", "20")) {drawWinLine(100, 508, 510, 90)}
    // o 0, 4, 8 condition.
    else if (arrayIncludes("00", "40", "80")) {drawWinLine(100, 100, 520, 520)}
    //This condition checks for a tie. if none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        Audio("./media/tie.mp3");//This function sets a .3 second timer beforee the resetGame is called.
        setTimeout(function() {restGame(); }, 500);
    }
    //This function checks is an array inclouds 3 strings. it is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a =selectedSquares.includes(squareA);
        const b =selectedSquares.includes(squareB);
        const c =selectedSquares.includes(squareC);
        //if the 3 variables we pass are all includesd in our array then
        //true is returned and our else if condition executes the drawline() function.
        if (a === true && b === true && c === true) { return true; }
    }
}