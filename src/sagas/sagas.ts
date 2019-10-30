import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { JobTypes } from '../redux/types';
import { getSampleContent } from './apis';


export function* watchGetJobsAsync() {
    const data = yield call(getSampleContent);
    yield put({type: JobTypes.GET_JOBS_ASYNC, data})
}

function* watchGetJobs() {
    yield takeEvery(JobTypes.GET_JOBS, watchGetJobsAsync)
}

export default function* root() {
    yield fork(watchGetJobs);
}
