import React, { Component } from 'react';
import {JobTypes, Job} from '../src/redux/types';
import Layout from '../src/components/Layout';
import JobList from '../src/components/JobList';
import { createGlobalStyle } from 'styled-components';
import {connect} from "react-redux";

interface Props {
     jobsList: Array<Job>,
     reduxStore: any
 }
 const GlobalStyle = createGlobalStyle`
 body, h1,h2,h3 {
   margin:0;
   padding:0;
 }
 li {
     list-style: none;
 }
 `;
class IndexPage extends Component<Props, any> {
    render() {
        return <Layout>
            <GlobalStyle />
            {this.props.jobsList && this.props.jobsList.length > 0 ? <JobList jobs={this.props.jobsList}/> : <div>Loading...</div>}
        </Layout>
    }

    static async getInitialProps({ store }) {
        await store.dispatch({
            type: JobTypes.GET_JOBS
        })
        return {};
    }
}
export default connect(state => state)(IndexPage);
