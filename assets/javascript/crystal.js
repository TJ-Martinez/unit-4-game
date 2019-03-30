$( document ).ready(function(){
       
    var Random=Math.floor(Math.random()*101+19)
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 19 - 120
        //
        $('#randomNumber').text(Random);
        // Appending random number to the randomNumber id in the html doc
        //