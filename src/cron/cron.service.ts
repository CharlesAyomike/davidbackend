import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  constructor(private readonly httpService: HttpService) {}
  @Cron('*/14 * * * *')
  handleCron() {
    try {
      this.httpService.get(
        'https://davidbackend-gi5p.onrender.com/guest/MYCODE136',
      );
    } catch (error) {
      console.error('Keep-alive request failed', error);
    }
  }
}
