import { Injectable, Logger } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessageServices {
    public readonly logger = new Logger(MessageServices.name);
    constructor(public messagesRepo: MessageRepository) {}

    findOne(id: number) {
        this.logger.verbose(`Getting message with id ${id}`);
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        this.logger.verbose(`Getting all messages`);
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        this.logger.verbose(`Creating message with content ${content}`);
        return this.messagesRepo.create(content);
    }
    
}