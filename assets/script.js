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
var btnOne = $("#button1");
var btnTwo = $("#button2");
var btnThree = $("#button3");
var btnFour = $("#button4");
var btnFive = $("#button5");
var btnSix = $("#button6");
var btnSeven = $("#button7");
var btnEight = $("#button8");
var btnNine = $("#button9");
var textOne = $("#text1");
var textTwo = $("#text2");
var textThree = $("#text3");
var textFour = $("#text4");
var textFive = $("#text5");
var textSix = $("#text6");
var textSeven = $("#text7");
var textEight = $("#text8");
var textNine = $("#text9");
//data
var time = moment();
var newTime = moment().format("h:mm a");
//funcitons
function runPlanner() {
  timeOfDay();
  getTime();
  getStorage();
}
//helper functions
function getTime() {
  var currentTime = time.format("dddd, h:mm a");
  head.text(currentTime);
}

function getStorage() {
  for (var i = 1; i < 10; i++) {
    var item = localStorage.getItem("button" + [i]);
    if (item == null) {
      console.log("empty");
    } else {
      var element = $("#text" + [i]);
      element.text(item);
    }
  }
}

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

//user interactions

//buttons with event listeners (save input to local storage)
btnOne.on("click", function () {
  localStorage.setItem("button1", textOne.val());
});
btnTwo.on("click", function () {
  localStorage.setItem("button2", textTwo.val());
});
btnThree.on("click", function () {
  localStorage.setItem("button3", textThree.val());
});
btnFour.on("click", function () {
  localStorage.setItem("button4", textFour.val());
});
btnFive.on("click", function () {
  localStorage.setItem("button5", textFive.val());
});
btnSix.on("click", function () {
  localStorage.setItem("button6", textSix.val());
});
btnSeven.on("click", function () {
  localStorage.setItem("button7", textSeven.val());
});
btnEight.on("click", function () {
  localStorage.setItem("button8", textEight.val());
});
btnNine.on("click", function () {
  localStorage.setItem("button9", textNine.val());
});

//initilization
runPlanner();
