var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);


let saveBtn = $(".saveBtn");


// load any saved data from localStorage
$(".saveBtn .textarea").val(localStorage.getItem("#hour7"));
$(".saveBtn .textarea").val(localStorage.getItem("#hour8"));
$("#hour9AM .textarea").val(localStorage.getItem("#hour9"));
$("#hour10AM .textarea").val(localStorage.getItem("#hour10"));
$("#hour11AM .textarea").val(localStorage.getItem("#hour11"));
$("#hour12PM.textarea").val(localStorage.getItem("#hour12"));
$("#hour1PM .textarea").val(localStorage.getItem("#hour1"));
$("#hour2PM .textarea").val(localStorage.getItem("#hour2"));
$("#hour3PM .textarea").val(localStorage.getItem("#hour3"));
$("#hour4PM .textarea").val(localStorage.getItem("#hour4"));
$("#hour5PM .textarea").val(localStorage.getItem("#hour5"));