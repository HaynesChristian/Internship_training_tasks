import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) 
{
    @IsNotEmpty()
    id: string;
    
    @IsNotEmpty()
    full_name: string;    

    /*username
    password
    city_code
    access_roles
    is_active
    is_deleted
    created_by
    modified_by
    created
    modified
    email*/    
}
