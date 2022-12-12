import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class RealtimeCoords {
  @WebSocketServer()
  public server: Socket;

  @SubscribeMessage('coords')
  handleCoords(@MessageBody() coords: any): void {
    this.server.emit('coords', coords);
  }
}
