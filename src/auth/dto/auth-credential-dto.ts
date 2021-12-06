import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
