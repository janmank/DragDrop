// hooks/useProjectsPersistence.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../interfaces/redux/store';
import {setProjects} from '../redux/actions/projects';

const STORAGE_KEY = 'MY_PROJECTS_STORAGE';

export const useProjectsPersistence = () => {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: IRootState) => state.projectsReducer.projects,
  );

  // 1. Load projects on app start
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(data => {
      if (data) {
        try {
          const savedProjects = JSON.parse(data);
          dispatch(setProjects(savedProjects));
        } catch (e) {
          console.warn('Failed to parse projects from AsyncStorage', e);
        }
      }
    });
  }, [dispatch]);

  // 2. Save projects to AsyncStorage on every change
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(projects)).catch(e =>
      console.warn('Failed to save projects to AsyncStorage', e),
    );
  }, [projects]);
};
