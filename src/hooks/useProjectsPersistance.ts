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
    const loadProjects = async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) {
          try {
            const savedProjects = JSON.parse(data);
            dispatch(setProjects(savedProjects));
          } catch (e) {
            console.warn(
              '❌ Failed to parse projects JSON from AsyncStorage:',
              e,
            );
          }
        }
      } catch (e) {
        console.warn('❌ Failed to load projects from AsyncStorage:', e);
      }
    };

    loadProjects();
  }, [dispatch]);

  // 2. Save projects to AsyncStorage on every change
  useEffect(() => {
    const saveProjects = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      } catch (e) {
        console.warn('❌ Failed to save projects to AsyncStorage:', e);
      }
    };

    saveProjects();
  }, [projects]);
};
