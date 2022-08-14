const event = require("events");
const mainEvent = new event();
const sendMessage = () => {
  console.log("Message sent");
};
mainEvent.on("message send", sendMessage);
mainEvent.emit("message send");
