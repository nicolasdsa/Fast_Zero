import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JournalModule } from './journal/journal.module';
@Module({
  imports: [
    AuthModule,
    UserModule,
    JournalModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JournalModule,
  ],
})
export class AppModule {}
