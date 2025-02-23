import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller('message-consumer')
export class MessageConsumerController {
  @MessagePattern('message_sent')
  async handleMessage(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('📩 Received message:', data);
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage); // Acknowledge the message
  }
}
