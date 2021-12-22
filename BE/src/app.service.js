import { Injectable } from '@nestjs/common';
import { name, version } from '../package.json'

@Injectable()
export class AppService {
  getHello() {
    return {name, version, status: "Success"};
  }
}
