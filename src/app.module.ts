import {Module} from '@nestjs/common';
import { UserModule } from "./user/user.module";
import { UserService } from './user/user.service';

// Este app.module indica quais são os outros modulos que ele tem acesso.
@Module({
    imports: [UserModule],
    controllers: [],
    providers: [UserService],
})
export class AppModule {}