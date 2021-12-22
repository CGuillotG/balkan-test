import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() queries) {
    if (queries && Object.keys(queries).length === 0) {
      return this.usersService.getAllUsers()
    } else {
      return this.usersService.getFilteredUsers(queries)
    }
  }
}
