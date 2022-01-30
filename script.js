let saveBtn = $(".saveBtn");


function saveTasks () {
    let currentTime = $(this).data("hour");
    let rowHour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".textarea").val();

    
    if (task === "") {
        localStorage.setItem(textarea, "");
    }
    else {
        localStorage.setItem(textarea, task);
    }
}

saveBtn.on("click", saveTasks);



description.each(function () {
    let timeBlock = parseInt($(this).attr("id"));

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});


description.each(function() {

    for (let i = 0; i < localStorage.length; i++) {
        let objectKey = localStorage.key(i);
        let taskValue = localStorage.getItem(textarea);
        let rowHour = $(this).siblings("").text();
}

})