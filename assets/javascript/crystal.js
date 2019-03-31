$( document ).ready(function(){
       
    var Random=Math.floor(Math.random()*101+19)
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 19 - 120
        //
        $('#randomNumber').text(Random);
        // Appending random number to the randomNumber id in the html doc
        //
    var Firestone= Math.floor(Math.random()*11+1)
    var Leafstone= Math.floor(Math.random()*11+1)
    var Waterstone= Math.floor(Math.random()*11+1)
    var Thunderstone= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each evolution stone
    // Random number has to be between 1 - 12
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for wins and loses
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  //resets the game
  function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    Firestone= Math.floor(Math.random()*11+1);
    Leafstone= Math.floor(Math.random()*11+1);
    Waterstone= Math.floor(Math.random()*11+1);
    Thunderstone= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
   
    } 

     //adds the wins to the userTotal
  function evolve(){
    alert("Your Evee is Evolving!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    
    }

    //addes the losses to the userTotal
  function NoEvolution(){
    alert ("Hm? Something happened...Your Evee did not evolve.");
      losses++;
      $('#numberLosses').text(losses);
      reset()

   }
   
     //sets up click for jewels
     $('#one').on ('click', function(){
        userTotal = userTotal + Firestone;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
              //sets win/lose conditions
            if (userTotal == Random){
              evolve();
            }
            else if ( userTotal > Random){
              NoEvolution();
            }   

    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + Leafstone;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            evolve();
          }
          else if ( userTotal > Random){
            NoEvolution();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + Waterstone;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            evolve();
          }
          else if ( userTotal > Random){
            NoEvolution();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + Thunderstone;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            evolve();
          }
          else if ( userTotal > Random){
            NoEvolution();
          }
        });  
});