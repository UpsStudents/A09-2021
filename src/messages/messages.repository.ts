import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessageRepository {

    async findOne(id: number) {
        const contents = await readFile("messages.json", "utf-8");
        //const messages = JSON.parse(contents).find((m: any) => m.id === id);
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string) {
        const contents = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFile("messages.json", JSON.stringify(messages));
    }
}