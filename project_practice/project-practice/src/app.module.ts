import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { PrismaService } from './prisma.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [AdminsModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
