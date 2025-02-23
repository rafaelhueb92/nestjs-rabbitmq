import { Controller, Post, Body, Inject } from '@nestjs/common';
import { MessageProducerService } from './message-producer.service';

@Controller('message')
export class MessageProducerController {
  constructor(
    private readonly messageProducerService: MessageProducerService,
  ) {}

  // Endpoint to send a message to RabbitMQ
  @Post()
  async sendMessage(@Body('message') message: string) {
    await this.messageProducerService.sendMessage(message);
    return { message: 'Message sent to RabbitMQ' };
  }
}
