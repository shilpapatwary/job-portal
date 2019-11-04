import { JobState, JobTypes, Job } from "./types";
import { AnyAction } from "redux";

const initialState = {
    jobsList: undefined,
    currentJob: undefined
};

const JobsApplicationReducer = (currentState: JobState = initialState, action: AnyAction) => {
  switch (action.type) {
      case JobTypes.GET_JOBS_ASYNC:
          return getJobsReducer(currentState, action);
      case JobTypes.GET_JOB_ASYNC:
          return getJobReducer(currentState, action);
        
    default:
      return currentState;
  }
};

function getJobsReducer(currentState: JobState, action: AnyAction) {
  const data = action.payload || action.data;
  return Object.assign({}, currentState, { jobsList: data });
}

function getJobReducer(currentState: JobState, action: AnyAction) {
    const id = action.payload.id || action.id;
    const jobsList = action.payload.data;
    const currentJob = jobsList.filter((job: Job) => job.id == id)[0];
    return Object.assign({}, currentState, { jobsList: jobsList, currentJob: currentJob });
  }

export default JobsApplicationReducer;