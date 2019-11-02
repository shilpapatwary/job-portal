import { JobTypes, Job } from './types';
import { action } from 'typesafe-actions';

export const getJobs = () =>  action(JobTypes.GET_JOBS)
export const getJobsAsync = (data: Array<Job>) => action(JobTypes.GET_JOBS_ASYNC, data)
export const getJob = (id: string) =>  action(JobTypes.GET_JOB, {id})
export const getJobAsync = (data: Array<Job>, id: string) => action(JobTypes.GET_JOB_ASYNC, {data, id})