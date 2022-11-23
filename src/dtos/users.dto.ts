import { IsEmail, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  civility: string;

  @IsEmail()
  @IsOptional()
  public email: string;

  @IsString()
  @IsOptional()
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
