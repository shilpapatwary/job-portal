import React from "react";
import { Job } from "../redux/types";
import styled from 'styled-components';

import CompanyDetails from './CompanyDetails';
import JobRoles from './JobRoles';

interface JobDetailsProps {
  job: Job;
}
const JobDetails: React.FC<JobDetailsProps> = props => {
  const { job } = props;
  return (
      <FlexItem>
          <JobDetailsSection>
              <JobTitle>{job.title}</JobTitle>
              <JobSubInfo>
                  <span>{job.location}</span>
                  <span>{job.employment_type}</span>
              </JobSubInfo>
              <JobDesc>{job.description}</JobDesc>
              <CompanyDetails />
              <JobRoles />
          </JobDetailsSection>
          <ApplySection>
              <h4>Interested in this position?</h4><p>Apply for this role now!</p>
              <Button>Apply</Button>
          </ApplySection>
      </FlexItem>
  );
};

const JobDetailsSection = styled.section`
margin: 5% 10%;
padding: 3%;
width:50%;
background-color: antiquewhite;
color: #000000b8;
@media (max-width: 48rem) {
   width: 100%;
   margin: 0;
   box-sizing: border-box;
}
`;
const JobTitle = styled.h1`
font-size: 2.3rem;
letter-spacing:2px;
@media (max-width: 48rem) {
    font-size: 2rem;
}
`;
const JobSubInfo = styled.div`
width: 26%;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-style: italic;
    @media (max-width: 48rem) {
        width: 100%;
        margin-top:3%;
    }
`;
const JobDesc = styled.p`
`;
const ApplySection = styled.section`
 align-self: center;
`;
const FlexItem = styled.section`
 display: flex;
 @media (max-width: 48rem) {
   flex-direction: column;
   box-sizing: border-box;
   margin: 4% 4%;
}
`;
const Button = styled.button`
font-weight: bold;
width: 100%;
height: 2rem;
background-color: cadetblue;
font-size: 13px;
color: #ffffff;
text-transform: uppercase;
`;

export default JobDetails;
