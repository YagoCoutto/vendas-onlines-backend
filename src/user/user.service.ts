import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        //criptografar a senha
        const saltOrRounds = 10;
        //const password = 'random_password';
        const passwordHash = await bcrypt.hash(createUserDto.password, saltOrRounds);

        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHash
        }

        this.users.push(user)

        console.log('password', passwordHash)
        console.log('id', user)


        return ({
            ...createUserDto,
            id: 1,
        })
    }
}
