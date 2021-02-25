/* eslint-disable class-methods-use-this */

import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../Command';
import * as Client from '../../../../Client';

module.exports = class PingCommand extends BaseCommand {
  /* 💔 Passes options to main class. */
  constructor(client: Client.Interface, name: string) {
    super(client, name, {
      category: 'Bot',
      timing: 10,
      aliases: [],
      description: 'Gets ping information from wrappers.',
      args: false,
    });
  }

  /* 📡 This runs when the command is run. */
  public async run(message: Message): Promise<void> {
    /* 💫 gets all the ping. */
    const msg = await message.channel.send('\\✨ Pinging...');

    const choices = [
      "I don't want to know my results!",
      'My ping better be good!',
      'I heard the longer it takes, the worst it gets.',
      "I know I'm not meant to feel. But this is scary!",
      'I~~--~~ cutti~~--~~ **OUT!**',
    ];
    const pickedChoice = choices[Math.floor(Math.random() * choices.length)];

    const internalLatency = msg.createdTimestamp - message.createdTimestamp;
    const generatedEmbed = new MessageEmbed()
      .setTitle('\\💫 Ping')
      .setDescription(pickedChoice)
      .addFields(
        {
          name: 'Websocket Ping',
          value: await this.client.ws.ping,
          inline: true,
        },
        {
          name: 'Calculated Ping',
          value: await (Date.now() - message.createdTimestamp),
          inline: true,
        },
        {
          name: 'Internal Latency',
          value: await internalLatency,
          inline: true,
        },
        {
          name: 'Hypixel Ping',
          value: await this.client.wrappers.Hypixel.getPing(),
          inline: true,
        }
      );
    msg.edit('** **', generatedEmbed);
  }
};
