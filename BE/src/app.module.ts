import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, BooksModule],
})
export class AppModule {}
