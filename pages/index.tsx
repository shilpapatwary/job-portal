import React, { Component } from 'react';
import {JobTypes, Job} from '../src/redux/types';
import Layout from '../src/components/Layout';
import JobList from '../src/components/JobList';
import {connect} from "react-redux";
import GlobalStyles from '../src/styles/GlobalStyles';
import { Store } from '../src/redux/types';
interface Props {
     jobsList: Array<Job>
 }
class IndexPage extends Component<Props, any> {
  render() {
      return (
          <Layout>
              <GlobalStyles />
              {this.props.jobsList && this.props.jobsList.length > 0 ? (
                  <JobList jobs={this.props.jobsList} />
              ) : (
                      <div>Loading...</div>
                  )}
          </Layout>
      );
  }
  
  static async getInitialProps({ store }: {store: Store}) {
    await store.dispatch({
      type: JobTypes.GET_JOBS
    });
    return {};
  }
}
export default connect(state => state)(IndexPage);
