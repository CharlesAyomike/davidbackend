import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreatGuestCode {
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
