import { Module } from '@nestjs/common';
import { GuestModule } from './guest/guest.module';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from './config/dbConfig';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig],
    }),
    GuestModule,
    MongooseModule.forRootAsync({
      useFactory: dbConfig,
    }),
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
