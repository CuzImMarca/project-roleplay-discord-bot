import Config from './config';
import { Client, GatewayIntentBits } from 'discord.js';
import { onReady } from './events/onReady';

export const Bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

Bot.once('ready', async () => await onReady(Bot));

Bot.login(Config.DISCORD_TOKEN);
