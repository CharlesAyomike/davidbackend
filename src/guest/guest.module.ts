import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, guestSchema } from 'src/schema/guest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Guest.name,
        schema: guestSchema,
      },
    ]),
  ],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
