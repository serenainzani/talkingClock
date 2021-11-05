const talkingClock = require("./talkingClock")

//Never done unit tests and had difficulties with pre-made test frameworks. Thus this is my custom unit test function.
function unitTests(){
    typeof talkingClock.talkingClock() === "string" ? console.log("Passed! Obj 1 - String returned") : console.log("Failed! Obj 1 - String not returned");
    typeof talkingClock.talkingClock("14:56") === "string" ? console.log("Passed! Obj 2 - String returned") : console.log("Failed! Obj 2 - String not returned");
    /^[A-Z]/.test(talkingClock.talkingClock()) ===  true ? console.log("Passed! Obj 1 - Time text starts with capital letter") : console.log("Failed! Obj 1 - Time text does NOT start with capital letter");
    /^[A-Z]/.test(talkingClock.talkingClock("13:00")) ===  true ? console.log("Passed! Obj 2 - Time text starts with capital letter") : console.log("Failed! Obj 2 - Time text does NOT start with capital letter");
    talkingClock.talkingClock("12:121") === "Not valid time" ? console.log("Passed! Obj 2 - Time with too many minutes digits rejected") : console.log("Failed! Obj 2 - Time with too many minutes digits accepted");
    talkingClock.talkingClock("123:12") === "Not valid time" ? console.log("Passed! Obj 2 - Time with too many hour digits rejected") : console.log("Failed! Obj 2 - Time with too many hour digits accepted");
    talkingClock.talkingClock("0405") === "Not valid time" ? console.log("Passed! Obj 2 - Time with no colon rejected") : console.log("Failed! Obj 2 - Time with no colon accepted");
    talkingClock.talkingClock("01:60") === "Not valid time" ? console.log("Passed! Obj 2 - Minutes edge case 60 rejected") : console.log("Failed! Obj 2 - Minutes edge case 60 accepted");
    talkingClock.talkingClock("03:59") != "Not valid time" ? console.log("Passed! Obj 2 - Minutes edge case 59 accepted") : console.log("Failed! Obj 2 - Minutes edge case 59 rejected");
    talkingClock.talkingClock("24:47") === "Not valid time" ? console.log("Passed! Obj 2 - Hours edge case 24 rejected") : console.log("Failed! Obj 2 - Hours edge case 24 accepted");
    talkingClock.talkingClock("23:47") != "Not valid time" ? console.log("Passed! Obj 2 - Hours edge case 23 accepted") : console.log("Failed! Obj 2 - Hours edge case 23 rejected");
}

unitTests();