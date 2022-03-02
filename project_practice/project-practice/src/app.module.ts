import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { PrismaService } from './prisma.service';
import { CitiesModule } from './cities/cities.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminsModule, CitiesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
