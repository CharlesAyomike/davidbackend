import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatGuestCode } from './dto/createGuest.dto';
import { GuestService } from './guest.service';
import { CreateGuestDetails } from './dto/createGuestDetails.dto';

@Controller('guest')
export class GuestController {
  constructor(private guestService: GuestService) {}

  @Get()
  findAll() {
    return this.guestService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string) {
    const guest = await this.guestService.findOne(code);
    if (!guest) return new HttpException('code not found', 404);
    if (guest.name) {
      return { guest, link: 'home' };
    } else {
      return { guest, link: 'yourdetails' };
    }
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createGuestCode(@Body() body: CreatGuestCode) {
    return this.guestService.create(body);
  }

  @Patch(':code')
  updateGuestDetails(
    @Param('code') code: string,
    @Body() body: CreateGuestDetails,
  ) {
    return this.guestService.update(code, body);
  }
}
