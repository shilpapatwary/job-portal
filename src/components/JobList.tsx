import React from "react";
import { Job } from "../redux/types";
import JobItem from "./JobItem";
import styled from "styled-components";

interface jobListProps {
  jobs: Array<Job>;
}
const JobList: React.FC<jobListProps> = props => {
  return (
    <div>
      <JobsList>
        {props.jobs.map(job => (
          <JobItem job={job} key={job.id}></JobItem>
        ))}
      </JobsList>
    </div>
  );
};
const JobsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 3% 10%;
  justify-content: space-between;
`;
export default JobList;
