//Dependences
var saveBtn = $(".saveBtn");
var textAreas = $("#description");
var head = $("#currentDay");
var hour = $(".hour");
var timeBlock = $(".time-block");
var firstBlock = $("#one");
var secondBlock = $("#two");
var thirdBlock = $("#three");
var fourthBlock = $("#four");
var fifthBlock = $("#five");
var sixthBlock = $("#six");
var seventhBlock = $("#seven");
var eighthBlock = $("#eight");
var ninthBlock = $("#nine");

//data
var time = moment();
var newTime = moment().format("h:mm a");
//current time to print to screed(header)

//funcitons

//Master funciton
function runPlanner() {
  timeOfDay();
  getTime();
  console.log(firstBlock.text());
}
//handle page load

//helper functions
function getTime() {
  var currentTime = time.format("dddd, h:mm a");
  head.text(currentTime);
}
function setStorage(event) {
  //var textContent = textAreas.text;
  //localStorage.setItem("textArea", textContent);
}
//save input to local storage

// function getStorage() {
//   for (var i = 1; i <= 9; i++) {
//     var timeBlock = $(`#${i}`);
//     localStorage.getItem();
//     textAreas.text(currentTime);
//   }
// }

//grab from local storage
//display on page
function timeOfDay() {
  if (firstBlock.text() > newTime) {
    firstBlock.siblings().addClass("future");
  } else if (firstBlock.text() < newTime) {
    firstBlock.siblings().addClass("past");
  } else {
    firstBlock.siblings().addClass("present");
  }
  if (secondBlock.text() > newTime) {
    secondBlock.siblings().addClass("future");
  } else if (secondBlock.text() < newTime) {
    secondBlock.siblings().addClass("past");
  } else {
    secondBlock.siblings().addClass("present");
  }
  if (thirdBlock.text() > newTime) {
    thirdBlock.siblings().addClass("future");
  } else if (thirdBlock.text() < newTime) {
    thirdBlock.siblings().addClass("past");
  } else {
    thirdBlock.siblings().addClass("present");
  }
  if (fourthBlock.text() > newTime) {
    fourthBlock.siblings().addClass("future");
  } else if (fourthBlock.text() < newTime) {
    fourthBlock.siblings().addClass("past");
  } else {
    fourthBlock.siblings().addClass("present");
  }
  if (fifthBlock.text() > newTime) {
    fifthBlock.siblings().addClass("future");
  } else if (fifthBlock.text() < newTime) {
    fifthBlock.siblings().addClass("past");
  } else {
    fifthBlock.siblings().addClass("present");
  }
  if (sixthBlock.text() > newTime) {
    sixthBlock.siblings().addClass("future");
  } else if (sixthBlock.text() < newTime) {
    sixthBlock.siblings().addClass("past");
  } else {
    sixthBlock.siblings().addClass("present");
  }
  if (seventhBlock.text() > newTime) {
    seventhBlock.siblings().addClass("future");
  } else if (seventhBlock.text() < newTime) {
    seventhBlock.siblings().addClass("past");
  } else {
    seventhBlock.siblings().addClass("present");
  }
  if (eighthBlock.text() > newTime) {
    eighthBlock.siblings().addClass("future");
  } else if (eighthBlock.text() < newTime) {
    eighthBlock.siblings().addClass("past");
  } else {
    eighthBlock.siblings().addClass("present");
  }
  if (ninthBlock.text() > newTime) {
    ninthBlock.siblings().addClass("future");
  } else if (ninthBlock.text() < newTime) {
    ninthBlock.siblings().addClass("past");
  } else {
    ninthBlock.siblings().addClass("present");
  }
}

//based on current time, apply new css classes
//(If less then current time ==> new color)

//user interactions

//buttons with event listeners (save input to local storage)
saveBtn.on("click", setStorage);

//initilization
runPlanner();
