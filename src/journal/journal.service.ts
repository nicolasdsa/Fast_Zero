import { Injectable } from '@nestjs/common';
import { createJournalDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  async getJournals() {
    return await this.prisma.journal.findMany({});
  }

  async createJournal(dto: createJournalDto) {
    const { content } = dto; // Destructure the 'content' property from the DTO
    const conteudo = JSON.parse(content);

    const journal = await this.prisma.journal.create({
      data: {
        content: conteudo.content, // Pass the 'content' property to the create method
      },
    });
    return journal;
  }
}
