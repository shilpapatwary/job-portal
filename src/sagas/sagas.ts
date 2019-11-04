import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { JobTypes } from '../redux/types';
import { getJobContent } from './apis';

export function* watchGetJobAsync(jobID: any) {
    const {id} = jobID;
    const data = yield call(getJobContent);
    const payload = {data, id};
    yield put({type: JobTypes.GET_JOB_ASYNC, payload});
}

function* watchGetJob() {
    yield takeEvery(JobTypes.GET_JOB, watchGetJobAsync)
}

export function* watchGetJobsAsync() {
    const data = yield call(getJobContent);
    yield put({type: JobTypes.GET_JOBS_ASYNC, data})
}

function* watchGetJobs() {
    yield takeEvery(JobTypes.GET_JOBS, watchGetJobsAsync)
}

export default function* root() {
    yield fork(watchGetJobs);
    yield fork(watchGetJob);
}
