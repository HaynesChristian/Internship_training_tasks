import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService 
{
  constructor (private Prisma: PrismaService){}

  create(createCityDto: CreateCityDto) 
  {
    const new_city = this.Prisma.cities.create
    ({
      data: {code: createCityDto.code, name:createCityDto.name,
        state_name:createCityDto.state_name, country_name:createCityDto.country_name, 
        is_active: createCityDto.is_active, is_deleted: createCityDto.is_deleted},
    })
    console.log('This action adds a new city');
    return new_city;
  }

  findAll() 
  {
    console.log(`This action returns all cities`);
    return this.Prisma.cities.findMany({where: {is_deleted:false}});
  }

  findOne(id: Prisma.citiesWhereUniqueInput) 
  {
    console.log(`This action returns a #${id.code} city`);
    return this.Prisma.cities.findUnique({where: id});
  }

  update(id: number, updateCityDto: UpdateCityDto) 
  {
    const upd_city = this.Prisma.cities.update
    ({
      data: {name: updateCityDto.name, state_name: updateCityDto.state_name, country_name: updateCityDto.country_name, 
        is_active: updateCityDto.is_active, is_deleted: updateCityDto.is_deleted},
      where: {code: updateCityDto.code}
    })
    console.log(`This action updates a #${id} city`);
    return upd_city;
  }

  remove(id: string) 
  {
    console.log(`This action removes a ${id} city`);
    const rm_city = this.Prisma.cities.update
    ({
      data: {is_deleted: true},
      where: {code: id}
    })
    return rm_city;
  }

  //filter
  filter(args : Prisma.citiesFindManyArgs) 
  {
    const filter_city = this.Prisma.cities.findMany(args);
    //console.log(filter_city);
    console.log(`This action returns cities after filter`);
    return filter_city;
  }
}
