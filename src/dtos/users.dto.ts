import { IsEmail, IsString, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  civility: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public birthDate: string;

  @IsString()
  public birthPlace: string;

  @IsArray()
  public roles: string[];
}
