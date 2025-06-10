import {IProject, ITask} from '..';
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  SET_PROJECTS,
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
  | SetProjects;

export interface AddProject {
  type: typeof ADD_PROJECT;
  payload: IProject;
}

export interface DeleteProject {
  type: typeof DELETE_PROJECT;
  payload: string; // projectId
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
