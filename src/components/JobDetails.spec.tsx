import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import JobDetails from './JobDetails';
import CompanyDetails from './CompanyDetails';
import JobRoles from './JobRoles';
import {jobs} from '../test/testData';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<JobDetails />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = mount(<JobDetails job={jobs[0]}/>);
    })
    it('should contain a company description component', () => {
        wrapper.find(CompanyDetails).length.should.equal(1);
    });
    it('should contain a Job Roles component', () => {
        wrapper.find(JobRoles).length.should.equal(1);
    });
    it('should contain a button to apply for the role', () => {
        expect(wrapper.find('button').exists()).toBeTruthy()
    });
});