import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import JobRoles from './JobRoles';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<JobRoles />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = mount(<JobRoles />);
    })
    it('should contain a ordered list of roles', () => {
        wrapper.find("ol").length.should.equal(1);
    });
    
});