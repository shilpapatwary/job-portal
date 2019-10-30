import { JobState, JobTypes } from "./types";
import { AnyAction } from "redux";

const initialState = {
    jobsList: undefined
};

const JobsApplicationReducer = (currentState: JobState = initialState, action: AnyAction) => {
  switch (action.type) {
    case JobTypes.GET_JOBS_ASYNC:
      return getJobsReducer(currentState, action);
    default:
      return currentState;
  }
};

function getJobsReducer(currentState: JobState, action: AnyAction) {
  const data = action.payload || action.data;
  return Object.assign({}, currentState, { jobsList: data });
}

export default JobsApplicationReducer;