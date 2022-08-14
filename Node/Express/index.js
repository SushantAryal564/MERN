const express = require("express");
const app = express();
app.get("/class", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Wrecked</h1><p> Days pass by and my eyes stay dry, and i think that I'm okay Til i find myself i nconversation, fading away the way you smile, the way you walk the time you took to teach me all that you had taught Tell me how am i supposed to move on? These day I'm becoming everything that i hate Wishing you were around but now it's too late My mind is a place that I can't escape your ghost Sometimes I wish that I could wish it all away One more rainly day without you Sometime I wish that I could see you one more day One more rainy day Oh, I'm a wreck without you here yeah, I'm a wreck since you've been gone I've tried to put this all behind me I think I was wrecked all along Yeah, I'm a wreck.</p>"
    );
});
app.listen(8000, () => console.log("We are in server 8000"));
