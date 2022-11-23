import { IsEmail, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  civility: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  @IsOptional()
  public firstName: string;

  @IsString()
  @IsOptional()
  public lastName: string;

  @IsString()
  @IsOptional()
  public birthDate: string;

  @IsString()
  @IsOptional()
  public birthPlace: string;

  @IsArray()
  @IsOptional()
  public roles: string[];
}
