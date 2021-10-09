import '../styles/LandingPages.css';
import '../styles/register.css';
import Head from 'next/head';
import {AppProps} from 'next/app'
import script from 'next/script';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store/index'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      
      

    </>
  )
}


const makeStore = () => store
export default withRedux(makeStore)(MyApp); 
