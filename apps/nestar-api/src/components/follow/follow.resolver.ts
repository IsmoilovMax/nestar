import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Follower, Followers, Followings } from '../../libs/dto/follow/follow';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';
import { FollowInquiry } from '../../libs/dto/follow/follow.input';

@Resolver()
export class FollowResolver {
	constructor(private readonly followService: FollowService) {}

	@UseGuards(AuthGuard)
	@Mutation((returns) => Follower)
	public async subscribe(@Args('input') input: string, @AuthMember('_id') memberId: ObjectId): Promise<Follower> {
		console.log('Muttation: subscribe');
		const followingId = shapeIntoMongoObjectId(input);
		return await this.followService.subscribe(memberId, followingId);
	}

	@UseGuards(AuthGuard)
	@Mutation((returns) => Follower)
	public async unsubscribe(@Args('input') input: string, @AuthMember('_id') memberId: ObjectId): Promise<Follower> {
		console.log('Muttation: unsubscribe');
		const followingId = shapeIntoMongoObjectId(input);
		return await this.followService.unsubscribe(memberId, followingId);
	}

    @UseGuards(WithoutGuard)
	@Query((returns) => Followings)
	public async getMemberFollowings(@Args('input') input: FollowInquiry, @AuthMember('_id') memberId: ObjectId): Promise<Followings> {
		console.log('Muttation: getMemberFollowings');
        const { followerId } = input.search;
		input.search.followerId = shapeIntoMongoObjectId(followerId);
		return await this.followService.getMemberFollowings(memberId, input);
	}

    @UseGuards(WithoutGuard)
	@Query((returns) => Followers)
	public async getMemberFollowers(@Args('input') input: FollowInquiry, @AuthMember('_id') memberId: ObjectId): Promise<Followers> {
		console.log('Muttation: getMemberFollowers');
        const { followingId } = input.search;
		input.search.followingId = shapeIntoMongoObjectId(followingId);
		return await this.followService.getMemberFollowers(memberId, input);
	}


}
