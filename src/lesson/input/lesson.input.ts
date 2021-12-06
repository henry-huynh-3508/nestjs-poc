import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString } from "class-validator";
@InputType()
export class LessonInput {
  
  @MinLength(1)
  @Field()
  title: string;

  @MinLength(1)
  @Field()
  description: string;
  
  @Field()
  duration: number;
}