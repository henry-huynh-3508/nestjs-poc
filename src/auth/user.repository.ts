import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential-dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredDto: AuthCredentialDto): Promise<void> {
    const { email, password } = authCredDto;
    try {
      const user = new User();
      user.email = email;
      user.password = password;
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new Error('Email already exists');
      } else {
        throw new Error('Something went wrong');
      }
    }
  }
}
