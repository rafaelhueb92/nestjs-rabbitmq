import { Module } from '@nestjs/common';
import { MessageProducerModule } from './message-producer/message-producer.module';
import { MessageConsumerModule } from './message-consumer/message-consumer.module';

@Module({
  imports: [MessageProducerModule, MessageConsumerModule],
})
export class AppModule {}
