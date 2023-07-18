import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
        return this.userService.createUser(createUser) 
        /*{
            ...createUser,
            password: undefined, //não ira exibir a senha passada pelo usuario no postman
        };*/
    }
};

export default UserController