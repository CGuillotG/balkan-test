import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttributesModule } from './attributes/attributes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AttributesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
