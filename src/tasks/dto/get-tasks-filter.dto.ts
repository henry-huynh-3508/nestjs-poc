import { TaskStatus } from "../tasksStatusEnum";
export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}