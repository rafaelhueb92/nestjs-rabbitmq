import { Module } from '@nestjs/common';
import { MessageProducerController } from './message-producer.controller';
import { MessageProducerService } from './message-producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [MessageProducerController],
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:password@localhost:5672'],
          queue: 'message-queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [MessageProducerService],
  exports: [MessageProducerService],
})
export class MessageProducerModule {}
