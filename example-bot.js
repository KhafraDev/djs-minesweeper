/*
install discord.js master with npm i discordjs/discord.js
install djs-minesweeper with npm i khafradev/djs-minesweeper
*/

const { Minesweeper } = require('./index');
const { Client, MessageEmbed } = require('discord.js');

const KhafraClient = new Client();
const prefix = '!!';

KhafraClient.on('ready', () => {
    console.log('Successfully logged in!');
});

KhafraClient.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    if(!message.guild.available) return;
    
    const [cmd] = message.content.split(/\s+/g);
    if(cmd !== prefix + 'ms') return;

    const game = new Minesweeper().start();
    const embed = new MessageEmbed().setColor('#FFFFF').setDescription(game);

    try {
        await message.channel.send(embed);
    } catch(err) {
        console.error(err);
    }
});

KhafraClient.login('token');