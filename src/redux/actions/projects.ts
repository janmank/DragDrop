import {IProject} from '../../interfaces';
import {ITask} from '../../interfaces';

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_PROJECTS = 'SET_PROJECTS';

export const addProject = (project: IProject) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const deleteProject = (id: string) => ({
  type: DELETE_PROJECT,
  payload: id,
});

export const addTask = (projectId: string, task: ITask) => ({
  type: ADD_TASK,
  payload: {projectId, task},
});

export const deleteTask = (projectId: string, taskId: string) => ({
  type: DELETE_TASK,
  payload: {projectId, taskId},
});

export const toggleTask = (projectId: string, taskId: string) => ({
  type: TOGGLE_TASK,
  payload: {projectId, taskId},
});

export const setProjects = (projects: IProject[]) => ({
  type: SET_PROJECTS,
  payload: projects,
});
