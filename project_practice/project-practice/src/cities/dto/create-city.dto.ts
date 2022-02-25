import { IsNotEmpty } from "class-validator";
export class CreateCityDto 
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
