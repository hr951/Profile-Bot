const { Client, GatewayIntentBits, Collection, ActivityType, Partials, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ],
  partials: [
    Partials.Channel, Partials.Message
  ]
  });

const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  setInterval(() => {
    client.user.setPresence({
      activities: [
        {
          //name: "エラー処理中",
          name: `/profile | ${client.guilds.cache.size}サーバー`,
          type: ActivityType.Competing
        }
      ],
      status: `online`//online : いつもの, dnd : 赤い奴, idle : 月のやつ, invisible : 表示なし
    });
  }, 1000)
})

//ここから
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`${filePath} に必要な "data" か "execute" がありません。`);
  }
}

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()){
    if(interaction.user.id === interaction.customId){
      await interaction.message.delete();
    } else {
      await interaction.reply({content: "このプロフィールの作者ではありません。", ephemeral: true })
    }
  }
  
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`${interaction.commandName} が見つかりません。`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'error', ephemeral: true });
  }
});

client.login(token);
