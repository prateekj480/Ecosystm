import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/filterReducer';
import data from '../data';

const AppContext = React.createContext();

const initialState = {
  filteredJobs: [],
  jobs: [],
  singleJob: null,
  filters: {
    text: '',
    location: '',
    experience: '',
    keyword: ''
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSingleJob = id => {
    dispatch({
      type: 'SET_SINGLE_JOB',
      payload: id
    })
  }

  const updateFilters = e => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { name, value }
    })
  }

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTERS'
    })
  }

  useEffect(() => {
    dispatch({
      type: 'FETCH_JOBS',
      payload: data
    })
  }, [state.jobs])

  useEffect(() => {
    dispatch({
      type: 'FILTER_JOBS',
    })
  }, [state.jobs, state.filters])

  const { jobs, singleJob, filteredJobs, filters } = state;

  return <AppContext.Provider value={{ filteredJobs, jobs, singleJob, filters, setSingleJob, updateFilters, clearFilters }}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export default useGlobalContext;