import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUser) 
        /*{
            ...createUser,
            password: undefined, //não ira exibir a senha passada pelo usuario no postman
        };*/
    }

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }

};

export default UserController