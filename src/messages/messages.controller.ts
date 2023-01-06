import { Controller, Get, Post, Body, Param, NotFoundException, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageServices } from "./messages.service";

@Controller('messages')
export class MessagesController {
  private readonly logger = new Logger(MessagesController.name);

  constructor(public messagesService: MessageServices) {}

  @Get()
  listMessages() {
    this.logger.verbose(`Getting all messages from controller`);
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    this.logger.verbose(`Creating message with content ${body.content} from controller`)
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    this.logger.verbose(`Getting message with id ${id} from controller`);
    const message = await this.messagesService.findOne(+id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }

}
