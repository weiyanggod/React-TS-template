import { createBrowserRouter, Outlet } from 'react-router-dom'

import Home from '@/pages/Home.tsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)
