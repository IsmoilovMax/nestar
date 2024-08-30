import { Mutation, Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';

@Resolver()
export class PropertyResolver {
	constructor(private readonly propertyService: PropertyService) {}

	@Mutation(() => String)
	public async createProperty(): Promise<string> {
		return "";
	}
}
