import { Controller,Get } from '@nestjs/common';

@Controller('user')
class UserController {
    @Get()
    async getAllUsers(){
        return JSON.stringify({test: 'abcd'})
    };
};

export default UserController