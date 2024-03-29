import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga'
import makeStore from '../src/store/store';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(makeStore)(withReduxSaga(MyApp));