import { Module } from '@nestjs/common';
import { GuestModule } from './guest/guest.module';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from './config/dbConfig';
import { ConfigModule } from '@nestjs/config';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
