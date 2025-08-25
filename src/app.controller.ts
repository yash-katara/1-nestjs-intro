import { Controller, Get ,Param,Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  @Get('yash')
  helloyash(): string {
    return this.appService.helloyash();
  }
}
