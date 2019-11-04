import { Action, Store as ReduxStore, Dispatch } from "redux";
import { type } from "os";

export enum JobTypes {
  GET_JOBS = "@@types/GET_JOBS",
  GET_JOBS_ASYNC = "@@types/GET_JOBS_ASYNC",
  GET_JOB = "@@types/GET_JOB",
  GET_JOB_ASYNC = "@@types/GET_JOB_ASYNC"
}
export type Store = ReduxStore<JobState, Action> & {
  dispatch: Dispatch;
};
export interface Job {
  id: number;
  title: String;
  location: String;
  description: String;
  employment_type: String;
}
export interface JobState {
  jobsList?: Array<Job>;
  currentJob?: Job;
}
