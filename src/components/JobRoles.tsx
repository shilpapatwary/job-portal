import React from "react";
import styled from "styled-components";

const JobRoles: React.FC = () => {
  return (
    <JobRolesSection>
        <FlexItem>
        <h3>Roles & Responsibilities</h3><Divider></Divider>
      </FlexItem>
      <JobRolesList>
        <JobRole>
          Researches and implements technological strategic solutions.
        </JobRole>
        <JobRole>Develops personal growth opportunities.</JobRole>
        <JobRole>
          Contributes to team efforts by accomplishing related results as
          needed.
        </JobRole>
        <JobRole>
          Verifies application results by conducting system audits of
          technologies implemented.
        </JobRole>
        <JobRole>
          Resolves engineering problems by collecting and analyzing information;
          researching, analyzing, adapting, and modifying engineering
          techniques; recommending solutions; preparing drawings, schematics,
          and diagrams; evaluating components, materials, and suppliers;
          resolving design integration issues; developing specifications and
          safety standards; performing installations.
        </JobRole>
        <JobRole>
          Prepares guidelines by describing operational and testing methods and
          procedures.
        </JobRole>
      </JobRolesList>
    </JobRolesSection>
  );
};

const JobRolesSection = styled.section``;
const JobRolesList = styled.ol`
    
`;
const JobRole = styled.li`
 margin: 2% 0.5rem;
 list-style: decimal;
`;
const Divider = styled.div`
  width: 30%;
  border-bottom: 1px solid gray;
  height: 0.7rem;
  margin-left: 0.5rem;
`;
const FlexItem = styled.div`
  display: flex;
`;

export default JobRoles;
