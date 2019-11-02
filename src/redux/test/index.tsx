import JobsApplicationReducer from "../reducer";
import { createStore } from "redux";

const store = createStore(JobsApplicationReducer, {});
export default store;
