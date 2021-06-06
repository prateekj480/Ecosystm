const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_JOBS': return { ...state, jobs: action.payload, filteredJobs: action.payload };
    case 'SET_SINGLE_JOB': return { ...state, singleJob: state.jobs.find(job => action.payload === job.jobId) };
    case 'UPDATE_FILTERS': return { ...state, filters: { ...state.filters, [action.payload.name]: action.payload.value } }
    case 'FILTER_JOBS': {
      let tempJobs = [...state.jobs];
      const { text, location, experience } = state.filters;
      if (text) {
        tempJobs = tempJobs.filter(job => job.title.toLowerCase().includes(text.toLowerCase().trim())).sort((a, b) => b.createdDate - a.createdDate);
      }
      if (location) {
        tempJobs = tempJobs.filter(job => job.placeholders[2].label.toLowerCase().includes(location.toLowerCase().trim())).sort((a, b) => b.createdDate - a.createdDate);
      }
      if (experience) {
        tempJobs = tempJobs.filter(job => job.placeholders[0].label.toLowerCase().includes(experience.toLowerCase().trim())).sort((a, b) => b.createdDate - a.createdDate);
      }
      return { ...state, filteredJobs: tempJobs };
    };
    case 'CLEAR_FILTERS': return { ...state, filters: { text: '', location: '', experience: '' } };
    default: throw new Error(`No matching ${action.type} action type.`);
  }
}

export default filterReducer;