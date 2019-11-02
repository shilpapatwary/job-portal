import chai from "chai";
import { call } from "redux-saga/effects";
import { watchGetJobsAsync } from "./sagas";
import { getJobContent } from "./apis";

chai.should();

describe("sagas", () => {
  describe("get jobs content saga", () => {
    it("should call getJobContent API", () => {
      const getJobSaga = watchGetJobsAsync();
      const getJobContentSagaValue: any = getJobSaga.next().value || {};
      getJobContentSagaValue.should.deep.equal(call(getJobContent));
    });
  });
});
