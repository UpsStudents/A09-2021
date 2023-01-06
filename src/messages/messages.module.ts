import { MessageServices } from './messages.service';
import { MessageRepository } from './messages.repository';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessageServices, MessageRepository],
})
export class MessagesModule {}
