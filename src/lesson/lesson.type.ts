import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LessonType {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  title: string;

  @Field((type) => String, { nullable: true })
  description: string;

  @Field((type) => Int, { nullable: true })
  duration: number;
}
