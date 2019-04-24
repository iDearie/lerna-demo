import { WebSocket } from '@lizhuo/websocket';
export class Socket {
  Websocket: WebSocket;

  get(id: number) {
    return id;
  }
  constructor() {
    console.log(`Socket`);
    this.Websocket = new WebSocket();
  }
}
