import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { PropertyLocation, PropertyStatus, PropertyType } from "../../enums/property.enum";


@ObjectType()
export class Property {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => PropertyType)
    propertyType: PropertyType;

    @Field(() => PropertyStatus)
    propertyStatus: PropertyStatus;
    
    @Field(() => PropertyLocation)
    propertyLocation: PropertyLocation;

    @Field(() => String)
    propertyAddress: string;

    @Field(() => String)
    propertyTitle: string;

    @Field(() => Number)
    propertyPrice: number;

    @Field(() => Number)
    propertySquare: number;

    @Field(() => Int)
    propertyBeds: number;

    @Field(() => Int)
    propertyRooms: number;

    @Field(() => Int)
    propertyViews: number;

    @Field(() => Int)
    propertyLikes: number;

    @Field(() => Int)
    propertyComments: number;

    @Field(() => Int)
    propertyRank: number;

    @Field(() => [String])
    propertyImages: string[];

    @Field(() => String, { nullable: true })
    propertyDesc?: string[];

    @Field(() => Boolean)
    propertyBarter: boolean;

    @Field(() => Boolean)
    propertyRent: boolean;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date, {nullable: true})
    soldAt?: Date;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date, {nullable: true})
    deletedAt?: Date;

    @Field(() => Date, {nullable: true})
    constructedAt?: Date;

    @Field(() => Date)
    updatedAt: Date;
}