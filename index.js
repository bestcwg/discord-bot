import dotenv from 'dotenv'
import {Client, GatewayIntentBits, Events} from 'discord.js'
import getCurrentPrice from './yahoo-finance-api.js' 

dotenv.config();

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
        message.author.send(`Hey`);
		//const channel = await client.channels.fetch('1160992319424700578');
		//channel.send({content: "Test"});
    }	
});

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		interaction.reply('pong');
	} else if (commandName === 'beep') {
		interaction.reply('Boop.');
	} else if (commandName === 'server') {
		interaction.reply('Guild name: ' + interaction.guild.name + '\nTotal members: ' + interaction.guild.memberCount);
	} else if (commandName === 'user-info') {
		interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
	} else if (commandName === 'stock'){
		interaction.reply(getCurrentPrice('TSLA'));
	}
});