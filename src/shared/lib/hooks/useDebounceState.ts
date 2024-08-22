import {
    useCallback,
    useEffect, useState,
  } from 'react';
import { useDebounce } from './useDebounce';
  
  export const useDebounceState = <T, >(defaultState: T, timeout = 400) => {
    const [state, setState] = useState<T>(defaultState);
    const [stateDebounce, setStateDebounce] = useState<T>(defaultState);
  
    const debounceFetch = useDebounce(() => setStateDebounce(state), timeout);
  
    useEffect(() => {
      debounceFetch();
    }, [debounceFetch, state]);
  
    const debouncedState = useCallback((value: T) => {
      setState(value);
    }, []);
  
    const setAllState = useCallback((value: T) => {
      setState(value);
      setStateDebounce(value);
    }, []);
  
    return [
      state,
      stateDebounce,
      setAllState,
      debouncedState,
    ] as const;
  };
  