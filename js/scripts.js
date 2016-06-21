$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    // debugger;
    var myString = $("#quote").val().split("");
    var vowels = ["a", "e", "i", "o", "u"];


   var converted = myString.map(function(letter) {
    //  alert(letter);
      if ($.inArray(letter, vowels) === -1) {
          return letter;
      }
      else {
       return "-";
      }

    });
    alert(converted);



  });
});




    // user submits a quote string
    // TODO

    // store the split string in an array
    // split string on words into an array
    // loop through array and replace each word's vowels with -




  // loop through array and replace certain values with a -

  // certains are vowels stored in an array?

  // put string back together

  // display altered string

  // button to display original string

  //
  // var myString = $("#quote").val();
  // var splitString = myString.split(" ");
  //
  // splitString.forEach(word) {
  //   if
  // }
