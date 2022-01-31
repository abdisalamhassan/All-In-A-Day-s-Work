//set live time to jumbotron
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);


let saveBtn = $(".saveBtn");

//Save Local Storage
saveBtn.on('click',function(event){
    var text = ($(event.target.previousElementSibling).val())
    var key = (event.target.id)
    localStorage.setItem(key,text)
})



// Pulls any saved data from localStorage
$("#hour7AM").val(localStorage.getItem("button7AM"));
$("#hour8AM").val(localStorage.getItem("button8AM"));
$("#hour9AM").val(localStorage.getItem("button9AM"));
$("#hour10AM").val(localStorage.getItem("button10AM"));
$("#hour11AM").val(localStorage.getItem("button11AM"));
$("#hour12PM").val(localStorage.getItem("button12PM"));
$("#hour1PM").val(localStorage.getItem("button1PM"));
$("#hour2PM").val(localStorage.getItem("button2PM"));
$("#hour3PM").val(localStorage.getItem("button3PM"));
$("#hour4PM").val(localStorage.getItem("button4PM"));
$("#hour5PM").val(localStorage.getItem("button5PM"));


