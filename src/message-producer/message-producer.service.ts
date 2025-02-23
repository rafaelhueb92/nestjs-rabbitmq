import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessageProducerService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  // Method to send a message to RabbitMQ
  async sendMessage(message: string) {
    this.client.emit('message_sent', message);
    console.log(`Message sent: ${message}`);
  }
}
