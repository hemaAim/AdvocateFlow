import {Field, InputType} from "type-graphql" 
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

 @InputType() 
 export class CreateCustomerInput {  

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;


  @Field()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;

   
 } 
 

 //coloquei o constructor, mas se for preciso remover ele, você deve altar a propriedade: `${strictPropertyInitialization":  }` para False