import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonInput } from './input/lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') input: LessonInput,
  ) {
    return this.lessonService.createLesson(input);
  }
}
