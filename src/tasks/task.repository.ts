import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

import { EntityRepository, Repository } from 'typeorm';
import { TaskStatus } from './tasksStatusEnum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();

    return task;
  }
  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');
    query.where('task.status = :status', { status });
    if (search) {
      query.andWhere(
        'task.title LIKE :search OR task.description LIKE :search',
        { search: `%${search}%` },
      );
    }
    const tasks = await query.getMany();
    return tasks;
  }
  // public async getTasks(
  //   filterDto: GetTasksFilterDto
  // ): Promise<Task[]> {
  //   const { status, search } = filterDto;
  //   const query = this.createQueryBuilder("task");

  //   if (status) {
  //     query.andWhere("task.status = :status", { status });
  //   }
  //   return query.getMany();
  // }
}
