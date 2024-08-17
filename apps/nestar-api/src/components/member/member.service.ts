import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {

    public async signup(): Promise<string> {
        return 'Signup executed'
    }

    public async login(): Promise<string> {
       return 'Login executed'
    }

    public async updateMember(): Promise<string> {
        return 'updateMember executed'
    }

    public async getMember(): Promise<string> {
        return 'getMember executed'
    }

}


