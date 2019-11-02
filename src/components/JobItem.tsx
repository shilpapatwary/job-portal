import React from "react";
import { Job } from "../redux/types";
import styled from "styled-components";
import Link from "next/link";

interface JobItemProps {
  job: Job;
}
const JobItem: React.FC<JobItemProps> = props => {
    const { job } = props;
  return (
    <JobListItem>
      <JobTitle>{job.title}</JobTitle>
      <JobSubInfo>
        <span>{job.location}</span>
        <span>{job.employment_type}</span>
      </JobSubInfo>
      <JobDesc>{job.description}</JobDesc>
      <Link href="/job/[id]" as={`/job/${job.id}`}>
        <Button>Read More</Button>
      </Link>
    </JobListItem>
  );
};
const JobListItem = styled.li`
  width: 30%;
  margin: 3% 0;
  display: flex;
  flex-direction: column;
  background-color: #faebd7;
  padding: 1%;
  box-sizing: border-box;
  box-shadow: 12px 12px #f5deb3;
  &:hover {
    background-color: #b8860b66;
  }
  @media (max-width: 48rem) {
      width: 100%;
      margin-bottom: 1rem;
  }
`;

const JobTitle = styled.h3`
  letter-spacing: 2px;
  margin: 0 2% 2% 2%;
  color: #000000b8;
`;
const JobSubInfo = styled.div`
  width: 60%;
  display: flex;
  letter-spacing: 1.5px;
  justify-content: space-between;
  font-style: italic;
  text-transform: uppercase;
  font-size: 12px;
  padding-left: 2%;
`;
const JobDesc = styled.div`
  width: 80%;
  padding: 5% 2%;
  height: 5rem;
`;
const Button = styled.button`
  font-weight: bold;
  width: 30%;
  height: 2rem;
  background-color: cadetblue;
  font-size: 13px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 48rem) {
    margin: 0.5rem;
    width:45%;
}
`;

export default JobItem;
