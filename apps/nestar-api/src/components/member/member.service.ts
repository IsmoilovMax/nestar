import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {

    constructor(@InjectModel("Member") private readonly memberModel: Model<null>) {}

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


