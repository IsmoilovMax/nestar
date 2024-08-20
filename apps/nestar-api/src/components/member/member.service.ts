import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {

    constructor(@InjectModel("Member") private readonly memberModel: Model<Member>) {}

    public async signup(input: MemberInput): Promise<Member> {
        //TODO: Hash password
        try {
            const result = await this.memberModel.create(input);
            //Todo: Authentication via Token
            return result;
            
        } catch(err) {
            console.log("Error, Service.model:", err);
            throw new BadRequestException(err)  
        }
        
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


