import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import MainLayout from '../components/layouts/MainLayout';
import PropTypes from "prop-types";
import '../styles/main.scss';

import FormComponent from '../components/forms/form'

const MyApp = ({Component, pageProps}) => {

  /**
   * Для просмотра консоли на мобильных устройствах
   * Пример: http://localhost:3000/?eruda=true
   */
  useEffect(() => {
    if (!/eruda=true/.test(window.location)) return;
    const script = document.createElement("script");
    script.src = '//cdn.jsdelivr.net/npm/eruda';
    script.async = true;
    script.onload = () => eruda.init();
    document.body.appendChild(script);
  }, []);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />

        <FormComponent/>
      </MainLayout>
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default MyApp;
