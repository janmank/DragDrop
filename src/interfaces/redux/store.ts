import {IAuthState} from './auth';
import {IProjectsState} from './projects';

export interface IRootState {
  authReducer: IAuthState;
  projectsReducer: IProjectsState;
}
