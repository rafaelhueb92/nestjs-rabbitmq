import { Injectable } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';

@Injectable()
export class MessageConsumerService {
  @MessagePattern('message_sent')
  async handleMessage(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('📩 Received message:', data);
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage); // Acknowledge the message
  }
}
