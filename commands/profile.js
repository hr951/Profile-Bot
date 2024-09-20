const { SlashCommandBuilder, EmbedBuilder , AttachmentBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const { registerFont, createCanvas, loadImage } = require('canvas');
registerFont('./Nosutaru-dotMPlusH-10-Regular.ttf', { family: 'mojang' });

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('create your profile')
    .addStringOption(option =>
      option.setName('minecraft-id')
        .setDescription('マイクラのIDを書いてください')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('comment')
        .setDescription('ひとことを書いてください')
        .setRequired(true)
    )
    .addAttachmentOption(option =>
      option.setName('image')
        .setDescription('画像をアップロードしてください')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("sns1")
        .setDescription("使用しているSNSを選択してください")
        .setRequired(false) //trueで必須、falseで任意
        .addChoices(
          { name: "Twitter", value: "x" },
          { name: "Youtube", value: "yt" },
          { name: "Discord", value: "discord" },
          { name: "Scratch", value: "sc" },
          { name: "Instagram", value: "ig" },
          { name: "TikTok", value: "tt" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("sns2")
        .setDescription("使用しているSNSを選択してください")
        .setRequired(false) //trueで必須、falseで任意
        .addChoices(
          { name: "Twitter", value: "x" },
          { name: "Youtube", value: "yt" },
          { name: "Discord", value: "discord" },
          { name: "Scratch", value: "sc" },
          { name: "Instagram", value: "ig" },
          { name: "TikTok", value: "tt" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("sns3")
        .setDescription("使用しているSNSを選択してください")
        .setRequired(false) //trueで必須、falseで任意
        .addChoices(
          { name: "Twitter", value: "x" },
          { name: "Youtube", value: "yt" },
          { name: "Discord", value: "discord" },
          { name: "Scratch", value: "sc" },
          { name: "Instagram", value: "ig" },
          { name: "TikTok", value: "tt" }
        )
    ),

  async execute(interaction) {

    const mcid = interaction.options.getString('minecraft-id');
    const comment = interaction.options.getString('comment');
    const image =interaction.options.getAttachment("image");
    const sns1 = interaction.options.getString("sns1");
    const sns2 = interaction.options.getString("sns2");
    const sns3 = interaction.options.getString("sns3");

    const user = interaction.user.globalName;

    const ig = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/instagram_icon.png?raw=true');
    const discord = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/discord_icon.png?raw=true');
    const tt = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/tiktok_icon.png?raw=true');
    const x = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/twitter_icon.png?raw=true');
    const yt = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/youtube_icon.png?raw=true');
    const sc = await loadImage('https://github.com/hr951/profile-bot/blob/main/images/scratch_icon.png?raw=true');

    if (!image.height && !image.width) {
      await interaction.reply("有効な画像ではありません。");
      return;
    }

    await interaction.reply({content: "画像を生成しています...", ephemeral: true })

    const url_bg = 'https://github.com/hr951/profile-bot/blob/main/images/background.png?raw=true';
    const backgroundImage = await loadImage(url_bg);

    const canvas = createCanvas(1920, 1080);
        const context = canvas.getContext('2d');
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        if(sns1){
        if(sns1 === "ig"){
          context.drawImage(ig, 360, 250, 100, 100);
        } else if(sns1 === "discord"){
          context.drawImage(discord, 360, 250, 100, 100);
        } else if(sns1 === "tt"){
          context.drawImage(tt, 360, 250, 100, 100);
        } else if(sns1 === "x"){
          context.drawImage(x, 360, 250, 100, 100);
        } else if(sns1 === "yt"){
          context.drawImage(yt, 360, 250, 100, 100);
        } else if(sns1 === "sc"){
          context.drawImage(sc, 360, 250, 100, 100);
        }
        }

        if(sns2){
          if(sns2 === "ig"){
            context.drawImage(ig, 480, 250, 100, 100);
          } else if(sns2 === "discord"){
            context.drawImage(discord, 480, 250, 100, 100);
          } else if(sns2 === "tt"){
            context.drawImage(tt, 480, 250, 100, 100);
          } else if(sns2 === "x"){
            context.drawImage(x, 480, 250, 100, 100);
          } else if(sns2 === "yt"){
            context.drawImage(yt, 480, 250, 100, 100);
          } else if(sns2 === "sc"){
            context.drawImage(sc, 480, 250, 100, 100);
          }
          }

          if(sns3){
            if(sns3 === "ig"){
              context.drawImage(ig, 600, 250, 100, 100);
            } else if(sns3 === "discord"){
              context.drawImage(discord, 600, 250, 100, 100);
            } else if(sns3 === "tt"){
              context.drawImage(tt, 600, 250, 100, 100);
            } else if(sns3 === "x"){
              context.drawImage(x, 600, 250, 100, 100);
            } else if(sns3 === "yt"){
              context.drawImage(yt, 600, 250, 100, 100);
            } else if(sns3 === "sc"){
              context.drawImage(sc, 600, 250, 100, 100);
            }
            }

    try {

      try {
        const img = await loadImage(`${image.url}?v=`);
        var height = image.height/450;
        var width = image.width/height;
          context.drawImage(img, 1485-width/2, 540, width, 450);
          context.strokeStyle = '#0099ff';
	        context.strokeRect(1485-width/2, 540, width, 450);
        } catch (error) {
          try {
        const img = await loadImage('https://cdn2.scratch.mit.edu/get_image/project/1042518320_480x360.png?v=1719485760')
        context.drawImage(img, 1140, 540, 705, 450);
      } catch (error) {
        console.error(error);
      }
        }

        const str = comment;
        const maxLength = 13;
        let newStr = "";
        
        for (let i = 0; i < str.length; i += maxLength) {
            newStr += str.substr(i, maxLength) + "\n";
        }

    context.font = '150px "mojang"';
		context.textAlign = 'start'
		context.textBaseline = 'middle'
    context.lineWidth = 15
    context.strokeStyle = '#000000';//色は黒
    context.strokeText(`${user}`, 360, 180);
    context.fillStyle = '#ffffff';//色は白
		context.fillText(`${user}`, 360, 180);

    context.font = '112px "mojang"';
    context.strokeStyle = '#000000';//色は黒
    context.strokeText(`Minecraft ID : ${mcid}`, 75, 427.5);
    context.fillStyle = '#ffffff';//色は白
		context.fillText(`Minecraft ID : ${mcid}`, 75, 427.5);
    context.strokeText(`一言`, 75, 570);
    context.fillText(`一言`, 75, 570);

    context.font = '70px "mojang"';
    context.strokeText(`${newStr}`, 130, 670);
    context.fillText(`${newStr}`, 130, 670);

    context.font = '45px "mojang"';
    context.strokeText(`Copyright © 2024 @hi_ro951`, 1305, 1035);
    context.fillText(`Copyright © 2024 @hi_ro951`, 1305, 1035);

    context.strokeStyle = 'blue';
    context.lineWidth = 5
    // パスの開始
    context.beginPath();
    // 折れ線
    context.moveTo(330, 570);
    context.lineTo(1050, 570);
    context.lineTo(1050, 1050);
    context.lineTo(105, 1050);
    context.lineTo(105, 645);
    // 描画
    context.stroke();

    try {
      context.beginPath();
		context.arc(187.5, 187.5, 150, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();
    const url_icon = interaction.user.avatarURL({ extension: 'jpg' }) + "?raw=true";
    const iconImage = await loadImage(url_icon);
    context.drawImage(iconImage, 37, 37, 300, 300);
      } catch (error) {
        try {
      const icon = await loadImage('https://github.com/hr951/Scratch-Stats-Bot/blob/main/images/err-icon.png?raw=true')
      context.drawImage(icon, 30, 30, 200, 200);
    } catch (error) {
      console.error(error);
    }
      }

      const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: mcid + "_stats.png" });
      
      const Button = new ButtonBuilder()
		.setCustomId(`${interaction.user.id}`)
		.setStyle(ButtonStyle.Danger)
		.setLabel("削除する")
		.setEmoji("🗑️");
      
      //await interaction.editReply("画像を生成しました！");
      await interaction.channel.send({ files: [attachment] , components: [new ActionRowBuilder() .setComponents(Button)] });
      
    } catch (error) {
      // エラーが発生したらコンソールに出力
      console.error(error);
      
      const Button = new ButtonBuilder()
		.setCustomId(`${interaction.user.id}`)
		.setStyle(ButtonStyle.Danger)
		.setLabel("削除する")

      // エラーメッセージを返信
      //await interaction.editReply("画像の生成に失敗しました。");
      await interaction.channel.send({content: "画像の生成に失敗しました。", components: [new ActionRowBuilder() .setComponents(Button)] })
    }
  },

}
