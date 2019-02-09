const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543827668647411751")
setInterval(function() {
channel.send(`m4 3arf`);
}, 30)
})

client.login("NTQzODI1NTgwOTcwNDc1NTU5.D0CM8Q.XC08HZ1k7ZldhgmAoIROrnsfcuQ");
