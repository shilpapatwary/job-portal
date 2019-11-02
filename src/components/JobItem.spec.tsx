import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import JobItem from './JobItem';
import { jobs } from '../test/testData';
import Link from 'next/link';
 
should();

Enzyme.configure({ adapter: new Adapter() });

describe("<JobItem />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<JobItem job={jobs[0]}/>);
    })
    it('should contain a link to Job details page', () => {
        wrapper.find(Link).length.should.equal(1);
    });
});