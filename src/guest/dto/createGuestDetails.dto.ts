import { PartialType } from '@nestjs/mapped-types';
import { CreatGuestCode } from './createGuest.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateGuestDetails extends PartialType(CreatGuestCode) {
  @IsBoolean()
  @IsNotEmpty()
  hasEntered: boolean;
}
