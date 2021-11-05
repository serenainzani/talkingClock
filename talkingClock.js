function talkingClock(...args){
    if(args.length === 0){
        var timeNow = new Date();
        var hourNow = timeNow.getHours();
        var minutesNow = timeNow.getMinutes();
        var fiveMinutesNow = Math.ceil(minutesNow/5)*5
    }else if(args.length === 1 && /^([0-2][0-9]:[0-5][0-9])$/.test(args[0]) === true){
        if(/^(2[4-9])/.test(args[0]) === true){
            return "Not valid time"
        } else{
            var hourNow = parseInt(args[0][0]+args[0][1]) 
            var minutesNow = parseInt(args[0][3]+args[0][4])
        }
    } else{
        return "Not valid time"
    }

    //human friendly text interpreted as simple and abstracted time, not exact.
    var minutesText = ["o'clock", "five","ten","quarter", "twenty","twenty five","half"];
    var fiveMinutesNow = Math.ceil(minutesNow/5)*5
    if(fiveMinutesNow <= 30){
        fiveMinutesNowText = minutesText[fiveMinutesNow/5];
    }else{
        fiveMinutesNowText = (minutesText.reverse())[(fiveMinutesNow/5)-6];
        hourNow += 1;
    }
    //var fiveMinutesNowText = fiveMinutesNow <= 30 ? minutesText[fiveMinutesNow/5] : (minutesText.reverse())[(fiveMinutesNow/5)-6];
    
    var hourText = ["twelve", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
    var hourNowText = hourNow < 12 ? hourText[hourNow] : hourText[hourNow-12];;

    if(fiveMinutesNow === 0){
        hourNowText = hourNowText[0].toUpperCase() + hourNowText.slice(1);
        return hourNowText+" "+fiveMinutesNowText
    }else{
        fiveMinutesNowText = fiveMinutesNowText[0].toUpperCase() + fiveMinutesNowText.slice(1);
        return fiveMinutesNow <= 30 ? fiveMinutesNowText+" past "+hourNowText : fiveMinutesNowText+" to "+hourNowText;
    }
}

module.exports = { talkingClock };

