import dotenv from 'dotenv'
dotenv.config()

import {Client, GatewayIntentBits} from 'discord.js'

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages
	],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) =>{
	console.log(message);
	if (!message?.author.bot) {
        message.author.send(`Echo ${message.content}`);
    }

	const channel = await client.channels.fetch('1231691288114499765');
	channel.send({content: "Test"});
});
