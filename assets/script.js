$(document).ready(function () {
  //grab current date and time from moment, specify format
  var currentDate = moment().format("dddd, MMMM Do, YYYY");
  //add date to header
  $("#currentDay").text(currentDate);

  //function to check time and determining what class to add to each time block: past, present, or future
  function checkTime() {
    //grab the current hour using moment

    var currentHour = moment().hours();

    //check current hour against block hour
    //if else
    //need to grab hours for each time block
    //loop through timeblock hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
    //check curernt hour against block hour
  }

  checkTime();

  //Event Handlers
  $(".saveBtn").on("click", function () {
    //capture info that the user typed and save in local storage, use "this" to link the button clicked to the text area associated with it

    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //store user text and the time block name
    localStorage.setItem(time, userInput);
  });

  //display values from local storage to each corrresponding text block
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
