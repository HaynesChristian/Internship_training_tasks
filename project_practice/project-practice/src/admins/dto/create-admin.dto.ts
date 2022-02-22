import { IsNotEmpty } from "class-validator";

export class CreateAdminDto 
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
