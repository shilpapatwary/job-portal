import chai from "chai";
import store from '.';
import { jobs } from "../../test/testData";
import { Job, JobTypes } from "../types";

chai.should();


describe("Job Application Store", () => {
      describe("store.dispatch(getJobsAsync())", function() {
          it("should get jobs content", () => {
              const oldJobsContent = store.getState().jobsList || [];
              expect(oldJobsContent.length).toBe(0);
              store.dispatch({
                  type: JobTypes.GET_JOBS_ASYNC,
                  data: jobs
              });
              const newJobsContent: Array<Job> = store.getState().jobsList || [];

              expect(newJobsContent.length).toBe(1);
          });
      });
    });
  describe("store.dispatch(getJobAsync())", function() {
    it("should set current job", () => {
      const oldCurrentJob: any = store.getState().currentJob || {};
      oldCurrentJob.should.be.empty;
      store.dispatch({
        type: JobTypes.GET_JOB_ASYNC,
        payload: {id: 1, data: jobs}
      });
      const newCurrentJobContent: any = store.getState().currentJob || {};
      newCurrentJobContent.should.not.be.empty;
      newCurrentJobContent.should.have.property("title");
      newCurrentJobContent.should.have.property("location");
    });
  });

