import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RoomModel } from './room.model';

@Controller('room')
export class RoomController {
  @Get()
  getRoomsList() {
    return [];
  }

  @Get(':id')
  getRoomById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createRoom(@Body() body: Omit<RoomModel, '_id'>) {
    return body;
  }

  @Post(':id')
  updateRoom(@Param('id') id: string, @Body() body: Omit<RoomModel, '_id'>) {
    return body;
  }
}
