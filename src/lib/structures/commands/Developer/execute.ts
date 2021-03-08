/* eslint-disable class-methods-use-this */

import { exec } from 'child_process';
import { Message } from 'discord.js';
import BaseCommand from '../../Command';
import Client from '../../../../Client';

module.exports = class extends BaseCommand {
  constructor(client: Client, name: string) {
    super(client, name, {
      cooldown: 10,
      category: 'Developer',
      aliases: ['exec'],
      args: true,
      usage: '<query>',
      ownerOnly: true,
    });
  }

  /* 📡 This runs when the command is run. */
  public async run(message: Message, args: string[]): Promise<void> {
    /* 💫 sample code here. */
    exec(args.join(' '), (error, stdout) => {
      const response = stdout || error;
      message.channel.send(response, { split: true, code: true });
    });
  }
};
