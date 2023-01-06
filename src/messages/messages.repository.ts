import { Injectable, Logger } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";


@Injectable()
export class MessageRepository {
    private readonly logger = new Logger(MessageRepository.name);

    async findOne(id: number) {
        try {
            const contents = await readFile("messages.json", "utf-8");
            const messages = JSON.parse(contents);
            this.logger.verbose(`Found message with id ${id}`);
            return messages[id];    
        } catch (error) {
            this.logger.error(error);
        }
        
    }

    async findAll() {
        try {
            const contents = await readFile("messages.json", "utf-8");
            const messages = JSON.parse(contents);
            this.logger.verbose(`Found all messages`);
            return messages;    
        } catch (error) {
            this.logger.error(error);
        }
        
    }

    async create(content: string) {
        try {
            const contents = await readFile("messages.json", "utf-8");
            const messages = JSON.parse(contents);
            const id = Math.floor(Math.random() * 999);
            messages[id] = { id, content };
            await writeFile("messages.json", JSON.stringify(messages));
            this.logger.verbose(`Created message with id ${id}`);    
        } catch (error) {
            this.logger.error(error);
        }
        
    }
}