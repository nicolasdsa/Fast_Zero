import { IsNotEmpty, IsString } from 'class-validator';

export class createJournalDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
