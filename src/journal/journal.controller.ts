import { JournalService } from './journal.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createJournalDto } from './dto';

@Controller('journals')
export class JournalController {
  constructor(private journalService: JournalService) {}

  @Get()
  findAll() {
    return this.journalService.getJournals();
  }

  @Post()
  createJournal(@Body() dto: createJournalDto) {
    return this.journalService.createJournal(dto);
  }
}
