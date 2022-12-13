import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create Coffee Input Object Type.' })
export class CreateCoffeeInput {
  @Field({ description: 'A new Coffee Name' })
  name: string;
  brand: string;
  flavors: string[];
}
