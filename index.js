require('dotenv').config();

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent] 
        });

//prints status when bot is ready
client.on('ready', () => {
    console.log('bot is ready');
})

//simple replay to "marco"
client.on('messageCreate', async (message) => {
    if (message.content === 'marco') {
        message.reply({
            content: 'polo',
        })
    }
//gets quote from api.quotable.io
    else if (message.content === 'quote') {
        let resp = await axios.get(`https://api.quotable.io/random`);
        const quote = resp.data.content;

        message.reply({
            content: quote,
        })
    }
})

client.login(process.env.DISCORD_BOT_ID);