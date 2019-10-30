import { JobTypes } from './types';
import { action } from 'typesafe-actions';

export const getJobs = () =>  action(JobTypes.GET_JOBS)
export const getJobsAsync = (data) => action(JobTypes.GET_JOBS_ASYNC, data)