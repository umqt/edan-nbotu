const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **edd** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `e.istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `e.`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ <:dvm_734:777188394379771955> **Eğlence Komutları** <:dvm_734:777188394379771955> ]▬▬▬▬▬▬

> **» e.aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» e.balık-tut :** Denizde balık tutarsınız.
> **» e.beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» e.ara155 :** Polisi aramanıza yarar.
> **» e.efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» e.ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» e.espri :** Bot sizin için espri yapar.
> **» e.hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» e.kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» e.kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» e.kralol :** Kral olmanıza yarar.
> **» e.tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» e.yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» e.yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» e.öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» e.şekerye :** Bot size şeker ikram eder.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :round_pushpin: **Komut hakkında detaylı bilgi için: e.yardım**

**» Slk Eda** 
**Doğru Bilgi Abi**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};