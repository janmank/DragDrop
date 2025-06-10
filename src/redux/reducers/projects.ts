import {
  ADD_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
  DELETE_TASK,
  REORDER_TASKS,
  SET_PROJECTS,
  TOGGLE_TASK,
} from '../actions/projects';
import {IProjectsState, ProjectsAction} from '../../interfaces/redux/projects';

const initialState: IProjectsState = {
  projects: [],
};

function projectsReducer(
  state = initialState,
  action: ProjectsAction,
): IProjectsState {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(p => p.id !== action.payload),
      };

    case ADD_TASK: {
      const {projectId, task} = action.payload;
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === projectId
            ? {...project, tasks: [...project.tasks, task]}
            : project,
        ),
      };
    }

    case DELETE_TASK: {
      const {projectId, taskId} = action.payload;
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === projectId
            ? {...project, tasks: project.tasks.filter(t => t.id !== taskId)}
            : project,
        ),
      };
    }

    case TOGGLE_TASK: {
      const {projectId, taskId} = action.payload;
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === projectId
            ? {
                ...project,
                tasks: project.tasks.map(task =>
                  task.id === taskId
                    ? {...task, completed: !task.completed}
                    : task,
                ),
              }
            : project,
        ),
      };
    }
    case SET_PROJECTS:
      return {...state, projects: action.payload};
    case REORDER_TASKS:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.projectId
            ? {...project, tasks: action.payload.tasks}
            : project,
        ),
      };
    default:
      return state;
  }
}

export default projectsReducer;
