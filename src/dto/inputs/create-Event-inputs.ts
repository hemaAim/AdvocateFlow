import {Field, InputType} from "type-graphql" 
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

 @InputType() 
 export class CreateEventGoogleInput {  

  @Field()
  @IsNotEmpty()
  @IsString()
  summary: string;


  @Field()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  startDateTime: string;



  @Field()
  @IsNotEmpty()
  @IsString()
  endDateTime: string;
 } 
 

 //coloquei o constructor, mas se for preciso remover ele, você deve altar a propriedade: `${strictPropertyInitialization":  }` para False