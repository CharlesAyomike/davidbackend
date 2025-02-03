import { PartialType } from '@nestjs/mapped-types';
import { CreatGuestCode } from './createGuest.dto';

export class CreateGuestDetails extends PartialType(CreatGuestCode) {}
