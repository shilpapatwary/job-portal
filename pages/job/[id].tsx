import React, { Component } from 'react';
import { Job, JobTypes} from '../../src/redux/types';
import Layout from '../../src/components/Layout';
import {connect} from "react-redux";
import JobDetails from '../../src/components/JobDetails';
import GlobalStyles from '../../src/styles/GlobalStyles';
import { Store } from '../../src/redux/types';
interface Props {
     jobsList: Array<Job>,
     currentJob: Job
 }
interface Query {
    id: string
}


 class JobDetailsPage extends Component<Props, any> {
    render() {
        return <Layout>
            <GlobalStyles />
            {this.props.currentJob ? <JobDetails job={this.props.currentJob}></JobDetails> : <div>Loading ..</div>}
        </Layout>
    }

    static async getInitialProps({ store, query  }: {store: Store, query: Query}) {
        await store.dispatch({
            type: JobTypes.GET_JOB,
            id: query.id
        })
       return {}
    }
}
export default connect(state => state)(JobDetailsPage);
