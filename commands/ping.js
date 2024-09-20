const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Get Ping'),

	async execute(interaction) {

		const thumbnail = interaction.client.user.displayAvatarURL();

		const embed = new EmbedBuilder()
            .setDescription(`片道のPing : **${interaction.client.ws.ping}**ms\n往復のPing : **...**ms`)
			.setColor("#0097ff")
      		.setFooter({
        			text: "Made by hi_ro951",
        			iconURL: thumbnail,
      					})
			.setTimestamp();
			
	await interaction.reply({ embeds: [embed] })

    let msg = await interaction.fetchReply();
		
	    const embed_2 = new EmbedBuilder()
            .setDescription(`片道のPing : **${interaction.client.ws.ping}**ms\n往復のPing : **${msg.createdTimestamp - interaction.createdTimestamp}**ms`)
			.setColor("#0097ff")
      		.setFooter({
        			text: "Made by hi_ro951",
        			iconURL: thumbnail,
      					})
			.setTimestamp();

			await interaction.editReply({ embeds: [embed_2] })

	},
};
