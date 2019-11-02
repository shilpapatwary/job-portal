import React from "react";
import styled from "styled-components";

const CompanyDetails: React.FC = () => {
  return (
    <CompanyDescription className="company-description">
      <FlexItem>
        <h3>About Company</h3><Divider></Divider>
      </FlexItem>
      <Desc>
        XYZ Consulting is a new company that provides expertise in search
        marketing solutions for businesses worldwide, including website
        promotion, online advertising, and search engine optimization techniques
        to improve its clients' positioning in search engines. We cater to the
        higher education market, including colleges, universities, and
        professional educational institutions.
      </Desc>
    </CompanyDescription>
  );
};

const CompanyDescription = styled.section``;
const Desc = styled.p``;
const Divider = styled.div`
  width: 30%;
  border-bottom: 1px solid gray;
  height: 0.7rem;
  margin-left: 0.5rem;
`;
const FlexItem = styled.div`
  display: flex;
`;
export default CompanyDetails;
