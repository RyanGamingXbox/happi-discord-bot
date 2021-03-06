import { VoiceConnection } from 'discord.js';
import Client from '../../../Client';

export async function fetch(client: Client, id: string) {
  const connectionFilter = (connection: VoiceConnection) =>
    connection.channel.id === id;

  if (!client.voice.connections.some(connectionFilter)) return null;

  return client.voice.connections.filter(connectionFilter).first();
}
