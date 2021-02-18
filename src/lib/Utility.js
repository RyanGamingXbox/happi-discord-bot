const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const colors = require('colors/safe');

const Event = require('./structures/Event.js');
const Command = require('./structures/Command.js');

module.exports = class Utility {
  constructor(client) {
    this.client = client;
  }

  // eslint-disable-next-line class-methods-use-this
  isClass(input) {
    return (
      typeof input === 'function' &&
      typeof input.prototype === 'object' &&
      input.toString().substring(0, 5) === 'class'
    );
  }

  // eslint-disable-next-line class-methods-use-this
  get directory() {
    return `${path.dirname(require.main.filename)}${path.sep}`;
  }

  async loadEvents() {
    console.log(`💿 Loading events...`);

    return glob(`${this.directory}src/lib/structures/events/**/*.js`).then(
      (events) => {
        for (const eventFile of events) {
          delete require.cache[eventFile];

          const { name } = path.parse(eventFile);

          // eslint-disable-next-line
        const File = require(eventFile);
          if (!this.isClass(File))
            throw new TypeError(
              `Event ${name} does not export as Class. (invalid type)`
            );

          const event = new File(this.client, name);
          if (!(event instanceof Event))
            throw new TypeError(
              `Event ${name} does not belong. (invalid extends)`
            );

          this.client.events.set(event.name, event);
          event.emitter[event.type](name, (...args) => event.run(...args));

          // eslint-disable-next-line
        console.log(`✅ ${colors.cyan(`Event`)} ${colors.yellow(name)} was successfully loaded.`);
        }
      }
    );
  }

  async loadCommands() {
    console.log(`💿 Loading commands...`);

    return glob(`${this.directory}src/lib/structures/commands/**/*.js`).then(
      (commands) => {
        for (const commandFile of commands) {
          delete require.cache[commandFile];

          const { name } = path.parse(commandFile);

          // eslint-disable-next-line
          const File = require(commandFile);
          if (!this.isClass(File))
            throw new TypeError(
              `Command ${name} does not export as class. (invalid type)`
            );

          const command = new File(this.client, name);
          if (!(command instanceof Command))
            throw new TypeError(
              `Command ${name} does not belong in Commands. (invalid extends)`
            );

          this.client.commands.commands.set(command.name, command);

          if (command.aliases.length)
            for (const alias of command.aliases) {
              this.client.command.aliases.set(alias, command.name);
            }
          // eslint-disable-next-line
          console.log(`✅ ${colors.green(`Command`)} ${colors.yellow(name)} was successfully loaded.`);
        }
      }
    );
  }
};
