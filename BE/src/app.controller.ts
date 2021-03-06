import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type HealthCheckResponse = {
  name: string;
  version: string;
  status: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealthCheck(): HealthCheckResponse {
    return this.appService.getHealthCheck();
  }
}
