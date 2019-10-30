export enum JobTypes {
    GET_JOBS = '@@types/GET_JOBS',
    GET_JOBS_ASYNC = '@@types/GET_JOBS_ASYNC'
}

export interface Job {
    id: Number,
    title: String,
    description: String,
    employment_type: String
}
export interface JobState {
    jobsList?: Array<Job>
}