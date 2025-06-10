import {IProject, ITask} from '..';
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  SET_PROJECTS,
  REORDER_TASKS,
  RENAME_PROJECT,
} from '../../redux/actions/projects';

export interface IProjectsState {
  projects: IProject[];
}

export type ProjectsAction =
  | AddProject
  | DeleteProject
  | AddTask
  | DeleteTask
  | ToggleTask
  | SetProjects
  | ReorderTask
  | RenameProject;

export interface AddProject {
  type: typeof ADD_PROJECT;
  payload: IProject;
}

export interface DeleteProject {
  type: typeof DELETE_PROJECT;
  payload: string;
}

export interface AddTask {
  type: typeof ADD_TASK;
  payload: {
    projectId: string;
    task: ITask;
  };
}

export interface DeleteTask {
  type: typeof DELETE_TASK;
  payload: {
    projectId: string;
    taskId: string;
  };
}

export interface ToggleTask {
  type: typeof TOGGLE_TASK;
  payload: {
    projectId: string;
    taskId: string;
  };
}

export interface SetProjects {
  type: typeof SET_PROJECTS;
  payload: IProject[];
}

export interface ReorderTask {
  type: typeof REORDER_TASKS;
  payload: {
    projectId: string;
    tasks: ITask[];
  };
}

export interface RenameProject {
  type: typeof RENAME_PROJECT;
  payload: {
    projectId: string;
    name: string;
  };
}
