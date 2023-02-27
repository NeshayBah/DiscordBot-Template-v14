const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eval')
		.addStringOption(option =>
			option.setName('code')
				.setDescription('The code you want to evaluate')
				.setRequired(true))
		.setDescription('Only for owners of this bot'),
	execute(interaction, client) {
        if (!client.config.ownersId.includes(interaction.member.id)) return interaction.reply({ content: "Hey Bucko, this is only for the owner of the bot!", ephemeral: true })

        x = interaction.options.getString('code')
        y = eval(x)

        embed = new EmbedBuilder()
            .setTitle('👨‍💻 Evalute Code')
            .addFields(
                { name: "📥 Input", value: `\`\`\`${x}\`\`\`` },
                { name: "📤 Ouput", value: `\`\`\`${y}\`\`\``}
            )
            .setFooter({ text: `Evaluated by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
            .setTimestamp()

        interaction.reply({ embeds: [embed] })
    }
};