var Kahoot = require("kahoot.js-latest");
var colors = require('colors');    
const prompt = require('prompt-sync')();
const name = prompt('Bot names: ')
const pin = prompt('Game PIN: ');
const bots = prompt('Bots: ');

number = 1
number2 = 1
setInterval(kahoot, 0);
function kahoot() {
const client = new Kahoot;
if(number <= parseInt(bots)){
client.join(pin, name + (number++))
client.on("Joined", () => {
 console.log("Bots sent: " + number2++);
}); 
}
client.on("QuizEnd", () => {
  console.log("Game has ended.");
});
}
