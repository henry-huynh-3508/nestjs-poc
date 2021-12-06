import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonInput } from './input/lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  createLesson(createLessonInput: LessonInput): Promise<Lesson> {
    const { title, description, duration } = createLessonInput;
    const lesson = new Lesson();
    lesson.title = title;
    lesson.description = description;
    lesson.duration = duration;
    return this.lessonRepository.save(lesson);
  }
  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne(id);
  }
}
