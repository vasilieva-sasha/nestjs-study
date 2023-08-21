import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ScheduleModel } from './schedule.model';

@Controller('schedule')
export class ScheduleController {
  @Get()
  getScheduleList() {
    return [];
  }

  @Post()
  createSchedule(@Body() body: ScheduleModel) {
    return body;
  }

  @Post(':id')
  updateSchedule(@Param('id') id: string, @Body() body: ScheduleModel) {
    return body;
  }
}
