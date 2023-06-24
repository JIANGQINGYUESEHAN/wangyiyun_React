import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

let Discover = lazy(() => import('@/views/discover'));
let Mine = lazy(() => import('@/views/mine'));
let Focus = lazy(() => import('@/views/focus'));
let Download = lazy(() => import('@/views/download'));
let Disc = lazy(() => import('@/views/discover/SecondaryComponents/disc'));
let Playlist = lazy(
  () => import('@/views/discover/SecondaryComponents/playlist')
);
let Radio = lazy(() => import('@/views/discover/SecondaryComponents/radio'));
let Singer = lazy(() => import('@/views/discover/SecondaryComponents/singer'));
let Recommend = lazy(
  () => import('@/views/discover/SecondaryComponents/recommend')
);

let Rank = lazy(() => import('@/views/discover/SecondaryComponents/rank'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover/recommend" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/disc',
        element: <Disc />
      },
      {
        path: '/discover/rank',
        element: <Rank />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/singer',
        element: <Singer />
      },
      {
        path: '/discover/radio',
        element: <Radio />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
];

export default routes;
