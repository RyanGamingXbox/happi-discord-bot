/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { Client } from 'hypixel-api-reborn';
import { MessageEmbed } from 'discord.js';
import moment from 'moment';

const APIErrorMessage = new MessageEmbed().setDescription(
  [
    'An API error has occured while retrieving from the Hypixel API. If this persists, you should report this error.\n',
    'However, it is more likely that you did not provide a player that has logged on the server. You can verify this by going on plancke.io to check the API.',
    'If you did not ask for a player, this is a problem on our side. You can check the git repository to see the error.',
  ].join('\n')
);

export class HypixelAPI extends Client {
  constructor(key: string) {
    super(key, {
      cache: true,
      cacheTime: 5,
    });
  }

  /**
   * Creates a personal embed for the player.
   * @param query - The query (player) that was asked.
   */
  public async createEmbedPlayer(query: string): Promise<MessageEmbed> {
    try {
      const playerData = {
        player: await super.getPlayer(query),
        playerStatus: await super.getStatus(query),
      };

      const playerName =
        playerData.player.rank === 'Default'
          ? playerData.player.nickname
          : `[${playerData.player.rank}] ${playerData.player.nickname}`;

      const playerStatus = playerData.player.isOnline
        ? playerData.playerStatus.mode
        : 'OFFLINE';

      return new MessageEmbed()
        .setAuthor(
          `Player • ${playerName}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          {
            name: 'Status',
            value: `\`${playerStatus}\``,
            inline: true,
          },
          {
            name: 'Level',
            value: `\`${playerData.player.level}\``,
            inline: true,
          },
          {
            name: 'Karma',
            value: `\`${playerData.player.karma}\``,
            inline: true,
          },
          {
            name: 'Version',
            value: `\`${playerData.player.mcVersion}\``,
            inline: true,
          },
          {
            name: 'Gifts Given',
            value: `\`${playerData.player.giftsSent}\``,
            inline: true,
          },
          {
            name: 'Gifts Received',
            value: `\`${playerData.player.giftsReceived}\``,
            inline: true,
          },
          {
            name: 'First Login',
            value: `\`${moment(playerData.player.firstLogin).format(
              'LL LTS'
            )}\``,
            inline: true,
          },
          {
            name: 'Last Login',
            value: `\`${moment(playerData.player.lastLogin).format(
              'LL LTS'
            )}\``,
            inline: true,
          },
          {
            name: 'Name History',
            value: playerData.player.history.join(', '),
            inline: false,
          }
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Creates a personal embed for the queried guild.
   * @param query - The query (guild) that was asked.
   */
  public async createEmbedGuild(query: any): Promise<MessageEmbed> {
    try {
      const guildData = await super.getGuild(query, query);

      return new MessageEmbed()
        .setAuthor(
          `Guild • ${guildData.name}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          {
            name: 'Description',
            value: guildData.description,
            inline: false,
          },
          {
            name: 'Level',
            value: `${guildData.level}`,
            inline: true,
          },
          {
            name: 'Created At',
            value: `${moment(guildData.createdAt).format('LL LTS')}`,
            inline: true,
          }
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Creates a personal embed for Watchdog Statistics.
   */
  public async createEmbedWatchdog(): Promise<MessageEmbed> {
    try {
      const stats = await this.getWatchdogStats();

      return new MessageEmbed().setTimestamp().addFields(
        {
          name: 'Watchdog\nTotal Bans⠀⠀⠀',
          value: stats.byWatchdogTotal,
          inline: true,
        },
        {
          name: '⠀\nLast Min⠀⠀⠀',
          value: stats.byWatchdogLastMinute,
          inline: true,
        },
        {
          name: '⠀\nDaily Bans⠀⠀⠀',
          value: stats.byWatchdogRollingDay,
          inline: true,
        },
        {
          name: 'Staff\nTotal Bans⠀⠀⠀',
          value: stats.byStaffTotal,
          inline: true,
        },
        {
          name: '⠀\nDaily Bans⠀⠀⠀',
          value: stats.byStaffRollingDay,
          inline: true,
        },
        { name: '⠀', value: '⠀', inline: true }
      );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Generates an embed for Bedwars Stats.
   * @param query - The query (player) that was asked.
   */
  public async createEmbedPlayerBedwars(query: string): Promise<MessageEmbed> {
    try {
      const player = await super.getPlayer(query);
      const { bedwars } = player.stats;

      // 📡 Subsitutes not available statistics.
      const avgDeaths =
        Math.round((bedwars.deaths / bedwars.playedGames) * 100) / 100;
      const AKDRatio = Math.round((bedwars.avg.kills / avgDeaths) * 100) / 100;
      const lastOnline = player.isOnline
        ? '`ONLINE`'
        : await moment(player.lastLogin).format('LL LTS');

      return new MessageEmbed()
        .setAuthor(
          `BedWars Stats • [${bedwars.level}✫] ${player.nickname}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          // ✨ Kill and deaths - KDR
          { name: 'Total\nKills', value: bedwars.kills, inline: true },
          { name: '⠀\nDeaths', value: bedwars.deaths, inline: true },
          { name: '⠀\nKDR', value: bedwars.KDRatio, inline: true },

          // ✨ Average kill and average deaths - AKDR
          {
            name: 'Average\nKills⠀⠀⠀⠀⠀⠀⠀⠀',
            value: bedwars.avg.kills,
            inline: true,
          },
          {
            name: '⠀\nDeaths⠀⠀⠀⠀⠀',
            value: avgDeaths,
            inline: true,
          },
          {
            name: '⠀\nAKDR⠀⠀⠀',
            value: AKDRatio,
            inline: true,
          },

          // ✨ Final kills and final deaths - FKDR
          { name: 'Final\nKills', value: bedwars.finalKills, inline: true },
          { name: '⠀\nDeaths', value: bedwars.finalDeaths, inline: true },
          { name: '⠀\nFKDR', value: bedwars.finalKDRatio, inline: true },

          // ✨ Beds broken and beds lost - BBBLR
          { name: 'Beds\nBroken', value: bedwars.beds.broken, inline: true },
          { name: '⠀\nLost', value: bedwars.beds.lost, inline: true },
          { name: '⠀\nBBBLR', value: bedwars.beds.BLRatio, inline: true },

          // ✨ Wins and Losses - WLR
          { name: 'Wins', value: bedwars.wins, inline: true },
          { name: 'Losses', value: bedwars.losses, inline: true },
          { name: 'WLR', value: bedwars.WLRatio, inline: true },

          {
            name: 'Collected\nIron',
            value: bedwars.collectedItemsTotal.iron,
            inline: true,
          },
          {
            name: '⠀\nGold',
            value: bedwars.collectedItemsTotal.gold,
            inline: true,
          },
          {
            name: '⠀\nDiamond',
            value: bedwars.collectedItemsTotal.diamond,
            inline: true,
          },
          {
            name: 'Emerald',
            value: bedwars.collectedItemsTotal.emerald,
            inline: true,
          },

          // ✨ Other stats.
          { name: 'Time since last online.', value: lastOnline, inline: false },
          { name: 'Current winstreak', value: bedwars.winstreak, inline: true }
        )
        .setThumbnail(
          'https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png'
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Generates an embed for Skywars Stats.
   * @param query - The query (player) that was asked.
   */
  public async createEmbedPlayerSkywars(query: string): Promise<MessageEmbed> {
    try {
      const player = await super.getPlayer(query);
      const { skywars } = player.stats;

      return new MessageEmbed()
        .setAuthor(
          `Skywars Stats • [${skywars.levelFormatted}] ${player.nickname}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          { name: 'Kills', value: skywars.kills, inline: true },
          { name: 'Deaths', value: skywars.deaths, inline: true },
          { name: 'KDR', value: skywars.KDRatio, inline: true },

          { name: 'Wins', value: skywars.wins, inline: true },
          { name: 'Losses', value: skywars.losses, inline: true },
          { name: 'WLR', value: skywars.WLRatio, inline: true },

          {
            name: 'Solo Kills',
            value: skywars.solo.overall.kills,
            inline: true,
          },
          {
            name: 'Solo Deaths',
            value: skywars.solo.overall.deaths,
            inline: true,
          },
          {
            name: 'Solo KDR',
            value: skywars.solo.overall.KDRatio,
            inline: true,
          },

          {
            name: 'Team Kills',
            value: skywars.team.overall.kills,
            inline: true,
          },
          {
            name: 'Team Deaths',
            value: skywars.team.overall.deaths,
            inline: true,
          },
          {
            name: 'Team KDR',
            value: skywars.team.overall.KDRatio,
            inline: true,
          },

          {
            name: 'Mega Kills',
            value: skywars.team.overall.kills,
            inline: true,
          },
          {
            name: 'Mega Deaths',
            value: skywars.team.overall.deaths,
            inline: true,
          },
          {
            name: 'Mega KDR',
            value: skywars.mega.overall.KDRatio,
            inline: true,
          },

          { name: 'Coins', value: skywars.coins, inline: false },
          { name: 'Current Winstreak', value: skywars.winStreak, inline: false }
        )
        .setThumbnail(
          'https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png'
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Generates an embed for Blitz Survival Games Stats.
   * @param query - The query (player) that was asked.
   */
  public async createEmbedPlayerBlitz(query: string): Promise<MessageEmbed> {
    try {
      const player = await super.getPlayer(query);
      const { blitzsg } = player.stats;

      return new MessageEmbed()
        .setAuthor(
          `Blitz SG Stats • ${player.nickname}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          { name: 'Kills', value: blitzsg.kills, inline: true },
          { name: 'Deaths', value: blitzsg.deaths, inline: true },
          { name: 'KDR', value: blitzsg.KDRatio, inline: true },
          { name: 'Solo Wins', value: blitzsg.winsSolo, inline: true },
          { name: 'Team Wins', value: blitzsg.winsTeam, inline: true },
          { name: 'Coins', value: blitzsg.coins, inline: false }
        )
        .setThumbnail(
          'https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png'
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }

  /**
   * Generates an embed for UHC Stats.
   * @param query - The query (player) that was asked.
   */
  public async createEmbedPlayerUHC(query: string): Promise<MessageEmbed> {
    try {
      const player = await super.getPlayer(query);
      const { uhc } = player.stats;

      // ✨ Creates missing stats.
      const KDRatio = Math.floor((uhc.kills / uhc.deaths) * 100) / 100;

      return new MessageEmbed()
        .setAuthor(
          `Blitz SG Stats • ${player.nickname}`,
          `https://fsa.zobj.net/crop.php?r=by0jGANgnc4W22sOr9z4e9V-f5s5J9Ud5UMMEyggbnr0Mr3JYYoK16DCVlQulNDLSO6xrestaTY37IUXFdx5A-h1LOgW6zaWU03pvnFnVw-6C37MyBorvI6Fc-qdaFTVsjNzrGm-ZcZDSmu4`,
          `https://hypixel.net`
        )
        .addFields(
          { name: 'Kills', value: uhc.kills, inline: true },
          { name: 'Deaths', value: uhc.deaths, inline: true },
          { name: 'KDR', value: KDRatio, inline: true },
          { name: 'Heads Eaten', value: uhc.headsEaten, inline: true },
          { name: 'Score', value: uhc.score, inline: true },
          { name: 'Wins', value: uhc.wins, inline: false },
          { name: 'Coins', value: uhc.coins, inline: false }
        )
        .setThumbnail(
          'https://hypixel.net/styles/hypixel-v2/images/game-icons/UHC-64.png'
        );
    } catch (stacktrace) {
      return APIErrorMessage;
    }
  }
}
