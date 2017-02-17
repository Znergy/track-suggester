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
    
    
    
    
    if (choiceTotal <= 6) {
      $("#designTrack").show();
    } else if (choiceTotal > 6 && choiceTotal <= 12) {
      $("#phpTrack").show();
    } else if (choiceTotal > 12 && choiceTotal <= 18) {
      $("#rubyTrack").show();
    } else if (choiceTotal > 18 && choiceTotal <= 24) {
      $("#androidTrack").show();
    } else if (choiceTotal > 24 && choiceTotal <= 45) {
      $("#cNetTrack").show();
    }
    
  });
});