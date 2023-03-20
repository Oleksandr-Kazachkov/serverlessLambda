import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ArrayLambda')
  async lamdaArray(@Body('context') context: Array<number>) {
    // try {
    await axios({
      method: 'post',
      url: 'https://9li7klym0a.execute-api.us-east-1.amazonaws.com/default/testFunction',
      data: {
        context,
      },
    });
    // } catch (err) {
    //   console.log(err, { depth: null });
    // }
  }

  @Post('/lambdaRes')
  lambdares(@Body('result') result) {
    console.log(result);
    console.log('work');
    return result;
  }
}
