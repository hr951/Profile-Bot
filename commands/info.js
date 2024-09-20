const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get Ping'),

	async execute(interaction) {

		const thumbnail = interaction.client.user.displayAvatarURL();

		const embed = new EmbedBuilder()
            .setDescription(`${interaction.client.ws.ping}msで稼働しています。\n\nアイコン等画像は使用許可をとっていません。\nこのサーバー以外でこの画像を使用することはないようにお願いします。\n使用された場合<@962670040795201557>は一切の責任を負いません。ご了承ください。`)
			.setColor("#0097ff")
      		.setFooter({
        			text: "Made by hi_ro951",
        			iconURL: thumbnail,
      					})
			.setTimestamp();
			
	await interaction.reply({ embeds: [embed] })

	},
};
