import chai from "chai";
import store from ".";
import { getJobsAsync, getJobAsync } from "../actions";
import { jobs } from "../../test/testData";
import { Job } from "../types";
chai.should();
xdescribe("Job Application Store", () => {
      describe("store.dispatch(getJobsAsync())", function() {
        it("should get jobs content", () => {
          
        });
      });
    });
// xdescribe("Job Application Store", () => {
//   describe("store.dispatch(getJobsAsync())", function() {
//     it("should get jobs content", () => {
//       const oldJobsContent = store.getState().jobsList || {};
//       oldJobsContent.should.be.empty;
//       store.dispatch(getJobsAsync(jobs));
//       const newJobsContent: Array<Job> =
//         store.getState().jobsList || [];
//         newJobsContent.should.not.be.empty;
//       expect(newJobsContent.length).toBe(1);
//     });
//   });
//   xdescribe("store.dispatch(setCurrentRecipeAction())", function() {
//     it("should set current recipe", () => {
//       const oldCurrentRecipe = store.getState().currentRecipe || {};
//       oldCurrentRecipe.should.be.empty;
//       store.dispatch(setCurrentRecipeAction("123"));
//       const newCurrentRecipeContent = store.getState().currentRecipe || {};
//       newCurrentRecipeContent.should.not.be.empty;
//       newCurrentRecipeContent.should.have.property("fields");
//       newCurrentRecipeContent.should.have.property("sys");
//     });
//   });
// });

