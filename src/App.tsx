import React, { Suspense, memo } from 'react';
import routes from './router/router';
import { Link, useRoutes } from 'react-router-dom';
import Head from './components/head';
import Footer from './components/footer';
export default memo(function App() {
  return (
    <div>
      <Head />

      <div  >
        <Suspense>{useRoutes(routes)}</Suspense>
      </div>
      <Footer />
    </div>
  );
});
