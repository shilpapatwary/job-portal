import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import JobList from './JobList';
import { jobs } from '../test/testData';
 
should();

Enzyme.configure({ adapter: new Adapter() });

describe("<JobItem />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = mount(<JobList jobs={jobs}/>);
    })
    it('should contain a list of unordered items', () => {
        expect(wrapper.find('ul').exists()).toBeTruthy()
    });
});