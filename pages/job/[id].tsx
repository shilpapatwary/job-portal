import React, { Component } from 'react';
import { Job, JobTypes} from '../../src/redux/types';
import Layout from '../../src/components/Layout';
import { createGlobalStyle } from 'styled-components';
import {connect} from "react-redux";
import JobDetails from '../../src/components/JobDetails';

interface Props {
     jobsList: Array<Job>,
     currentJob: Job
 }

 const GlobalStyle = createGlobalStyle`
 body, h1,h2,h3, ol, li {
   margin:0;
   padding:0;
 }
 li {
     list-style: none;
 }
 `;

 class JobDetailsPage extends Component<Props, any> {
    render() {
        return <Layout>
            <GlobalStyle />
            {this.props.currentJob && <JobDetails job={this.props.currentJob}></JobDetails>}
        </Layout>
    }

    static async getInitialProps({ store, query  }) {
        await store.dispatch({
            type: JobTypes.GET_JOB,
            id: query.id
        })
       return {}
    }
}
export default connect(state => state)(JobDetailsPage);
