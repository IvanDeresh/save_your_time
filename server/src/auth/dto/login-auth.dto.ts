import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginAuthDto {
  @IsString()
  id?: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  password: string;
}
