import React, { Suspense, memo } from 'react';
import routes from './router/router';
import { Link, useRoutes } from 'react-router-dom';
export default memo(function App() {
  return (
    <div>
      <div>
        <Link to="/discover">发现</Link>
        <Link to="/mine">我的</Link>
        <Link to="/download">下载</Link>
        <Link to="/friend">朋友</Link>
      </div>
      <Suspense>{useRoutes(routes)}</Suspense>
    </div>
  );
});
