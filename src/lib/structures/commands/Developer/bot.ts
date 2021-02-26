/* eslint-disable class-methods-use-this */

import { Message, MessageEmbed } from 'discord.js';
import Utility from '../../../Utility';
import BaseCommand from '../../Command';
import * as Client from '../../../../Client';

module.exports = class extends BaseCommand {
  /* 💔 Passes options to main class. */
  constructor(client: Client.Interface, name: string) {
    super(client, name, {
      timing: 10,
      aliases: ['botstatus', 'status'],
      args: false,
    });
  }

  /* 📡 This runs when the command is run. */
  public async run(message: Message): Promise<void> {
    /* 💫 bot status here. */
    const commandSize = this.client.commands.Commands.size;
    const aliasesSize = this.client.commands.Aliases.size;
    const eventSize = this.client.events.size;

    const { formatBytes } = new Utility(this.client);

    const MemUsage = formatBytes(process.memoryUsage().heapUsed);

    const embed = new MessageEmbed()
      .setTitle('\\💫 Bot Developer Status')
      .addFields(
        /* 💫 Collection amount. */
        {
          name: 'Loaded\nCommands',
          value: commandSize,
          inline: true,
        },
        { name: '⠀\nAliases', value: aliasesSize, inline: true },
        { name: '⠀\nEvents', value: eventSize, inline: true },

        /* 💫`Process usage. */
        { name: 'CPU Usage', value: 'UNKNOWN', inline: true },
        { name: 'Memory Usage', value: MemUsage, inline: true }
      );

    message.channel.send(embed);
  }
};
