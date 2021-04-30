$(document).ready(function () {
  //grab current date and time from moment, specify format
  var currentDate = moment().format("dddd, MMMM Do, YYYY");
  //add date to header
  $("#currentDay").text(currentDate);

  //Event Handlers
  $(".saveBtn").on("click", function () {
    //capture info that the user typed and save in local storage, use "this" to link the button clicked to the text area associated with it

    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //store user text and the time block name
    localStorage.setItem(time, userInput);
  });

  //display values from local storage to each corrresponding text block
  $("#9AM .description").val(localStorage.getItem("9AM"));
  $("#10AM .description").val(localStorage.getItem("10AM"));
  $("#11AM .description").val(localStorage.getItem("11AM"));
  $("#12PM .description").val(localStorage.getItem("12PM"));
  $("#1PM .description").val(localStorage.getItem("1PM"));
  $("#2PM .description").val(localStorage.getItem("2PM"));
  $("#3PM .description").val(localStorage.getItem("3PM"));
  $("#4PM .description").val(localStorage.getItem("4PM"));
  $("#5PM .description").val(localStorage.getItem("5PM"));
});
