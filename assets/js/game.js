$(window).on('load', function(e){

  var budget4Bling ;
  var walletOfShame = 0;
  var gemVal ;
  var gemArray = []
  var winCount = 0;
  var lossCount = 0;
  var x = 0;

  //Random function for random numbers like gem values and budget.
  function randomizer() {
      //Define value of randomly generated number that needs to be matched.
      budget4Bling = 19 + Math.floor(Math.random() * 101);
      //Displaying that number.
      $("#gemBudget").text('$' + budget4Bling);
  }

  //Empties wallet, resets walletOfShame to 0 and displays it.
  function reset() {
    walletOfShame = 0
    $("#wallet").text('$' + walletOfShame);
    gemArray = [];
  }

  function gemFormation() {
      //Define 4 values of randomly generated prices for gems.
      for (; gemArray.length < 4;) {
        x = 1 + Math.floor(Math.random() * 12)

        //Assuring there are not duplicates
        if (gemArray.indexOf(x) == -1) {
          gemArray.push(x)
        }
      }

      for (var i = 0; i < gemArray.length; i++) {
        //Connecting mystery prices to the gems.
        $(".gemImg."+i).attr("data-gemprice", gemArray[i]);
      }

  }

  function gemDisplay() {
      //Loop to create four gem elements with mystery values attached.
      //Tweaking code from a previous class Assignment
      for (var i = 0; i < 4; i++) {

        //Defining a variable to hold element tag for an image, which jQuery will create
        var gemPic = $("<img>");

        //Adding a class to each instance of an element created by this loop/
        gemPic.addClass("gemImg "+i);

        //Each gemPic will be given a dynamically generated src link to an image
        //This is a problem. We want different images, not just one
        //Problem solved simply by cutting the string apart and injecting index. Cool beans.
        gemPic.attr("src", "assets/images/gem"+(i+1)+".png");

        //Adding these
        $("#choiceGems").append(gemPic);
      }
  }

  //Calling the randomizer to give inital values to budget and gems.
  randomizer();
  gemDisplay();
  gemFormation();
  console.log(gemArray);
  //Stuff that happens when a user clicks on shiny gems. The meat of the game.
  $(".gemImg").on("click", function() {

    //This code pulls the gem price from the attribute
    // created above with the (gemImg)'s. "This" referencing the value of the
    // image the user currently pressing on.
    var gemPrice = ($(this).attr("data-gemprice"));
    console.log(gemPrice);

    //Since attributes on HTML elements are strings, we must convert it
    // to an integer before adding to the counter. This is new ground.
    //Learned something new here.
    gemPrice = parseInt(gemPrice);

    // We then add code to sum up the values (gemPrice)'s.
    // Every click on a gem, is a buy which incrases the doller amount
    // in the wallet of shame (walletOfShame variable).
    walletOfShame += gemPrice;

    //Display the ever-increasing amount of money spent on bling in HTML.
    $("#wallet").text('$' + walletOfShame);

    if (walletOfShame === budget4Bling) {
      winCount++
      $("#winner").text(winCount);
      reset();
      randomizer();
      gemFormation();
      console.log(gemArray);
    }
    else if (walletOfShame >= budget4Bling) {
      lossCount++
      $("#loser").text(lossCount);
      //Insert reset here
      reset();
      randomizer();
      gemFormation();
      console.log(gemArray);
    }

  });

});
