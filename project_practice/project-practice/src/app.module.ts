import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AdminsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
