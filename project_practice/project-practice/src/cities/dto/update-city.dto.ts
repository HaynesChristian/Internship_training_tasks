import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateCityDto } from './create-city.dto';

export class UpdateCityDto extends PartialType(CreateCityDto) 
{
    @IsNotEmpty()
    code: string;
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    state_name: string;
    
    @IsNotEmpty()
    country_name: string;    
    
    @IsNotEmpty()
    is_active: boolean;    
    
    @IsNotEmpty()
    is_deleted: boolean;    
}
