import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredDto: AuthCredentialDto): Promise<void> {
    return this.authService.signUp(authCredDto);
  }
}
