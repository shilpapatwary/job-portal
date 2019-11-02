import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import { jobs } from '../test/testData';
import Layout from './Layout';
import Header from './Header';
import JobList from './JobList';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<IndexPage />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<Layout >
            <JobList jobs={jobs}></JobList>
        </Layout>);
    })
    it('should contain a Header component', () => {
        wrapper.find(Header).length.should.equal(1);
    });
    
    it('should contain RecipeList Component ', () => {
        wrapper.find(JobList).length.should.equal(1);
    });
});