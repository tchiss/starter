import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
    public email: string;

  @IsString()
    public password: string;
}
