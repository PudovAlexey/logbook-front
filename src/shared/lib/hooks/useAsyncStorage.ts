import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    useCallback,
    useEffect,
    useState,
  } from 'react';

  const useAsyncStorage = (key: string, initialValue = '') => {
    const [value, setValue] = useState('');

    const initStorage = useCallback(async () => {
        const savedValue = await AsyncStorage.getItem(key);

        return savedValue !== 'undefined' && savedValue
          ? JSON.parse(savedValue)
          : initialValue;
      }, [initialValue, key]);

      useEffect(() => {
       (async () => {
        const value = await initStorage();
        setValue(value);
       })();
      }, [initStorage]);

    const setStorage = useCallback((value: any) => {
        AsyncStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }, [key]);

    const getCurrentValue = useCallback(async () => {
      const json = await AsyncStorage.getItem(key);

      return json && json !== 'undefined' && JSON.parse(json);
    }, [key]);

    return {
        storage: value,
        setStorage,
        getCurrentValue,
    };
  };

  export { useAsyncStorage };
