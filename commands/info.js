const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get Ping'),

	async execute(interaction) {

		const thumbnail = interaction.client.user.displayAvatarURL();

		const embed = new EmbedBuilder()
            .setDescription(`${interaction.client.ws.ping}msで稼働しています。`)
            .addFields(
              {
                name: "profile",
                value: `⭕このコマンドは使用可能です。`,
                inline: true
              },
              {
                name: "ping",
                value: `⭕このコマンドは使用可能です。`,
                inline: true
              },
              {
                name: "info",
                value: `⭕このコマンドは使用可能です。`,
                inline: true
              })
			    .setColor("#0097ff")
      		.setFooter({
        			text: "Made by hi_ro951",
        			iconURL: thumbnail,
      					})
			.setTimestamp();
    
    const terms = new ButtonBuilder()
	.setLabel('利用規約')
	.setURL('https://github.com/hr951/profile-bot/blob/main/terms.md')
	.setStyle(ButtonStyle.Link);
    
    const privacypolicy = new ButtonBuilder()
	.setLabel('プライバシーポリシー')
	.setURL('https://github.com/hr951/profile-bot/blob/main/privacypolicy.md')
	.setStyle(ButtonStyle.Link);
    
    const code = new ButtonBuilder()
	.setLabel('ソースコード')
	.setURL('https://github.com/hr951/profile-bot/tree/main')
	.setStyle(ButtonStyle.Link);
			
	await interaction.reply({ embeds: [embed] ,components: [new ActionRowBuilder().addComponents(terms, privacypolicy, code)] })

	},
};
