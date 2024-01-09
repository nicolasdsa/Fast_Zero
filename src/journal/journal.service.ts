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
    const journal = await this.prisma.journal.create({
      data: {
        ...dto,
      },
    });
    return journal;
  }
}
