import {IRootState} from '../../interfaces/redux/store';

export const selectProjects = (state: IRootState) =>
  state.projectsReducer.projects;

export const selectTasks = (projectId: string) => (state: IRootState) => {
  const project = state.projectsReducer.projects.find(p => p.id === projectId);
  return project ? project.tasks : [];
};
