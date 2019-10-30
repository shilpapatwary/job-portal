import React, { Component } from 'react';
import { withRedux } from '../lib/with-redux-store';
import {JobTypes, Job} from '../src/redux/types';
 
interface Props {
     jobsList: Array<Job>
 }

class IndexPage extends Component<Props, any> {
    render() {
        return this.props.jobsList ? <div>Hello. testing </div> : <div>Loading...</div>
    }

    static async getInitialProps({ reduxStore }) {
        const { dispatch } = reduxStore
          await dispatch({
            type: JobTypes.GET_JOBS
          })
          const { jobsList } = reduxStore.getState();
          console.log(reduxStore.getState())
          return { jobsList }
    }
}
export default withRedux(IndexPage)
