const { Client, IntentsBitField } = require("discord.js");
const fetch = require("node-fetch");
const client = new Client({intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]});
const channels = ["1196589910459691069", "958580587420069918", "958580478657568808", "958580373133094922", "958580421711519776", "1079780711017496617", "994627482458280047", "959137986438660166"];
const uptime = Date.now();

const server = http.createServer((req, res => {
    res.send("Ok.");
}));
server.listen(3000);

setinterval(() => fetch("http://DrearyMiserlyBsddaemon.cmtocc.repl.co"), 60000);

client.on("messageCreate", async message => {
     if(!channels.includes(message.channel.id)) return;
     await message.react("1161380987637342298");
     message.react("1091502689025802303");
});

client.login(process.env.TOKEN);