import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
//import { type } from 'os';
import { PrismaService } from 'src/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

//export type admin = any;
@Injectable()
export class AdminsService 
{
  constructor (private Prisma: PrismaService){}

  create(createAdminDto: CreateAdminDto) 
  {
    const admin = this.Prisma.admins.create
    ({
      data: {id: createAdminDto.id, full_name:  createAdminDto.full_name},
      /*id,password,city_code,access_roles,is_active,
        is_deleted,created_by,modified_by,created,modified*/
    })
    console.log('This action adds a new admin');
    return admin;
  }

  findAll() 
  {
    console.log(`This action returns all admins`);
    return this.Prisma.admins.findMany();
  }

  // findOne(id: Prisma.adminsWhereUniqueInput) 
  // {
  //   console.log(`This action returns a #${id.id} admin`);
  //   return this.Prisma.admins.findUnique({where: id});
  // }
  findOne(username: string) 
  {
    console.log(`This action returns a username : ${username} admin`);
    return this.Prisma.admins.findFirst({where: {username}});
  }

  update(id: number, updateAdminDto: UpdateAdminDto) 
  {
    const update_admin = this.Prisma.admins.update
    ({
      data: {full_name: updateAdminDto.full_name},
      where: {id: updateAdminDto.id,}
      /*id,password,city_code,access_roles,is_active,
        is_deleted,created_by,modified_by,created,modified*/
    })
    console.log(`This action updates a #${id} admin`);
    return update_admin;
    
  }

  remove(id: Prisma.adminsWhereUniqueInput) 
  {
    console.log(`This action removes a #${id.id} admin`);
    return this.Prisma.admins.delete({where: id});
  }
}
