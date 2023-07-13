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