import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from '../../libs/dto/member/member';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Model, ObjectId } from 'mongoose';
import { MemberStatus } from '../../libs/enums/member.enum';
import { Message } from '../../libs/enums/common.enum';
import { AuthService } from '../auth/auth.service';
import { MemberUpdate } from '../../libs/dto/member/member.update';

@Injectable()
export class MemberService {

    constructor(@InjectModel("Member") private readonly memberModel: Model<Member>, 
    private authService: AuthService) {}

    public async signup(input: MemberInput): Promise<Member> {
        //TODO: Hash password
        input.memberPassword = await this.authService.hashPassword(input.memberPassword)
        try {
            const result = await this.memberModel.create(input);
            //Todo: Authentication via Token
            result.accessToken = await this.authService.createToken(result)
            return result;
            
        } catch(err) {
            console.log("Error, Service.model:", err.message);
            throw new BadRequestException(Message.USED_MEMBER_NICK_OR_PHONE)  
        }
        
    }

    public async login(input: LoginInput): Promise<Member> {
        const { memberNick, memberPassword } = input;
        const response: Member = await this.memberModel
            .findOne({memberNick: memberNick})
            .select('+memberPassword')
            .exec()

            if(!response || response.memberStatus === MemberStatus.DELETE) {
                throw new InternalServerErrorException(Message.NO_MEMBER_NICK);
            }else if(response.memberStatus === MemberStatus.BLOCK) {
                throw new InternalServerErrorException(Message.BLOCKED_USER)
            }

            //TOdo: Compare password
            console.log("responce:", response )
            const isMatch = await this.authService.comparePasswords(input.memberPassword, response.memberPassword);
            if(!isMatch)  throw new InternalServerErrorException(Message.WRONG_PASSWORD)
            response.accessToken = await this.authService.createToken(response);

        return response;
    }

    public async updateMember(memberId: ObjectId, input: MemberUpdate): Promise<Member> {
        const result: Member = await this.memberModel.findByIdAndUpdate(
            {_id: memberId, memberStatus: MemberStatus.ACTIVE,}, input, {new: true}
        ).exec();
        if(!result) throw new InternalServerErrorException(Message.UPDATE_FAILED)

            result.accessToken = await this.authService.createToken(result)
        return result
    }

    public async getMember(): Promise<string> {
        return 'getMember executed'
    }

    public async getAllMembersByAdmin(): Promise<string> {
        return 'getAllMembersByAdmin executed'
    }

    public async updateMemberByAdmin(): Promise<string> {
        return 'updateMemberByAdmin executed'
    }

}


