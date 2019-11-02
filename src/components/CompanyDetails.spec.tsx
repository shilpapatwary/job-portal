import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import CompanyDetails from './CompanyDetails';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<CompanyDetails />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<CompanyDetails />);
    })
    it('should contain a company description section', () => {
        wrapper.find(".company-description").length.should.equal(1);
    });
    
});