import React, { Component } from 'react';
import { Job, JobTypes} from '../../src/redux/types';
import Layout from '../../src/components/Layout';
import {connect} from "react-redux";
import JobDetails from '../../src/components/JobDetails';
import GlobalStyles from '../../src/styles/GlobalStyles';

interface Props {
     jobsList: Array<Job>,
     currentJob: Job
 }


 class JobDetailsPage extends Component<Props, any> {
    render() {
        return <Layout>
            <GlobalStyles />
            {this.props.currentJob ? <JobDetails job={this.props.currentJob}></JobDetails> : <div>Loading ..</div>}
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
