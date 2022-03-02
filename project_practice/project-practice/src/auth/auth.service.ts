import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';

@Injectable()
export class AuthService 
{
    constructor(private adminService: AdminsService,private jwtService: JwtService) {}

    //constructor(private adminService: AdminsService){}

    async validateUser(username: string, pswd: string): Promise<any> 
    {
        const user = await this.adminService.findOne(username);
        if (user && user.password === pswd) 
        {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user: any) 
    {
        const payload = { username: user.username, sub: user.id };
        return {access_token: this.jwtService.sign(payload),};
    }
    
}
