/* eslint-disable no-use-before-define */
import { MessageEmbed, Message } from 'discord.js';
import { Interface } from '../../../../Client';

import Command from '../../Command';

const QueryError = new MessageEmbed().setDescription(
  [
    `You did not use the command properly. Please try again with proper syntax.`,
  ].join('\n')
);

module.exports = class SkywarsCommand extends Command {
  constructor(client: Interface, name: string) {
    super(client, name, {
      description: 'Gets Hypixel Skywars stats through their API.',
      aliases: ['skywar', 'sw'],
      category: 'Hypixel',
      args: false,
      timing: 15,
    });
  }

  async run(message: Message, args: string[]) {
    if (args[0]) {
      message.channel.send(
        await this.client.wrappers.Hypixel.createEmbedPlayerSkywars(args[0])
      );
      return;
    }

    message.channel.send(QueryError);
  }
};