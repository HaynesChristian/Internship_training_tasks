import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { admins, Prisma } from '@prisma/client';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) 
  // {
  //   const myid:Prisma.adminsWhereUniqueInput = {id: id}
  //   return this.adminsService.findOne(myid);
  // }

  @Get(':id')
  findOne(@Param('id') username: string) 
  {
    return this.adminsService.findOne(username);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) 
  {
    const myid:Prisma.adminsWhereUniqueInput = {id: id}
    return this.adminsService.remove(myid);
  }
}
