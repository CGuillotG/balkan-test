import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../../data.json');

@Injectable()
export class UsersService {
  getAllUsers() {
    return data
  }
  getFilteredUsers(queries) {
    return "filtered"
  }
}