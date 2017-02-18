/* Things to do..
* 1) take input values save as global variable
* 2) range those values on button click and show req. div
*/

/* Notes:
- 

*/

$(document).ready(function() {
  
  var choiceTotal = 0;
  
  $("#submit").one('click', function() {
    
    // take the values passed when clicked and when the if else runs we will have the correlating div showing..
    
    var choices = ["ruby1", "ruby2", "ruby3", "android1", "android2", "android3", "design1", "design2", "design3", "php1", "php2", "php3", "cNet1", "cNet2", "cNet3"];

    choices.forEach(function(choice) {
      var userChoice = ("#" + choice).toString();
      var value = parseInt($(userChoice).val());
      var isChecked = $(userChoice).is(':checked');

      if (isChecked === true) {
        choiceTotal = choiceTotal + value;
      }
    });
    
    
    if (choiceTotal <= 6 && choiceTotal > 0) {
      $("#designTrack").show();
    } else if (choiceTotal > 6 && choiceTotal <= 12) {
      $("#phpTrack").show();
    } else if (choiceTotal > 12 && choiceTotal <= 18) {
      $("#rubyTrack").show();
    } else if (choiceTotal > 18 && choiceTotal <= 24) {
      $("#androidTrack").show();
    } else if (choiceTotal > 24 && choiceTotal <= 64) {
      $("#cNetTrack").show();
    } else {
      alert("You need to check something."); 
      location.reload();
    }
    
    $(".header-hide").hide();
    
    $('html,body').animate({
        scrollTop: $(".result-header").offset().top
    },'slow');
    
  });
});