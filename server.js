const express = require("express");
const talkingClock = require("./talkingClock")
const app = express();

//current time
app.get("/",(req,res) => {
    var timeText = talkingClock.talkingClock();
    return res.json({"time": timeText});
})

//custom time
app.get("/:time",(req,res) => {
    var time = talkingClock.talkingClock(req.params.time);
    return res.json({"time": time});
})

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);
