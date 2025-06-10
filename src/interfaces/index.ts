export interface IProject {
  name: string;
  id: string;
  completed: boolean;
  tasks: ITask[];
}

export interface ITask {
  name: string;
  id: string;
  completed: boolean;
}
